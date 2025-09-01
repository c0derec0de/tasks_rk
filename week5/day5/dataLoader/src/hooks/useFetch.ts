import { useState, useEffect } from "react";

interface UseFetchResult<T> {
  data: T | null;
  error: Error | null;
  loading: boolean;
}

export const useFetch = <T>(url: string): UseFetchResult<T> => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          signal: controller.signal,
        });
        const result = await response.json();
        setData(result);
      } catch (err) {
        if ((err as Error).name === "AbortError") {
          console.log("Прервано!");
        } else {
          setError(err as Error);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    return () => {
      controller.abort();
      console.log("отмена запроса при анмаунте через AbortController");
    };
  }, [url]);

  return { data, error, loading };
};
