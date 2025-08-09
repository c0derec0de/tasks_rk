type ICurrencyData = {
  Valute: {
    USD: {
      Value: number;
    };
  };
};

export const apiBank = async () => {
  try {
    const response = await fetch("https://www.cbr-xml-daily.ru/daily_json.js");
    if (!response.ok) {
      throw new Error("Сетевой ответ был не в порядке");
    }
    const data: ICurrencyData = await response.json();
    const currentCourse = data.Valute.USD.Value;
    console.log(currentCourse);
    return currentCourse;
  } catch (e) {
    console.log("API Ошибка:", e);
  }
};
