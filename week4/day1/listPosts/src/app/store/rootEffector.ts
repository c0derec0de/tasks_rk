import { createEffect, createEvent, createStore, sample } from "effector";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const getPost = createEvent();
const addPost = createEvent<Post>();
const deletePost = createEvent<number>();
const sendPost = createEvent<Post[]>();

const getPostFx = createEffect(async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  return response.json();
});

const sendPostFx = createEffect(async (posts: Post[]) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(posts),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  return response.json();
});

const $post = createStore<Post[]>([]);

$post.watch((posts) => {
  console.log(posts);
});

// добавление поста
$post.on(addPost, (posts: Post[], addedPost: Post) => [...posts, addedPost]);

// удаление поста по айди
$post.on(deletePost, (posts: Post[], postId: number) =>
  posts.filter((post) => post.id !== postId)
);

sample({
  clock: sendPost,
  target: sendPostFx,
});

sample({
  clock: getPost,
  target: getPostFx,
});

sample({
  clock: getPostFx.doneData,
  target: $post,
});

export const model = {
  $post,
  getPost,
  addPost,
  deletePost,
  sendPost,
};
