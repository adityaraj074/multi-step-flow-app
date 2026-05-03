import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F5F7FA",
  },

  heading: {
    fontSize: 22,
    fontWeight: "700",
    color: "#0C121A",
    marginTop: 10,
  },

  subText: {
    fontSize: 14,
    color: "#6B7280",
    marginBottom: 15,
  },

  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    marginBottom: 15,
  },

  label: {
    fontSize: 14,
    color: "#374151",
    marginBottom: 6,
  },

  input: {
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 8,
    padding: 12,
    fontSize: 14,
    backgroundColor: "#FAFAFA",
    textAlignVertical: "top",
  },

  inputError: {
    borderColor: "red",
  },

  error: {
    color: "red",
    fontSize: 12,
    marginTop: 5,
  },

  buttonRow: {
    flexDirection: "row",
    marginTop: 20,
  },
});

export default styles;
