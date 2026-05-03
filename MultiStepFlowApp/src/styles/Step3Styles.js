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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },

  selectedCard: {
    borderColor: "#4CAF50",
    backgroundColor: "#ECFDF5",
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111827",
  },

  cardDesc: {
    fontSize: 12,
    color: "#6B7280",
    marginTop: 3,
  },

  radio: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#9CA3AF",
  },

  radioSelected: {
    borderColor: "#4CAF50",
    backgroundColor: "#4CAF50",
  },

  error: {
    color: "red",
    fontSize: 12,
    marginBottom: 10,
  },

  buttonRow: {
    flexDirection: "row",
    marginTop: 20,
  },
});

export default styles;
