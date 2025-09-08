import { GetServerSidePropsContext } from "next";
import { parseCookies } from "nookies";

interface ProfileProps {
  authToken: string | null;
  userAgent: string;
  lang: string;
}

export default function Profile({ authToken, userAgent, lang }: ProfileProps) {
  return (
    <div>
      <a>{authToken}</a>
      <a>{userAgent}</a>
      <a>{lang}</a>
    </div>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { req, res, query } = context;
  const cookies = parseCookies({ req });
  const authToken = cookies["auth_token"];

  if (!authToken) {
    return {
      redirect: {
        destination: `/login?redirectUri=${encodeURIComponent(
          req.url || "profile"
        )}`,
        permanent: false,
      },
    };
  }

  const userAgent = req.headers["user-agent"] || "unknown";

  const lang = (query.lang as string) || "en";

  res.setHeader("Set-Cookie", [`lang=${lang}; path=/; max-age=${100000}`]);

  return {
    props: {
      authToken,
      userAgent,
      lang,
    },
  };
}
