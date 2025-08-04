import { type RegistrationFormDraft } from "./types";
import { useState, type FormEvent } from "react";

const RegistrationForm = () => {
  const [formData, setFormData] = useState<RegistrationFormDraft>({
    email: "",
    password: "",
    confirmPassword: "",
    age: undefined,
    acceptTerms: false,
  });

  const [errors, setErrors] = useState<
    Partial<Record<keyof RegistrationFormDraft, string>>
  >({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type == "checkbox" ? checked : value,
    }));
  };

  const validation = () => {
    const newError: Partial<Record<keyof RegistrationFormDraft, string>> = {};
    if (formData.password !== formData.confirmPassword) {
      newError.confirmPassword = "Пароли не совпадают";
    }
    setErrors(newError);
    return Object.keys(newError).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validation()) {
      console.log(formData);
      alert("Успешная регистрация");
    }
  };

  return (
    <div
      style={{
        padding: "20px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <form onSubmit={handleSubmit}>
        <div>
          <label>Введите email *</label>
          <input
            type="email"
            name="email"
            id="em"
            onChange={handleChange}
            value={formData.email}
          ></input>
        </div>
        <div>
          <label>Введите пароль *</label>
          <input
            type="password"
            name="password"
            id="pa"
            onChange={handleChange}
            value={formData.password}
          ></input>
        </div>
        <div>
          <label>Подтвердите пароль *</label>
          <input
            type="password"
            name="confirmPassword"
            id="coPa"
            onChange={handleChange}
            value={formData.confirmPassword}
          ></input>
          {errors.confirmPassword && (
            <div style={{ color: "red" }}>{errors.confirmPassword}</div>
          )}
        </div>
        <div>
          <label>Введите возраст</label>
          <input
            type="number"
            name="age"
            id="ag"
            onChange={handleChange}
            value={formData.age ?? ""}
          ></input>
        </div>
        <div>
          <label>Согласие с правилами конфиденциальности *</label>
          <input
            type="checkbox"
            name="acceptTerms"
            checked={formData.acceptTerms || false}
            onChange={handleChange}
            required
          />
        </div>
        <button>Зарегестрироваться</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
