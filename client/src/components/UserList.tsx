import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useAction } from "../hooks/useAction";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { fetchUsers } from "../store/action-creators/user";

const UserList: React.FC = () => {
  const { error, loading, users } = useTypedSelector((state) => state.user);
  const {fetchUsers} = useAction()

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return <h1>Идет загрузка...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
};

export default UserList;
