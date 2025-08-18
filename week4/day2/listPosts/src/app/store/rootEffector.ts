import { createEffect, createEvent, createStore, sample } from "effector";
import { type Post } from "../../types/types";

const getPost = createEvent();
const addPost = createEvent<Post>();
const deletePost = createEvent<number>();
const sendPostsToBackend = createEvent<Post[]>();

const getPostFx = createEffect(async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) throw new Error("Ошибка загрузки");
  return response.json();
});

const sendPostsToBackendFx = createEffect(async (posts: Post[]) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(posts),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  if (!response.ok) throw new Error("Ошибка отправки");
  return response.json();
});

const $posts = createStore<Post[]>([]);

$posts.watch((posts) => {
  console.log(posts);
});

// добавление поста и удаление по айди
$posts
  .on(addPost, (posts: Post[], addedPost: Post) => [...posts, addedPost])
  .on(deletePost, (posts: Post[], postId: number) =>
    posts.filter((post) => post.id !== postId)
  );

sample({
  clock: sendPostsToBackend,
  target: sendPostsToBackendFx,
});

sample({
  clock: getPost,
  target: getPostFx,
});

sample({
  clock: getPostFx.doneData,
  target: $posts,
});

export const model = {
  $posts,
  getPost,
  addPost,
  deletePost,
  sendPostsToBackend,
};
