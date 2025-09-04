import Link from "next/link";
import { useRouter } from "next/router";

export default function UserID() {
  const router = useRouter();
  const { userId } = router.query;
  console.log(router, router.query);
  return (
    <div className="flex flex-col items-center justify-items-center gap-4">
      <a>Это страница home/{userId} </a>
      <Link href="/" className="text-purple-600">
        Перейти на главную
      </Link>
    </div>
  );
}
