type CookieOptions = {
  path?: string;
  domain?: string;
  expires?: string;
  maxAge?: number;
  secure?: boolean;
  samesite?: "Strict" | "Lax" | "None";
};

const DATE = "Tue, 19 Jan 2038 03:14:07 GMT";
const PATH = "/";

export const setCookie = (
  name: string,
  value: string,
  options: CookieOptions = {}
) => {
  options = {
    path: PATH,
    expires: DATE,
    ...options,
  };

  let updatedCookie =
    encodeURIComponent(name) + "=" + encodeURIComponent(value);

  for (const optionKey in options) {
    updatedCookie += "; " + optionKey;
    const optionValue = options[optionKey as keyof CookieOptions];
    // для тех параметров где нужен только ключ (secure)
    if (typeof optionValue !== "boolean") {
      updatedCookie += "=" + optionValue;
    }
  }
  document.cookie = updatedCookie;
};
