import { GetServerSidePropsContext } from "next";
import { Logs } from "@/shared/types";

type ProfileProps = {
  authToken: string | null;
  userAgent: string;
  lang: string;
  logs: Logs[];
};

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

  let logs: Logs[] = [];
  try {
    const response = await fetch("http://localhost:3000/api/logs", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      const data = await response.json();
      logs = data.logs || [];
    }
  } catch (error) {
    console.log(error);
    logs = []; //чтоб страница не падала
  }

  const userAgent = req.headers["user-agent"] || "unknown";

  const lang = (query.lang as string) || "en";

  res.setHeader("Set-Cookie", [`lang=${lang}; path=/; max-age=${100000}`]);

  return {
    props: {
      authToken,
      userAgent,
      lang,
      logs,
    },
  };
}

export default function Profile({
  authToken,
  userAgent,
  lang,
  logs,
}: ProfileProps) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <a>authToken: {authToken} </a>
      <a>userAgent: {userAgent} </a>
      <a>lang: {lang} </a>
      {logs.map((log, index) => (
        <div key={index}>
          <p>
            {new Date(log.timestamp).toLocaleString()} - {log.url}
          </p>
        </div>
      ))}
    </div>
  );
}
