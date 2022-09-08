// https://codesandbox.io/s/todo-list-hooks-ebfgw?file=/src/ToDo.js
// https://www.educative.io/blog/react-hooks-tutorial-todo-list

import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Form } from 'react-bootstrap'

const ChecklistWrapper = styled.div`
  .checked-item,
  .not-checked-item {
    margin-left: 10px;
  }
  .checked-item {
    text-decoration: line-through;
  }
`

import data from "./data.json";


function Checklist({listData}) {
  const [ toDoList, setToDoList ] = useState(data);

  const handleToggle = (e) => {
    e.preventDefault();
    let id = e.currentTarget.id;
    let mapped = listData.map(task => {
      return task.id === Number(id) ? { ...task, done: !task.done } : { ...task};
    });
    setToDoList(mapped);
  }

  const handleFilter = () => {
    let filtered = toDoList.filter(task => {
      return !task.done;
    });
    setToDoList(filtered);
  }

  return (
    <ChecklistWrapper className="checkList">
      <div className="list-container">
        {listData.map((item, index) => (
          <div id={todo.id} key={todo.id + todo.task} name="todo" value={todo.id} onClick={handleToggle} className={todo.done ? "todo strike" : "todo"}>
            {todo.task}
          </div>
        ))}
      </div>
    </ChecklistWrapper>
  )
}

// https://stackoverflow.com/questions/54809604/failed-prop-type-you-provided-a-checked-prop-to-a-form-field-without-an-onch

export default Checklist