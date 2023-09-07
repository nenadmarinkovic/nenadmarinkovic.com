import React from "react";
// import {
//   Box,
//   Input,
//   Button,
//   Textarea,
//   Stack,
//   Select,
//   useToast,
// } from "@chakra-ui/react";
import useAuth from "../hooks/useAuth";
import { addTodo } from "../api/todo";
import { Button, toaster } from "evergreen-ui";

const AddTodo = () => {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [status, setStatus] = React.useState("pending");
  const [isLoading, setIsLoading] = React.useState(false);

  //   const toast = useToast();

  const { isLoggedIn, user } = useAuth();

  const handleTodoCreate = async () => {
    if (!isLoggedIn) {
      //   toast({
      //     title: "You must be logged in to create a todo",
      //     status: "error",
      //     duration: 9000,
      //     isClosable: true,
      //   });
      toaster.warning("You must be logged in to create a todo", {
        duration: 3,
      });
      return;
    }
    setIsLoading(true);
    const todo = {
      title,
      description,
      status,
      userId: user.uid,
    };
    await addTodo(todo);
    setIsLoading(false);

    setTitle("");
    setDescription("");
    setStatus("pending");

    toaster.success("Todo created successfully", {
        duration: 3,
      });
  };

  return (
    <div>
      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option
          value={"pending"}
          style={{ color: "yellow", fontWeight: "bold" }}
        >
          Pending ⌛
        </option>
        <option
          value={"completed"}
          style={{ color: "green", fontWeight: "bold" }}
        >
          Completed ✅
        </option>
      </select>

      <button onClick={() => handleTodoCreate()}>Add</button>
    </div>
  );
};

export default AddTodo;
