import React, { useState, useEffect } from "react";
import useAuth from "../hooks/useAuth";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../lib/firebase";
import { toaster } from "evergreen-ui";
import { deleteTodo, toggleTodoStatus } from "../api/todo";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    const refreshData = () => {
      if (!user) {
        setTodos([]);
        return;
      }

      const q = query(collection(db, "todo"), where("user", "==", user.uid));

      onSnapshot(q, (querySnapchot) => {
        let todosArray: any = [];
        querySnapchot.docs.forEach((doc) => {
          todosArray.push({ id: doc.id, ...doc.data() });
        });
        setTodos(todosArray);
      });
    };

    refreshData();
  }, [user]);

  const handleTodoDelete = async (id: any) => {
    if (confirm("Are you sure you wanna delete this todo?")) {
      deleteTodo(id);
      toaster.danger("Todo deleted successfully", {
        duration: 3,
      });
    }
  };

  const handleToggle = async (id: any, status: any) => {
    const newStatus = status == "completed" ? "pending" : "completed";
    await toggleTodoStatus({ docId: id, status: newStatus });
  };

  return (
    <div>
      <div>
        {todos &&
          todos.map((todo: any) => (
            <li key={todo.id}>
              <span>
                {todo.title}
                <button onClick={() => handleToggle(todo.id, todo.status)}>
                  Button text
                </button>
                <span>{todo.status}</span>
              </span>
              <span>{todo.description}</span>
              <button onClick={() => handleTodoDelete(todo.id)}>
                Delete todo
              </button>
            </li>
          ))}
      </div>
    </div>
  );
};

export default TodoList;
