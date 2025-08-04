import { useRegistration } from "./useRegistrationForm";

const RegistrationForm = () => {
  const { formData, errors, handleChange, handleSubmit } = useRegistration();

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
          <label>Введите email * </label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={formData.email ?? ""}
          ></input>
          {errors.email && <div style={{ color: "red" }}>{errors.email}</div>}
        </div>
        <div>
          <label>Введите пароль * </label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={formData.password ?? ""}
          ></input>
          {errors.password && (
            <div style={{ color: "red" }}>{errors.password}</div>
          )}
        </div>
        <div>
          <label>Подтвердите пароль * </label>
          <input
            type="password"
            name="confirmPassword"
            onChange={handleChange}
            value={formData.confirmPassword ?? ""}
          ></input>
          {errors.confirmPassword && (
            <div style={{ color: "red" }}>{errors.confirmPassword}</div>
          )}
        </div>
        <div>
          <label>Введите возраст </label>
          <input
            type="number"
            name="age"
            onChange={handleChange}
            value={formData.age ?? ""}
          ></input>
        </div>
        <div>
          <label>Согласие с правилами конфиденциальности * </label>
          <input
            type="checkbox"
            name="acceptTerms"
            checked={formData.acceptTerms || false}
            onChange={handleChange}
          />
          {errors.acceptTerms && (
            <div style={{ color: "red" }}>{errors.acceptTerms}</div>
          )}
        </div>
        <button>Зарегестрироваться</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
