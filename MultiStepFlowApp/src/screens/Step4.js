import React, { useContext, useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { FormContext } from "../context/FormContext";
import CustomButton from "../components/CustomButton";
import ProgressBar from "../components/ProgressBar";
import styles from "../styles/Step4Styles";

const Step4 = ({ navigation }) => {
  const { updateData, formData } = useContext(FormContext);
  const [extra, setExtra] = useState(formData.extra || "");
  const [error, setError] = useState("");

  const handleNext = () => {
    if (!extra.trim()) {
      setError("This field is required");
      return;
    }

    setError("");
    updateData("extra", extra);
    updateData("currentStep", 5);
    navigation.navigate("Summary");
  };

  return (
    <View style={styles.container}>
      <ProgressBar step={4} />

      {/* Header */}
      <Text style={styles.heading}>Advanced Setup</Text>
      <Text style={styles.subText}>
        Provide additional details to customize your experience
      </Text>

      {/* Input Card */}
      <View style={styles.card}>
        <Text style={styles.label}>Extra Information</Text>

        <TextInput
          value={extra}
          onChangeText={(text) => {
            setExtra(text);
            setError("");
          }}
          placeholder="Enter additional details..."
          multiline
          numberOfLines={4}
          style={[styles.input, error && styles.inputError]}
        />

        {/* Error */}
        {error ? <Text style={styles.error}>{error}</Text> : null}
      </View>

      {/* Buttons Row */}
      <View style={styles.buttonRow}>
        {/* Back */}
        <View style={{ flex: 1, marginRight: 5 }}>
          <CustomButton
            title="Back"
            onPress={() => {
              updateData("currentStep", 3);
              if (navigation.canGoBack()) {
                navigation.goBack();
              } else {
                navigation.navigate("Step3");
              }
            }}
            style={{ backgroundColor: "#E5E7EB" }}
            textStyle={{ color: "#111827" }}
          />
        </View>

        {/* Continue */}
        <View style={{ flex: 1, marginLeft: 5 }}>
          <CustomButton
            title="Finish"
            onPress={handleNext}
            disabled={!extra.trim()}
          />
        </View>
      </View>
    </View>
  );
};

export default Step4;
