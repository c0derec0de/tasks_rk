import { useRegistration } from "./useRegistrationForm";
import FormField from "./formField";

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
        <FormField label="Введите email * " error={errors.email}>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={formData.email ?? ""}
          />
        </FormField>
        <FormField label="Введите пароль * " error={errors.password}>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={formData.password ?? ""}
          />
        </FormField>
        <FormField label="Подтвердите пароль * " error={errors.confirmPassword}>
          <input
            type="password"
            name="confirmPassword"
            onChange={handleChange}
            value={formData.confirmPassword ?? ""}
          ></input>
        </FormField>

        <FormField label="Введите возраст " error={errors.age}>
          <input
            type="number"
            name="age"
            onChange={handleChange}
            value={formData.age ?? ""}
          ></input>
        </FormField>
        <FormField
          label="Согласие с правилами конфиденциальности * "
          error={errors.acceptTerms}
        >
          <input
            type="checkbox"
            name="acceptTerms"
            checked={formData.acceptTerms || false}
            onChange={handleChange}
          />
        </FormField>
        <button>Зарегистрироваться</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
