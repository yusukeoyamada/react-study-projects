import './App.css';

import Todo from "./components/Todo"

const App = () => {
  // ※ 注意
  // JSXが複数行の時は、()で括る。
  // 括らないと、勝手に1行ごとに「;」がついてしまい、1行だけ認識されてしまう。
  return (
    <>
      <h2>Reminder</h2>
      <Todo />
    </>
  );
};

export default App;
