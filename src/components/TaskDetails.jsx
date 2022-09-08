import React from 'react'
import styled from 'styled-components'
import Checklist from './Checklist'
import { formatDistanceToNow } from 'date-fns'
// import { pt } from 'date-fns/locale'
import { FaBookmark } from "react-icons/fa";
import { Button, Card } from 'react-bootstrap'

const TaskDetailsWrapper = styled.div`
margin: .25rem;
.card {
  padding: 0;
  width: 100%;
  &.done {
    border-color: #00800047;
    box-shadow: rgb(0 0 0 / 24%) 0px 3px 8px;
  }
  .task-dates {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    font-size: .75rem;
    color: grey;
    padding: .5rem 1rem 0;
  }
  .card-body {
    padding: .5rem 1rem;
    .card-title {
      text-align: start;
      font-weight: bold;
      margin-bottom: 0;
      &.done {
        color: seagreen;
      }
    }
    .task-urls {
      display: flex;
      align-items: flex-start;
      a {
        text-decoration: none;
        margin-right: 1rem;
        transition: color .25s ease-in-out;
        color: grey;
        font-size: .75rem;
        &:hover {
          color: #020202;
        }
      }
    }
    .todo-list, .status-list {
      padding: .5rem 0 .25rem;
      span {
        font-weight: bold;
      }
    }
  }
  .card-footer {
    margin-top: 1rem;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    button {
      margin: 0 .25rem;
    }
  }
}
`

function TaskDetails({task}) {
  const { done } = task
  console.log(task)

  return (
    <TaskDetailsWrapper>
      <Card className={`${done ? "done" : ""}`}>
        <div className="task-dates">
          <span>Started {formatDistanceToNow(new Date(task.startedDate), { addSuffix: true, includeSeconds: false })} ({task.startedDate})</span>
          { task.done && <span>Finished on: {task.finishedDate}</span> }
        </div>
        <Card.Body>
          <Card.Title className={`${done ? "done" : ""}`}>{task.title}</Card.Title>
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
            <Checklist listData={task.todos} />
          </div>
          <div className="status-list">
            <span>Current Status</span>
            <Checklist listData={task.status} />
          </div>
        </Card.Body>
        <Card.Footer className="text-muted">
          <Button variant="light">Back</Button>{' '}
          {/* <Button variant="primary">Primary</Button>{' '} */}
        </Card.Footer>
      </Card>
    </TaskDetailsWrapper>
  )
}

export default TaskDetails