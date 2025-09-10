import { GetServerSidePropsContext } from "next";

interface ProfileProps {
  authToken: string | null;
  userAgent: string;
  lang: string;
}

export default function Profile({ authToken, userAgent, lang }: ProfileProps) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <a>authToken: {authToken} </a>
      <a>userAgent: {userAgent} </a>
      <a>lang: {lang} </a>
    </div>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { req, res, query } = context;

  const authToken = req.cookies["auth_token"];

  if (!authToken) {
    return {
      redirect: {
        destination: `/login?redirectUri=${encodeURIComponent(
          req.url || "/profile"
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
