import { createWatch, fork, allSettled } from "effector";
import { model } from "../app/store/rootEffector";
import { type Post } from "../types/types";

const newPost: Post = {
  userId: 1,
  id: 544,
  title: "Title",
  body: "Body",
};

test("should handle post add with scope", async () => {
  const scope = fork();
  const fn = jest.fn(); // функция следит за вызовами

  const unwatch = createWatch({
    // когда addPost сработает, вызовется fn
    unit: model.addPost,
    fn,
    scope,
  });

  // запускаем событие добавления в scope
  await allSettled(model.addPost, {
    scope,
    params: newPost,
  });

  expect(fn).toHaveBeenCalledTimes(1);
});
