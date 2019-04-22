import React, { Component } from 'react';
import Todos from './Todos'

class App extends Component {
  state = {
    todos: [
      { id: 1, content: 'Buy fish'},
      { id: 2, content: 'Buy goat'}
    ]
  }
  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => todo.id !== id)
    this.setState({
      todos: todos
    })
  }
  render() {
    return (
      <div className="todo-app container">
       <h1 className="center blue-text">
         Todo's
       </h1>
       <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>

      </div>
    );
  }
}

export default App;
