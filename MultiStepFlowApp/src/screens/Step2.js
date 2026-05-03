import React, { useContext, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { FormContext } from "../context/FormContext";
import CustomButton from "../components/CustomButton";
import ProgressBar from "../components/ProgressBar";
import styles from "../styles/Step2Styles";

const Step2 = ({ navigation }) => {
  const { updateData, formData } = useContext(FormContext);
  const [goal, setGoal] = useState(formData.goal || "");
  const [error, setError] = useState("");

  const goals = [
    { label: "Fitness", desc: "Improve health & stay active" },
    { label: "Learning", desc: "Build new skills & knowledge" },
    { label: "Finance", desc: "Manage and grow your money" },
  ];

  const handleNext = () => {
    if (!goal) {
      setError("Please select a goal to continue");
      return;
    }

    setError("");
    updateData("goal", goal);
    updateData("currentStep", 3);
    navigation.navigate("Step3");
  };

  return (
    <View style={styles.container}>
      <ProgressBar step={2} />

      {/* Header */}
      <Text style={styles.heading}>What's your goal?</Text>
      <Text style={styles.subText}>
        Choose one option that best matches your intent
      </Text>

      {/* Options */}
      <View style={{ marginTop: 10 }}>
        {goals.map((item) => {
          const isSelected = goal === item.label;

          return (
            <TouchableOpacity
              key={item.label}
              style={[styles.card, isSelected && styles.selectedCard]}
              onPress={() => {
                setGoal(item.label);
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
        {/* Back Button */}
        <View style={{ flex: 1, marginRight: 5 }}>
          <CustomButton
            title="Back"
            onPress={() => {
              updateData("currentStep", 1);
              if (navigation.canGoBack()) {
                navigation.goBack();
              } else {
                navigation.navigate("Step1");
              }
            }}
            style={{ backgroundColor: "#E5E7EB" }}
            textStyle={{ color: "#111827" }}
          />
        </View>

        {/* Next Button */}
        <View style={{ flex: 1, marginLeft: 5 }}>
          <CustomButton
            title="Continue"
            onPress={handleNext}
            disabled={!goal}
          />
        </View>
      </View>
    </View>
  );
};

export default Step2;
