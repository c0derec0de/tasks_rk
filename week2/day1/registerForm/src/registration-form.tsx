import type RegistrationFormData from "./types";
import { useState } from "react";

const RegistrationForm = () => {
  const [formData, setFormData] = useState<RegistrationFormData>({
    email: "",
    password: "",
    confirmPassword: "",
    age: 0,
    acceptTerms: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = () => {
    console.log(formData);
    alert("Успешная регистрация");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Введите email</label>
        <input
          type="email"
          name="email"
          id="em"
          onChange={handleChange}
          value={formData.email}
        ></input>
        <label>Введите пароль</label>
        <input
          type="password"
          name="password"
          id="pa"
          onChange={handleChange}
          value={formData.password}
        ></input>
        <label>Подтвердите пароль</label>
        <input
          type="confirmPassword"
          name="confirmPassword"
          id="coPa"
          onChange={handleChange}
          value={formData.confirmPassword}
        ></input>
        <label>Введите возраст</label>
        <input
          type="age"
          name="age"
          id="ag"
          onChange={handleChange}
          value={formData.age}
        ></input>
        <div>
          <label>Согласие с правилами конфиденциальности</label>
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
