import React, { useEffect, useState, useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import AppNavigator from "./src/navigation/AppNavigator";
import { FormProvider, FormContext } from "./src/context/FormContext";
import { getLocal } from "./src/utils/storage";

const Root = () => {
  const { setFullData } = useContext(FormContext);

  const [loading, setLoading] = useState(true);
  const [startRoute, setStartRoute] = useState("Step1");

  useEffect(() => {
    const init = async () => {
      try {
        const local = await getLocal();

        if (local) {
          setFullData(local);

          const step = local.currentStep || 1;

          if (local.isSubmitted) {
            setStartRoute("Step1");
          } else if (step === 1) {
            setStartRoute("Step1");
          } else if (step === 2) {
            setStartRoute("Step2");
          } else if (step === 3) {
            setStartRoute("Step3");
          } else if (step === 4) {
            setStartRoute("Step4");
          } else {
            setStartRoute("Summary");
          }
        } else {
          setStartRoute("Step1");
        }
      } catch (e) {
        console.log("Error loading:", e);
        setStartRoute("Step1");
      } finally {
        setLoading(false);
      }
    };

    init();
  }, []);

  if (loading) return null;

  return <AppNavigator startRoute={startRoute} />;
};

const App = () => {
  return (
    <SafeAreaProvider>
      <FormProvider>
        <NavigationContainer>
          <Root />
        </NavigationContainer>
      </FormProvider>
    </SafeAreaProvider>
  );
};

export default App;
