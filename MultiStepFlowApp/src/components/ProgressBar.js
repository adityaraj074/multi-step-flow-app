import { View } from "react-native";

const ProgressBar = ({ step }) => {
  return (
    <View style={{ height: 10, backgroundColor: "#ddd", margin: 10 }}>
      <View
        style={{
          width: `${(step / 5) * 100}%`,
          height: "100%",
          backgroundColor: "blue",
        }}
      />
    </View>
  );
};

export default ProgressBar;
