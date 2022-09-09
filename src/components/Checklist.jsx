// https://codesandbox.io/s/todo-list-hooks-ebfgw?file=/src/ToDo.js
// https://www.educative.io/blog/react-hooks-tutorial-todo-list

import React, { useState, useEffect } from 'react'
import { Form } from 'react-bootstrap'
import { ChecklistWrapper } from './../assets/styles'

import TodoItem from './TodoItem'

function Checklist({toDoList}) {

  console.log("Checklist", toDoList)
  // const handleToggle = (e) => {
  //   e.preventDefault();
  //   let id = e.currentTarget.id;
  //   let mapped = toDoList.map(task => {
  //     return task.id === Number(id) ? { ...task, done: !task.done } : { ...task};
  //   });
  //   setToDoList(mapped);
  // }

  // const handleFilter = () => {
  //   let filtered = toDoList.filter(task => {
  //     return !task.done;
  //   });
  //   setToDoList(filtered);
  // }

  return (
    <ChecklistWrapper className="checkList">
      <div className="list-container">
        <div>
            {toDoList.map((todo, i) => {
                return (
                  <TodoItem key={i} todo={todo} />
                )
            })}
        </div>
      </div>
    </ChecklistWrapper>
  )
}

// https://stackoverflow.com/questions/54809604/failed-prop-type-you-provided-a-checked-prop-to-a-form-field-without-an-onch

export default Checklist