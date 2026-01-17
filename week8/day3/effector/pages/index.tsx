import { Posts } from "@/components/Posts";
import { Users } from "@/components/Users";
import { getPostsFx, getUsersFx } from "@/shared/model";
import { allSettled, fork, serialize, SerializedState } from "effector";
import { Provider } from "effector-react";

type HomeProps = {
  values: SerializedState;
};

export const getServerSideProps = async () => {
  const scope = fork();

  await allSettled(getPostsFx, { scope });
  await allSettled(getUsersFx, { scope });

  const values = serialize(scope);

  return {
    props: { values },
  };
};

export default function Home({ values }: HomeProps) {
  const clientScope = fork({ values });
  return (
    <>
      <Provider value={clientScope}>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Posts />
          <Users />
        </div>
      </Provider>
    </>
  );
}
