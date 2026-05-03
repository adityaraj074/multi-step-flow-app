import React, { useContext, useState, useEffect } from "react";
import { View, Text, TextInput } from "react-native";
import { FormContext } from "../context/FormContext";
import CustomButton from "../components/CustomButton";
import ProgressBar from "../components/ProgressBar";
import styles from "../styles/Step1Styles";

const Step1 = ({ navigation }) => {
  const { updateData, formData } = useContext(FormContext);

  const [age, setAge] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    setAge(formData?.age ? String(formData.age) : "");
  }, [formData?.age]);

  const validate = () => {
    if (!age) {
      setError("Age is required");
      return false;
    }

    if (isNaN(age) || Number(age) <= 0) {
      setError("Enter a valid age");
      return false;
    }

    setError("");
    return true;
  };

  const handleNext = async () => {
    if (!validate()) return;

    await updateData("age", age);
    await updateData("currentStep", 2);

    navigation.navigate("Step2");
  };

  return (
    <View style={styles.container}>
      <ProgressBar step={1} />

      {/* Header */}
      <Text style={styles.heading}>Let's get started</Text>
      <Text style={styles.subText}>Enter your age to continue</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Age</Text>

        {/* Input box */}
        <TextInput
          value={age}
          onChangeText={async (text) => {
            setAge(text);
            setError("");

            await updateData("age", text);

            if (!text) {
              await updateData("currentStep", 1);
            }
          }}
          placeholder="Enter your age"
          keyboardType="numeric"
          style={[styles.input, error ? styles.inputError : null]}
        />

        {/* Error */}
        {error ? <Text style={styles.error}>{error}</Text> : null}
      </View>

      {/* Continue */}
      <CustomButton title="Continue" onPress={handleNext} disabled={!age} />
    </View>
  );
};

export default Step1;
