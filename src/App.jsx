import React from 'react';
import TodoInputContainer from './containers/TodoInput';
import TodoListContainer from './containers/TodoList'
import TodoContext from './context'
import { useLocalStorage } from './hooks/useLocalStorage';

function App () {

  const [todos, setTodo] = useLocalStorage('list', [])

  const addTodo = title => {
    let todo = {
      id: Date.now(),
      title,
      status: false,
    }

    let newTodos = [...todos, todo]
    setTodo(newTodos)
  }

  const updateTodo = todoId => {
    let todoIndex = todos.findIndex(item => item.id === todoId)

    if (todoIndex === -1)
      return

    let todo = { ...todos[todoIndex], status: !todos[todoIndex].status }
    let newTodos = [...todos]
    newTodos.splice(todoIndex, 1, todo)

    setTodo(newTodos)
  }

  const clearTodo = () => {
    let newTodos = [...todos].filter(item => !item.status)
    setTodo(newTodos)
  }

  const contextProvider = {
    todos,
    addTodo,
    updateTodo,
    clearTodo
  }

  return (
    <div className="container">
      <header className="mt-3 text-center">
        <h3>Todo App</h3>
        <p>Manage your Tasks</p>
      </header>

      <TodoContext.Provider value={contextProvider}>
        <div className="todo-input mt-5">
          <TodoInputContainer />
        </div>

        <div className="todo-container mt-5">
          <TodoListContainer />
        </div>
      </TodoContext.Provider>

    </div>
  );
}

export default App;
