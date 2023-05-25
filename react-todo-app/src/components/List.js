const List = ({todos, deleteTodo}) => {
  const complete = (id) => {
    deleteTodo(id)
  }

  // ※ 注意
  // 以下、{}内で記述されているJavaScriptは、
  // 文(for文やif文等)ではなく、式(map関数や、三項演算子等)でないといけない。
  return (
    <div>
      {todos.map(todo => {
        return (
          <div key={todo.id}>
            <button onClick={() => complete(todo.id)}>完了</button>
            <span>{todo.content}</span>
          </div>
        )
      })}
    </div>
  );
}

export default List;