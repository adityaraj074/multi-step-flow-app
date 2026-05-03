import { TouchableOpacity, Text, StyleSheet } from "react-native";

const CustomButton = ({ title, onPress, style, textStyle, disabled }) => {
  return (
    <TouchableOpacity
      style={[styles.btn, style, disabled && { backgroundColor: "#A5D6A7" }]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "#4CAF50",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontWeight: "600",
  },
});
