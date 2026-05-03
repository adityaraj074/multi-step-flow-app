import React, { createContext, useState } from "react";
import { saveLocal } from "../utils/storage";

export const FormContext = createContext();

const initialState = {
  age: "",
  goal: "",
  preference: "",
  extra: "",
  currentStep: 1,
  isSubmitted: false,
};

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState(initialState);

  const updateData = async (key, value) => {
    setFormData((prev) => {
      const updated = {
        ...prev,
        [key]: value,
      };

      saveLocal(updated);

      return updated;
    });
  };

  const setFullData = (data) => {
    setFormData((prev) => ({
      ...prev,
      ...data,
    }));
  };

  const resetForm = async () => {
    setFormData(initialState);
    await saveLocal(initialState);
  };

  return (
    <FormContext.Provider
      value={{
        formData,
        updateData,
        setFullData,
        resetForm,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
