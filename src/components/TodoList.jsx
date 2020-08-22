import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({ items, updateTodo }) => {
  return (
    <ul className="list-group">
      {
        !items.length ? <h6 className="font-weight-normal text-danger">Not Available</h6> : (
          items.map(todo => (
            <TodoItem key={todo.id} item={todo} updateTodo={updateTodo} />
          ))
        )
      }
    </ul>
  )
}

export default TodoList