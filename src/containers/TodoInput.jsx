import React, { useContext, createRef } from 'react'
import TodoContext from '../context'

const TodoInput = () => {

  const { addTodo } = useContext(TodoContext)

  const inputRef = createRef()

  const clearInput = () => {
    inputRef.current.value = ''
  }

  const handleOnSubmit = e => {
    e.preventDefault()
    addTodo(inputRef.current.value)
    clearInput()
  }

  return (
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <form onSubmit={handleOnSubmit} action="" method="post">
          <div className="input-group input-group-lg">
            <input ref={inputRef} required placeholder="Enter Todo" type="text" className="form-control" />
            <div className="input-group-append">
              <button className="btn btn-primary" type="submit">Add</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
export default TodoInput