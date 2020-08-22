import React from 'react'

const TodoItem = ({ item, updateTodo }) => {
  return (
    <div className="form-check mb-2">
      <label title={item.status ? 'Mark as Incomplete' : 'Mark as Complete'} className="form-check-label">
        <input checked={item.status} onChange={() => updateTodo(item.id)} type="checkbox" className="form-check-input" />{item.title}
      </label>
    </div>
  )
}

export default TodoItem