import React, { useEffect } from "react";
import { useAction } from "../hooks/useAction";
import { useTypedSelector } from "../hooks/useTypedSelector";

const TodoList: React.FC = () => {
  const { page, limit, error, loading, todos } = useTypedSelector((state) => state.todo);
  const { fetchTodos, setTodoPage } = useAction();
  const pages = [1, 2, 3, 4, 5];
  useEffect(() => {
    fetchTodos(page, limit);
  }, [page]);

  if (loading) {
    return <h1>Идет загрузка...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      <hr />
      {todos.map((todo) => (
        <div key={todo.id}>
          {todo.id} - {todo.title}
        </div>
      ))}
      <div style={{display: 'flex'}}>
        {pages.map((p) => (
          <div
          onClick={() =>  setTodoPage(p)}
            style={{border: p === page ? "3px solid green" : "1px solid gray", padding: 10, margin: 5, borderRadius: 10 }}
          >
            {p}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
