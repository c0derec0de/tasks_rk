import type { PropsWithChildren } from "react";

export type FormFieldProps = PropsWithChildren & {
  label: string;
  error?: string;
};

export const FormField = ({ label, error, children }: FormFieldProps) => {
  return (
    <div>
      <label>{label}</label>
      {children}
      {error && <div style={{ color: "red" }}>{error}</div>}
    </div>
  );
};
