import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveLocal = async (data) => {
  await AsyncStorage.setItem("formData", JSON.stringify(data));
};

export const getLocal = async () => {
  const data = await AsyncStorage.getItem("formData");
  return data ? JSON.parse(data) : null;
};
