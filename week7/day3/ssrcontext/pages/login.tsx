import { GetServerSidePropsContext } from "next";
import { useRouter } from "next/router";
import { setCookie } from "nookies";

type LoginProps = {
  redirectUri: string;
};

export default function Login({ redirectUri }: LoginProps) {
  const router = useRouter();

  const handleSetCookies = () => {
    setCookie(null, "auth_token", "new_token", {
      maxAge: 10000,
      path: "/",
    });
    router.push(redirectUri);
  };

  return (
    <div>
      <button onClick={handleSetCookies}>установить куки</button>
    </div>
  );
}

export function getServerSideProps(context: GetServerSidePropsContext) {
  const { query } = context;
  const redirectUri = query.redirectUri || "/profile";

  return {
    props: {
      redirectUri,
    },
  };
}
