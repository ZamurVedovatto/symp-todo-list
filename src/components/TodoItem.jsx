import React from 'react'

function TodoItem({todo}) {
  const { title } = todo
  return (
    <div>
      {title}
    </div>
  )
}

export default TodoItem