import { $users } from "../shared/model";
import { useList } from "effector-react";

export const Users = () => {
  const list = useList($users, (user, index) => (
    <li>
      [{index}] {user.name}
    </li>
  ));
  return (
    <div>
      <h2>Пользователи</h2>
      <ul>{list}</ul>
    </div>
  );
};
