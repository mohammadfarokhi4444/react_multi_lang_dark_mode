import { useState } from "react";
import { useTranslation } from "react-i18next";
import CustomInput from "../Shared/CustomInput";
import { Box } from "@mui/material";
import TodoLists from "./TodoLists";
import { getData, storeData } from "../Utils/DB";

const TodoList = () => {
  const { t } = useTranslation();

  const [todoList, setTodoList] = useState(getData("todoList")?.list || []);

  const handleKeyDown = (value) => {
    const list = [...todoList];
    list.push({
      id: Math.floor(Date.now() * Math.random()),
      value,
      done: false,
    });
    setTodoList(list);
    storeData("todoList", { list });
  };
  return (
    <>
      <CustomInput
        name={t("todoList.todoList")}
        handleKeyDown={handleKeyDown}
      />
      <Box sx={{ direction: "ltr" }}>
        <TodoLists list={todoList} setList={setTodoList} />
      </Box>
    </>
  );
};

export default TodoList;
