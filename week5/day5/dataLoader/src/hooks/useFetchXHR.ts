import { useState, useEffect } from "react";

interface UseFetchXHRResult<T> {
  data: T | null;
  error: string | null;
  loading: boolean;
}

const fetchWithXHR = <T>(url: string, signal: AbortSignal): Promise<T> => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.responseType = "json";

    if (signal) {
      signal.addEventListener("abort", () => xhr.abort());
    }

    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.response as T);
      } else {
        reject(new Error(xhr.statusText || "fetchXHR Error"));
      }
    };

    xhr.onerror = function () {
      reject(new Error("Network Error"));
    };

    xhr.send();
  });
};

export const useFetchXHR = <T>(url: string): UseFetchXHRResult<T> => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const controller = new AbortController();

    const loadData = async () => {
      try {
        const result = await fetchWithXHR<T>(url, controller.signal);
        setData(result);
        setError(null);
      } catch (err) {
        if (err instanceof Error && err.message !== "Aborted") {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    loadData();

    return () => {
      console.log("отмена запроса XHR при анмаунте через AbortController");
      controller.abort();
    };
  }, [url]);

  return { data, error, loading };
};
