/* eslint-disable @typescript-eslint/no-unused-vars */
import { createWatch, fork, allSettled } from "effector";
import { model } from "../app/store/rootEffector";
import { type Post } from "../types/types";

const newPost: Post = {
  userId: 1,
  id: 544,
  title: "Title",
  body: "Body",
};

const newPosts: Post[] = [
  {
    userId: 1,
    id: 544,
    title: "Title",
    body: "Body",
  },
  {
    userId: 1,
    id: 545,
    title: "Title2",
    body: "Body2",
  },
];

const ID = 2;

describe("events logic", () => {
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

  test("should handle post get with scope", async () => {
    const scope = fork();
    const fn = jest.fn();

    const unwatch = createWatch({
      unit: model.getPost,
      fn,
      scope,
    });

    await allSettled(model.getPost, {
      scope,
    });

    expect(fn).toHaveBeenCalledTimes(1);
  });

  test("should handle post delete with scope", async () => {
    const scope = fork();
    const fn = jest.fn();

    const unwatch = createWatch({
      unit: model.deletePost,
      fn,
      scope,
    });

    await allSettled(model.deletePost, {
      scope,
      params: ID,
    });

    expect(fn).toHaveBeenCalledTimes(1);
  });

  test("should add a newPost to the store $posts", async () => {
    const scope = fork();
    // сначала стор пустой
    expect(scope.getState(model.$posts)).toEqual([]);

    await allSettled(model.addPost, { scope, params: newPost });

    expect(scope.getState(model.$posts)).toEqual([newPost]);
  });

  test("should delete a newPost from the store $posts", async () => {
    const scope = fork({
      // задаем моки
      values: [[model.$posts, newPosts]],
    });

    await allSettled(model.deletePost, { scope, params: 545 });

    expect(scope.getState(model.$posts)).toEqual([newPost]);
  });
});

describe("effects logic", () => {
  test("getPostFx effect executes correctly", async () => {
    const scope = fork({
      handlers: [
        //  [эффект, моковый обработчик] пар
        [model.getPostFx, () => "add data"],
      ],
    });

    const result = await allSettled(model.getPostFx, { scope });

    expect(result.status).toBe("done");
    expect(result.value).toBe("add data");
  });

  test("sendPostsToBackendFx effect executes correctly", async () => {
    const scope = fork({
      handlers: [[model.sendPostsToBackendFx, () => "post data"]],
    });

    const result = await allSettled(model.sendPostsToBackendFx, {
      scope,
      params: newPosts,
    });

    expect(result.status).toBe("done");
    expect(result.value).toBe("post data");
  });
});
