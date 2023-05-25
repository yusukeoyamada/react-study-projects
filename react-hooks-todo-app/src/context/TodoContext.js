import { createContext, useContext, useReducer } from "react";

// 以下で、stateやdispatch関数を格納するものを定義。
const TodoContext = createContext();
const TodoDispatchContext = createContext();

// 以下、stateの初期値
const todosList = [
  {
    id: 1,
    content: "店予約する",
    editing: false,
  },
  {
    id: 2,
    content: "卵買う",
    editing: false,
  },
  {
    id: 3,
    content: "郵便出す",
    editing: false,
  },
];

// dispatch関数実行時に、以下todoReducerが実行される。
  // そして、「dispatch({ type: 'todo/add', todo: newTodo})」のように、
  // dispatch関数の引数に指定したオブジェクトが、以下action変数に格納される。
const todoReducer = (todos, action) => {
  switch (action.type) {
    case "todo/add":
      return [...todos, action.todo];
    case "todo/delete":
      // 以下で、完了した「action.todo」以外のtodoを新たな配列に格納している。
      return todos.filter((_todo) => {
        return _todo.id !== action.todo.id;
      });
    case "todo/update":
      return todos.map((_todo) => {
        // 以下で、更新された「action.todo」を、元の_todoに反映している。
        return _todo.id === action.todo.id
          ? { ..._todo, ...action.todo }
          : { ..._todo };
      });
    default:
      return todos;
  }
};

const TodoProvider = ({ children }) => {
  // todosListをこの中で定義した場合、viewコンポーネントが表示される度に再生成される。
    // なので、TodoProvider外で定義している。
  const [todos, dispatch] = useReducer(todoReducer, todosList);

  // 以下にて、stateに更新があった場合、
  // 更新用関数だけを使うviewコンポーネントも再レンダリングされてしまうので、
  // それを避けるために、stateを使うproviderと、更新用関数を使うproviderを分けて管理することで、
  // 上記再レンダリング問題を避けている。
    // パフォーマンスが気になってきた場合は、上記解決策を講じても。
  return (
    <TodoContext.Provider value={todos}>
      <TodoDispatchContext.Provider value={dispatch}>
        {/* 以下childrenに格納されるもの関しては、「src/components/Todo.js」参考 */}
        {children}
      </TodoDispatchContext.Provider>
    </TodoContext.Provider>
  );
};

// 上記「例: TodoContext.Provider value={todos}」のvalueに指定されたものだけが格納される。
const useTodos = () => useContext(TodoContext);
const useDispatchTodos = () => useContext(TodoDispatchContext);

export { useTodos, useDispatchTodos, TodoProvider };
