import React, { Component } from 'react';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import Header from './components/layout/Header';
import { v4 as uuidv4 } from 'uuid';

import './App.scss';

class App extends Component {
  state = {
    todos:[
      {
        id: uuidv4(),
        title: 'One',
        completed: false
      },
      {
        id: uuidv4(),
        title: 'Two',
        completed: false
      },
      {
        id: uuidv4(),
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

  addTodo = (title) => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo]})
  }


  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo addTodo={this.addTodo}/>
          <Todos todos={this.state.todos} toggleComplete={this.toggleComplete} delTodo={this.delTodo}/>
        </div>
      </div>
    )
  }
}

export default App
