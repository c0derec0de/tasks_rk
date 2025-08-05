import { useState, type FormEvent, type ChangeEvent } from "react";
import { type RegistrationFormDraft, type FormErrors } from "./types";

const initialState: RegistrationFormDraft = {
  email: "",
  password: "",
  confirmPassword: "",
  acceptTerms: false,
};

export const useRegistration = () => {
  const [formData, setFormData] = useState<RegistrationFormDraft>(initialState);

  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    let resultValue: string | number | boolean | undefined;

    if (type === "checkbox") {
      resultValue = checked;
    } else if (name === "password" || name === "confirmPassword") {
      resultValue = value.replace(/\s/g, "");
    } else if (name === "age") {
      const numericValue = value.replace(/[^0-9]/g, "");
      resultValue = numericValue === "" ? undefined : Number(numericValue);
    } else {
      resultValue = value;
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: resultValue,
    }));
  };

  const validateForm = () => {
    const newError: FormErrors = {};
    if (!formData.email) {
      newError.email = "Почта обязательна";
    }
    if (!formData.password) {
      newError.password = "Пароль обязателен";
    }
    if (formData.password && !formData.confirmPassword) {
      newError.confirmPassword = "Обязательно подтвердите пароль!";
    }
    if (
      formData.password !== formData.confirmPassword &&
      formData.password &&
      formData.confirmPassword
    ) {
      newError.confirmPassword = "Пароли не совпадают";
    }
    if (!formData.acceptTerms) {
      newError.acceptTerms = "Согласие обязательно";
    }

    setErrors(newError);
    return Object.keys(newError).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setFormData(initialState);
      alert("Успешная регистрация");
    }
  };

  return {
    formData,
    errors,
    handleChange,
    handleSubmit,
  };
};
