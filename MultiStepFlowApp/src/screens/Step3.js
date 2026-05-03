import React, { useContext, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { FormContext } from "../context/FormContext";
import CustomButton from "../components/CustomButton";
import ProgressBar from "../components/ProgressBar";
import styles from "../styles/Step3Styles";

const Step3 = ({ navigation }) => {
  const { updateData, formData } = useContext(FormContext);
  const [preference, setPreference] = useState(formData.preference || "");
  const [error, setError] = useState("");

  const options = [
    {
      label: "Basic",
      value: "basic",
      desc: "Quick setup with minimal inputs",
    },
    {
      label: "Advanced",
      value: "advanced",
      desc: "Detailed configuration with extra options",
    },
  ];

  const handleNext = () => {
    if (!preference) {
      setError("Please select a preference");
      return;
    }

    setError("");

    if (preference === "basic") {
      updateData("extra", "");
    }

    updateData("preference", preference);

    if (preference === "advanced") {
      updateData("currentStep", 4);
      navigation.navigate("Step4");
    } else {
      updateData("currentStep", 5);
      navigation.navigate("Summary");
    }
  };

  return (
    <View style={styles.container}>
      <ProgressBar step={3} />

      {/* Header */}
      <Text style={styles.heading}>Choose your preference</Text>
      <Text style={styles.subText}>
        Select how you want to continue your setup
      </Text>

      {/* Options */}
      <View style={{ marginTop: 10 }}>
        {options.map((item) => {
          const isSelected = preference === item.value;

          return (
            <TouchableOpacity
              key={item.value}
              style={[styles.card, isSelected && styles.selectedCard]}
              onPress={() => {
                setPreference(item.value);
                setError("");
              }}
              activeOpacity={0.8}
            >
              <View>
                <Text style={styles.cardTitle}>{item.label}</Text>
                <Text style={styles.cardDesc}>{item.desc}</Text>
              </View>

              {/* Radio Indicator */}
              <View
                style={[styles.radio, isSelected && styles.radioSelected]}
              />
            </TouchableOpacity>
          );
        })}
      </View>

      {/* Error */}
      {error ? <Text style={styles.error}>{error}</Text> : null}

      {/* Buttons Row */}
      <View style={styles.buttonRow}>
        {/* Back */}
        <View style={{ flex: 1, marginRight: 5 }}>
          <CustomButton
            title="Back"
            onPress={() => {
              updateData("currentStep", 2);
              if (navigation.canGoBack()) {
                navigation.goBack();
              } else {
                navigation.navigate("Step2");
              }
            }}
            style={{ backgroundColor: "#E5E7EB" }}
            textStyle={{ color: "#111827" }}
          />
        </View>

        {/* Next */}
        <View style={{ flex: 1, marginLeft: 5 }}>
          <CustomButton
            title="Continue"
            onPress={handleNext}
            disabled={!preference}
          />
        </View>
      </View>
    </View>
  );
};

export default Step3;
