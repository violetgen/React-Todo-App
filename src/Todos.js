import React from 'react';

const Todos = ({todos, deleteTodo}) => {
  const todoList = todos.length ? (
    todos.map(todo => {
      return (
        <div className="collection-item" key={todo.id}>
          <span>{todo.content}</span>
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </div>
      );
    })
  ) : (
    <p className="center">You have no todos</p>
  );
  return (
    <div className="todos collection"> 
      {todoList}
    </div>
  )
}

export default Todos;