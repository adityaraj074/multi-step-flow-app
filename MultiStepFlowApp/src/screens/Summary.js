import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import { FormContext } from "../context/FormContext";
import CustomButton from "../components/CustomButton";
import { saveProgress } from "../services/api";
import { saveLocal } from "../utils/storage";
import styles from "../styles/SummaryStyles";

const Summary = ({ navigation }) => {
  const { formData, resetForm, updateData } = useContext(FormContext);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);

    const cleanedData = {
      ...formData,
      extra: formData.preference === "advanced" ? formData.extra : "",
    };

    try {
      await saveProgress(cleanedData);
      await saveLocal(cleanedData);

      updateData("isSubmitted", true);

      Alert.alert("Success", "Data submitted successfully", [
        {
          text: "Start New",
          onPress: () => {
            resetForm();

            navigation.reset({
              index: 0,
              routes: [{ name: "Step1" }],
            });
          },
        },
      ]);
    } catch (err) {
      Alert.alert("Error", "Failed to save. Retry?", [
        { text: "Retry", onPress: handleSubmit },
        { text: "Cancel" },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.heading}>Review Your Details</Text>
      <Text style={styles.subText}>
        Please confirm your information before submitting
      </Text>

      {/* Summary Card */}
      <View style={styles.card}>
        {/* Age */}
        <View style={styles.item}>
          <Text style={styles.label}>Age</Text>
          <Text style={styles.value}>{formData.age || "-"}</Text>
        </View>

        <View style={styles.divider} />

        {/* Goal */}
        <View style={styles.item}>
          <Text style={styles.label}>Goal</Text>
          <Text style={styles.value}>{formData.goal || "-"}</Text>
        </View>

        <View style={styles.divider} />

        {/* Preference */}
        <View style={styles.item}>
          <Text style={styles.label}>Preference</Text>
          <Text style={styles.value}>{formData.preference || "-"}</Text>
        </View>

        {/* Show only if ADVANCED */}
        {formData.preference === "advanced" && formData.extra ? (
          <>
            <View style={styles.divider} />

            <View style={styles.item}>
              <Text style={styles.label}>Additional Info</Text>
              <Text style={styles.value}>{formData.extra}</Text>
            </View>
          </>
        ) : null}
      </View>

      {/* Buttons Row */}
      <View style={styles.buttonRow}>
        {/* Edit */}
        <View style={{ flex: 1, marginRight: 5 }}>
          <CustomButton
            title="Edit"
            onPress={() => navigation.navigate("Step1")}
            style={{ backgroundColor: "#E5E7EB" }}
            textStyle={{ color: "#111827" }}
          />
        </View>

        {/* Submit */}
        <View style={{ flex: 1, marginLeft: 5 }}>
          <CustomButton
            title="Submit"
            onPress={handleSubmit}
            loading={loading}
          />
        </View>
      </View>
    </View>
  );
};

export default Summary;
