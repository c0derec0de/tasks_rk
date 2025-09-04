import Link from "next/link";

export default function Home() {
  const usersId = [22, 11, 33, 44, 55];
  return (
    <div className="flex flex-col items-center justify-items-center gap-4">
      <a>Переход на /home/[userId]:</a>
      <ul>
        {usersId.map((id) => (
          <li key={id}>
            <Link href={`/home/${id}`} className="text-purple-600">
              userId {id}
            </Link>
          </li>
        ))}
      </ul>

      <Link href="/home/info/about" className="text-purple-600">
        Перейти на /home/info/about
      </Link>
      <Link href="/err" className="text-purple-600">
        Перейти на ошибку 404
      </Link>

      <a>Переход на articles/[...slug]:</a>
      <Link href="/articles/a" className="text-purple-600">
        /articles/a
      </Link>
      <Link href="/articles/a/b" className="text-purple-600">
        /articles/a/b
      </Link>
      <Link href="/articles/a/b/c" className="text-purple-600">
        /articles/a/b/c
      </Link>
    </div>
  );
}
