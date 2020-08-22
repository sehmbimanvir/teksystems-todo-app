import React from 'react'

const TodoItem = ({ item, updateTodo }) => {
  return (
    <li className="list-group-item">
      <div className="form-check">
        <label title={item.status ? 'Mark as Incomplete' : 'Mark as Complete'} className="form-check-label">
          <input checked={item.status} onChange={() => updateTodo(item.id)} type="checkbox" className="form-check-input" />{item.title}
        </label>
      </div>
    </li>
  )
}

export default TodoItem