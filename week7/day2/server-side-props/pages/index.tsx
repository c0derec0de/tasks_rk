import Link from "next/link";

export default function Home() {
  return (
    <>
      <div
        style={{
          margin: 20,
        }}
      >
        <Link href="/post/2">Перейти на пост с айди 2</Link>
      </div>
    </>
  );
}
