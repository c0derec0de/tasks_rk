import { createEffect, createStore } from "effector";

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
};

export const $posts = createStore<Post[]>([], { sid: "postsStore" });
export const $users = createStore<User[]>([], { sid: "usersStore" });

export const getPostsFx = createEffect(async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) throw new Error("Ошибка загрузки");
  return response.json();
});

export const getUsersFx = createEffect(async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!response.ok) throw new Error("Ошибка загрузки");
  return response.json();
});

$posts.on(getPostsFx.doneData, (_, post) => post);
$users.on(getUsersFx.doneData, (_, user) => user);
