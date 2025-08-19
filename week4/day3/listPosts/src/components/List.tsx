import { model } from "../app/store/rootEffector";
import { createGate, useGate, useList, useUnit } from "effector-react";
import type { Post } from "../types/types";

const Gate = createGate();
Gate.status.watch((opened) => console.info("is Gate opened?", opened));

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
    <li key={post.id}>
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
