import React from 'react'

function TodoItem({todo, handleToggle}) {
  const { title, done } = todo

  const handleClick = (e) => {
    e.preventDefault()
    handleToggle(e.currentTarget.id)
  }

  return (
    // <div className={done ? "strike" : ""}>
    //   {todo.title}
    // </div>

    <div id={todo.title} key={todo.title + todo.done} name="todo" value={todo.title} onClick={handleClick} className={todo.done ? "todo strike" : "todo"}>
      {todo.title}
    </div>
  )
}

export default TodoItem