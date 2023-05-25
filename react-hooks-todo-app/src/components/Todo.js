import List from "./List"
import Form from "./Form"
import { TodoProvider } from "../context/TodoContext"

const Todo = () => {
  return (
    <TodoProvider>
      {/* 以下が、子要素達が「props.children」に格納される */}
      <List />
      <Form />
    </TodoProvider>
  )
};
export default Todo;
