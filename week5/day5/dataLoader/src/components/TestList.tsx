import { useFetch } from "../hooks/useFetch";

export const TestList = () => {
  const { data, error, loading } = useFetch<{ id: number; title: string }[]>(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (loading) {
    console.log("Загрузка");
  }
  if (error) {
    console.log("Ошибка", error);
  }

  if (!data) {
    return <div>Нет данных</div>;
  }

  return (
    <>
      <div>
        {data.map((item) => (
          <div key={item.id}>{item.title}</div>
        ))}
      </div>
    </>
  );
};
