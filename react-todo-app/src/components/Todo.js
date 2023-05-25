import { useState } from "react"
import List from "./List"
import Form from "./Form"

// コンポーネントは、先頭大文字(Babelが先頭大文字のものをコンポーネントと認識している模様)
const Todo = () => {
  const todosList = [
    {
      id: 1,
      content: "店予約する",
    },
    {
      id: 2,
      content: "卵買う",
    },
    {
      id: 3,
      content: "郵便出す",
    },
  ];

  const [ todos, setTodos ] = useState(todosList);

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => {
      // 完了したtodoのidを使って、完了したtodo以外を配列に格納している。
      return todo.id !== id;
    });

    setTodos(newTodos);
  }

  const createTodo = (todo) => {
    setTodos([...todos, todo]);
  }

  // ※ 注意
  // Reactコンポーネントは、単一のJSX 要素を返す必要があるところ、
  // 以下では、Listコンポーネントと、Formコンポーネントの2つの要素がある為、
  // Fragment(「<></>」)又は、divで囲む必要がある。
    // 参考: https://react.dev/learn/writing-markup-with-jsx#the-rules-of-jsx
  return (
    <>
      <List todos={todos} deleteTodo={deleteTodo}/>
      <Form createTodo={createTodo}/>
    </>
  )
};

export default Todo;
