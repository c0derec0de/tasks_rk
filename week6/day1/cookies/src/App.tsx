import { useCallback } from "react";
import "./App.css";

type CookieOptions = {
  path?: string;
  domain?: string;
  expires?: string;
  "max-age"?: number;
  secure?: boolean;
  samesite?: "strict" | "lax";
};

const DATE = "Tue, 19 Jan 2038 03:14:07 GMT";
const PATH = "/";

const setCookie = (
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

function getCookie(name: string) {
  const matches = document.cookie.match(
    new RegExp(
      "(?:^|; )" +
        name.replace(/([\\.$?*|{}\\(\\)\\[\]\\\\/\\+^])/g, "\\$1") +
        "=([^;]*)"
    )
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

const deleteCookies = (name: string) => {
  setCookie(name, "", {
    "max-age": -1,
  });
};

function App() {
  const name = "user";
  const value = "Uliana";

  const userCookie = getCookie(name);
  if (!userCookie) {
    setCookie(name, value, { secure: true, samesite: "strict" });
  } else {
    console.log(getCookie(name));
  }

  const handleDeleteCookies = useCallback(() => {
    deleteCookies(name);
    console.log("Куки успешно удалились");
  }, []);

  return (
    <>
      <div>
        <button onClick={handleDeleteCookies}>Удалить куки</button>
      </div>
    </>
  );
}

export default App;
