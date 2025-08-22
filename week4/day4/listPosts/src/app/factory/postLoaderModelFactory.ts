import { createEffect, createEvent, createStore, sample } from "effector";
import { type Post } from "../../types/types";

export const postLoaderModelFactory = (sid: string) => {
  const getPost = createEvent();
  const deletePost = createEvent<number>();

  const $posts = createStore<Post[]>([], { sid: `${sid}/posts` });

  const getPostFx = createEffect(async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) throw new Error("Ошибка загрузки");
    return response.json();
  });

  sample({
    clock: getPost,
    target: getPostFx,
  });

  sample({
    clock: getPostFx.doneData,
    target: $posts,
  });

  sample({
    clock: deletePost,
    source: $posts,
    fn: (posts, postId) => posts.filter((post) => post.id !== postId),
    target: $posts,
  });

  return {
    $posts,
    getPost,
    deletePost,
  };
};
