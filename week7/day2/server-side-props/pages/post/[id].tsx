import { GetServerSidePropsContext } from "next";
import Link from "next/link";

type PostInfoProps = {
  post: {
    userId: number;
    id: number;
    title: string;
    body: string;
  };
};

export default function PostInfo({ post }: PostInfoProps) {
  return (
    <>
      <div
        style={{
          display: "flex",
          gap: 20,
          margin: 20,
          flexDirection: "column",
        }}
      >
        <Link href="/">Назад</Link>
        <a>{post.title}</a>
      </div>
    </>
  );
}

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { id } = context.params || {};

  if (!id) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const result = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );

  if (!result.ok) {
    return {
      notFound: true,
    };
  }

  const post = await result.json();

  return {
    props: {
      post,
    },
  };
};
