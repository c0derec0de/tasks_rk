import { useList, useUnit } from "effector-react";
import { postLoaderModelFactory } from "../app/factory/postLoaderModelFactory";
import { useMemo } from "react";

type ListProps = {
  model: typeof postLoaderModelFactory;
};

export const ListLoader: React.FC<ListProps> = ({
  model = postLoaderModelFactory,
}) => {
  const units = useMemo(model, []);

  const { getPost, deletePost } = useUnit(units);

  const list = useList(units.$posts, (post, index) => (
    <li>
      [{index}] {post.title}
      <button
        onClick={() => deletePost(post.id)}
        style={{ marginLeft: "20px" }}
      >
        Удалить пост
      </button>
    </li>
  ));

  return (
    <div>
      <button onClick={getPost} style={{ marginTop: "20px" }}>
        Загрузить посты
      </button>
      <ul>{list}</ul>
    </div>
  );
};
