import { $posts } from "../shared/model";
import { useList } from "effector-react";

export const Posts = () => {
  const list = useList($posts, (post, index) => (
    <li key={post.id}>
      [{index}] {post.title}
    </li>
  ));

  return (
    <div>
      <h2>Посты</h2>
      <ul>{list}</ul>
    </div>
  );
};
