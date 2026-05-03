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
    marginTop: 10,
    color: "#0C121A",
  },

  subText: {
    fontSize: 14,
    color: "#6B7280",
    marginBottom: 20,
  },

  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 3,
    marginBottom: 20,
  },

  label: {
    fontSize: 14,
    color: "#374151",
    marginBottom: 5,
  },

  input: {
    borderWidth: 1,
    borderColor: "#E5E7EB",
    padding: 12,
    borderRadius: 8,
    fontSize: 16,
    backgroundColor: "#FAFAFA",
  },

  inputError: {
    borderColor: "red",
  },

  error: {
    color: "red",
    marginTop: 5,
    fontSize: 12,
  },
});

export default styles;
