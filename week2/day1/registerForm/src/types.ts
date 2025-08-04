interface RegistrationFormData {
  email: string;
  password: string;
  confirmPassword: string;
  age?: number;
  acceptTerms: boolean;
}

type RegistrationFormDraft = Partial<RegistrationFormData>;

type RegistrationCredentials = Pick<RegistrationFormData, "email" | "password">;

type FormWithoutConfirmation = Omit<RegistrationFormData, "confirmPassword">;
