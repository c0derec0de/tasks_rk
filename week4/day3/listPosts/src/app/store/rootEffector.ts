import { createEffect, createEvent, createStore, sample } from "effector";
import { createGate } from "effector-react";
import { type Post } from "../../types/types";

const getPost = createEvent();
const addPost = createEvent<Post>();
const deletePost = createEvent<number>();
const sendPostsToBackend = createEvent<Post[]>();

const $posts = createStore<Post[]>([]);

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

export const Gate = createGate();
Gate.open.watch(() => {
  console.log("Gate opened");
});
Gate.close.watch(() => {
  console.log("Gate closed");
});
// добавление поста и удаление по айди
sample({
  clock: addPost,
  source: $posts,
  fn: (posts, addedPost) => [...posts, addedPost],
  target: $posts,
});

sample({
  clock: deletePost,
  source: $posts,
  fn: (posts, postId) => posts.filter((post) => post.id !== postId),
  target: $posts,
});

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
  getPostFx,
  addPost,
  deletePost,
  sendPostsToBackend,
  sendPostsToBackendFx,
};
