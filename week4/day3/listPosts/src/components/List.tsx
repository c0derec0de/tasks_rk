import { model } from "../app/store/rootEffector";
import { useGate, useList, useUnit } from "effector-react";
import type { Post } from "../types/types";
import { Gate } from "../app/store/rootEffector";

export const List: React.FC = () => {
  useGate(Gate);

  const [posts, handleGetPosts, handleAddNewPost, handleDelete] = useUnit([
    model.$posts,
    model.getPost,
    model.addPost,
    model.deletePost,
  ]);

  const post: Post = {
    userId: 1,
    id: Date.now() + posts.length,
    title: "Title",
    body: "Body",
  };

  const list = useList(model.$posts, (post, index) => (
    <li>
      [{index}] {post.title}
      <button
        onClick={() => handleDelete(post.id)}
        style={{ marginLeft: "20px" }}
      >
        Удалить пост
      </button>
    </li>
  ));

  return (
    <div>
      <button onClick={handleGetPosts} style={{ marginTop: "20px" }}>
        Загрузить посты
      </button>
      <button onClick={() => handleAddNewPost(post)}>Добавить пост</button>
      <ul>{list}</ul>
    </div>
  );
};
