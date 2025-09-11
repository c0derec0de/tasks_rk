import { GetServerSidePropsContext } from "next";
import { useRouter } from "next/router";
import { setCookie } from "@/shared/cookiesParser";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  try {
    const logs = {
      url: context.resolvedUrl,
      timestamp: new Date().toISOString(),
    };
    const response = await fetch("http://localhost:3000/api/logs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(logs),
    });

    if (!response.ok) {
      return {
        notFound: true,
      };
    }
  } catch (error) {
    console.log(error);
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
}

export default function Login() {
  const router = useRouter();
  const redirectUri = (router.query.redirectUri as string) || "/profile";

  const handleSetCookies = () => {
    setCookie("auth_token", "new_token", { maxAge: 10000, path: "/" });
    router.push(redirectUri);
  };

  return (
    <div>
      <button onClick={handleSetCookies}>Установить куки</button>
    </div>
  );
}
