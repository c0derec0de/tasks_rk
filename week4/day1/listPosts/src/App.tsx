import { model } from "./app/store/rootEffector";

function App() {
  model.getPost();

  setTimeout(() => {
    console.log("добавление");
    model.addPost({
      userId: 1,
      id: 10000,
      title: "New Post",
      body: "New Post",
    });

    console.log("удаление");
    model.deletePost(2);

    console.log("отправка на сервер");
    model.sendPost([
      {
        userId: 1,
        id: 100000,
        title: "New Post",
        body: "New Post",
      },
      {
        userId: 1,
        id: 1000000,
        title: "New Post!",
        body: "New Post!",
      },
    ]);
  }, 1000);

  return <></>;
}

export default App;
