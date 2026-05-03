import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Step1 from "../screens/Step1";
import Step2 from "../screens/Step2";
import Step3 from "../screens/Step3";
import Step4 from "../screens/Step4";
import Summary from "../screens/Summary";

const Stack = createNativeStackNavigator();

const AppNavigator = ({ startRoute }) => {
  return (
    <Stack.Navigator
      initialRouteName={startRoute}
      screenOptions={{
        headerStyle: { backgroundColor: "#0C121A" },
        headerTintColor: "#fff",
        headerTitleAlign: "center",
        headerShadowVisible: false,
        headerTitleStyle: {
          fontSize: 16,
          fontWeight: "600",
        },
      }}
    >
      <Stack.Screen
        name="Step1"
        component={Step1}
        options={{
          title: "Step 1 of 4 • Age",
          headerBackVisible: false,
          headerLeft: () => null,
          gestureEnabled: false,
        }}
      />

      <Stack.Screen
        name="Step2"
        component={Step2}
        options={{ title: "Step 2 of 4 • Goal" }}
      />

      <Stack.Screen
        name="Step3"
        component={Step3}
        options={{ title: "Step 3 of 4 • Preferences" }}
      />

      <Stack.Screen
        name="Step4"
        component={Step4}
        options={{ title: "Step 4 of 4 • Advanced" }}
      />

      <Stack.Screen
        name="Summary"
        component={Summary}
        options={{ title: "Summary" }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
