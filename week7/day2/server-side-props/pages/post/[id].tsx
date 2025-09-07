import { GetServerSidePropsContext } from "next";
import Link from "next/link";
import { useEffect, useLayoutEffect } from "react";

type PostInfoProps = {
  post: {
    userId: number;
    id: number;
    title: string;
    body: string;
  };
};

export default function PostInfo({ post }: PostInfoProps) {
  // window не доступен на сервере поэтому так проверяю
  console.log(
    "Рендеринг компонента на сервере ",
    typeof window === "undefined"
  );

  useLayoutEffect(() => {
    console.log("useLoyoutEffect на клиенте");
  }, []);

  useEffect(() => {
    console.log("useEffect на клиенте");
  }, []);

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
        <Link href="/" style={{ color: "blue" }}>
          Назад
        </Link>
        <a>{post.title}</a>
        <a>{post.body}</a>
      </div>
    </>
  );
}

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  try {
    console.log("getServerSideProps выполняется на сервере");

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

    if (!post?.id) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        post,
      },
    };
  } catch {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
};
