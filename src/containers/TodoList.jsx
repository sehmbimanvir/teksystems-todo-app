import React, { useContext } from 'react'
import TodoContext from '../context'
import TodoList from '../components/TodoList'

const TodoListContainer = () => {

  const { todos, updateTodo, clearTodo } = useContext(TodoContext)

  const pendingTodos = todos.filter(todo => !todo.status)

  const completedTodos = todos.filter(todo => todo.status)

  return (
    <div className="row">
      <div className="col-md-6 mb-4">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Todo List</h4>
            <div className="tasks">
              <TodoList items={pendingTodos} updateTodo={updateTodo} />
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="card">
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <h4 className="card-title">Completed Tasks</h4>
              <div className="actions float-right">
                <button title="Clear Completed Tasks" disabled={!completedTodos.length} onClick={clearTodo} className="btn btn-danger btn-sm">Clear All</button>
              </div>
            </div>
            <div className="tasks">
              <TodoList items={completedTodos} updateTodo={updateTodo} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TodoListContainer