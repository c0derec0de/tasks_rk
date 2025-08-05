import { type FormFieldProps } from "./types";

const FormField = ({ label, error, children }: FormFieldProps) => {
  return (
    <div>
      <label>{label}</label>
      {children}
      {error && <div style={{ color: "red" }}>{error}</div>}
    </div>
  );
};
export default FormField;
