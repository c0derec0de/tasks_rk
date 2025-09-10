import Link from "next/link";
export default function Slug() {
  return (
    <div className="flex flex-col items-center justify-items-center gap-4">
      <a>Это страница articles/[...slug] </a>
      <Link href="/" className="text-purple-600">
        Перейти на главную
      </Link>
    </div>
  );
}
