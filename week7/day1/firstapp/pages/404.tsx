import Image from "next/image";

export default function NotFound() {
  return (
    <div className="flex flex-col gap-4 items-center justify-items-center">
      <a>Кастомная 404 ошибка</a>
      <Image
        src="/404error.jpg"
        alt={"404 error"}
        width={500}
        height={300}
      ></Image>
    </div>
  );
}
