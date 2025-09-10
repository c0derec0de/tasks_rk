import Link from "next/link";

export default function Home() {
  const postId = [1, 2, 3, 4];
  return (
    <>
      <div
        style={{
          margin: 20,
        }}
      >
        <ul>
          {postId.map((id) => (
            <li key={id}>
              <Link href={`/post/${id}`}>Перейти на пост с айди {id}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
