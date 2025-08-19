import { model } from "../app/store/rootEffector";
import { createGate, useGate, useList, useUnit } from "effector-react";

const Gate = createGate();
Gate.status.watch((opened) => console.info("is Gate opened?", opened));

export const List: React.FC = () => {
  useGate(Gate);
  const handleGetPosts = useUnit(model.getPost);

  const list = useList(model.$posts, (post, index) => (
    <li key={post.id}>
      [{index}] {post.title}
    </li>
  ));

  return (
    <div>
      <button onClick={handleGetPosts}>Загрузить посты</button>
      <ul>{list}</ul>
    </div>
  );
};
