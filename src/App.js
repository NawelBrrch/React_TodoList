import React, { Component } from 'react';
import Todos from './components/Todos';
import './App.css';

class App extends Component {
  state = {
    todos:[
      {
        id: 1,
        title: 'One',
        completed: false
      },
      {
        id: 2,
        title: 'Two',
        completed: false
      },
      {
        id: 3,
        title: 'Three',
        completed: false
      },
    ]
  }

  toggleComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    })
    });
  }

  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]})
  }

  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos} toggleComplete={this.toggleComplete} delTodo={this.delTodo}/>
      </div>
    )
  }
}

export default App
