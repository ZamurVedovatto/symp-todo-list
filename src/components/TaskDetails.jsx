import React, { useState, useEffect } from 'react'
import { formatDistanceToNow } from 'date-fns'
import { FaBookmark } from "react-icons/fa";
import { Button, Card } from 'react-bootstrap'

import { TaskDetailsWrapper } from './../assets/styles'
import Checklist from './Checklist'

import dataJSON from "./data.json";

function TaskDetails() {
  const [ task, setTask ] = useState(dataJSON[0])
  const [ todos, setTodos ] = useState([])
  const [ status, setStatus ] = useState([])
  console.log(task.todos)

  
  return (
    <TaskDetailsWrapper>
      <Card className={`${task.done ? "done" : ""}`}>
        <div className="task-dates">
          <span>Started {formatDistanceToNow(new Date(task.startedDate), { addSuffix: true, includeSeconds: false })} ({task.startedDate})</span>
          { task.done && <span>Finished on: {task.finishedDate}</span> }
        </div>
        <Card.Body>
          <Card.Title className={`${task.done ? "done" : ""}`}>{task.title}</Card.Title>
          <div className="task-urls">
            <a href={task.ptUrl}>
              PivotalTracker Story
            </a>
            <a href={task.mrUrl}>
              Merge Request
            </a>
            <a href={task.boxUrl}>
              TestBox
            </a>
          </div>
          <div className="todo-list">
            <span>To Do list</span>
            <Checklist setTodos={setTodos} toDoList={task.todos} />
          </div>
          {/* <div className="status-list">
            <span>Current Status</span>
            <Checklist setTodos={setTodos} toDoList={task.status} />
          </div> */}
        </Card.Body>
        <Card.Footer className="text-muted">
          <Button variant="light">Back</Button>{' '}
        </Card.Footer>
      </Card>
    </TaskDetailsWrapper>
  )
}

export default TaskDetails