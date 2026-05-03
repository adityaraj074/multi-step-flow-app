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
    borderRadius: 16,
    padding: 16,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 3,
  },

  item: {
    marginBottom: 12,
  },

  label: {
    fontSize: 12,
    color: "#6B7280",
    marginBottom: 4,
  },

  value: {
    fontSize: 15,
    fontWeight: "600",
    color: "#111827",
    lineHeight: 20,
  },

  divider: {
    height: 1,
    backgroundColor: "#E5E7EB",
    marginVertical: 10,
  },

  buttonRow: {
    flexDirection: "row",
    marginTop: 10,
  },
});

export default styles;
