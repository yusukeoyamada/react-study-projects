import { useState } from "react";
const Form = ({ createTodo }) => {
  const [enteredTodo, setEnteredTodo] = useState("");

  const addTodo = (e) => {
    // formは、デフォルトの動作では、「action="/"」をつけて、そのページに遷移する。
      // actionを記載していない場合には、そのページを再度表示して、リロードしてしまう。
      // なので、上記デフォルト動作を無効化する為に、以下記述を追加。
    e.preventDefault();

    const newTodo = {
      // 「1e5」は、10の5乗を指す。
        // 小数点は、切り捨て
      id: Math.floor(Math.random() * 1e5),
      content: enteredTodo,
    };

    createTodo(newTodo);

    setEnteredTodo("");
  };

  return (
    <div>
      <form onSubmit={addTodo}>
        <input
          type="text"
          value={enteredTodo}
          onChange={(e) => setEnteredTodo(e.target.value)}
        />
        <button>追加</button>
      </form>
    </div>
  );
};

export default Form;
