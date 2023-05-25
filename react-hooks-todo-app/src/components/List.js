import { useTodos } from "../context/TodoContext";
import Item from "./Item";

const List = () => {
  const todos = useTodos();

  // map関数直下では、keyに一意の値を指定して、React側に識別される必要がある。
  return (
    <div>
      {todos.map((todo) => (
        <Item todo={todo} key={todo.id} />
      ))}
    </div>
  );
};

export default List;
