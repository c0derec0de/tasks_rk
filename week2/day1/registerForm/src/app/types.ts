interface RegistrationFormData {
  email: string;
  password: string;
  confirmPassword: string;
  age?: number;
  acceptTerms: boolean;
}

export type RegistrationFormDraft = Partial<RegistrationFormData>; // опциональные поля

export type RegistrationCredentials = Pick<
  RegistrationFormData,
  "email" | "password"
>;

export type FormWithoutConfirmation = Omit<
  RegistrationFormData,
  "confirmPassword"
>;

export type FormErrors = Partial<Record<keyof RegistrationFormData, string>>;
