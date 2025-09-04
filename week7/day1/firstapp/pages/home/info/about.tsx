import Link from "next/link";

export default function About() {
  return (
    <div className="flex flex-col gap-4 items-center justify-items-center">
      <a>Это страница home/info/about</a>
      <Link href="/" className="text-purple-600">
        Перейти на главную
      </Link>
    </div>
  );
}
