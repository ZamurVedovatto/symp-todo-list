import React from 'react'
import styled from 'styled-components'
import Checklist from './Checklist'
import { formatDistanceToNow } from 'date-fns'
// import { pt } from 'date-fns/locale'

import { Button, Card } from 'react-bootstrap'

const TaskWrapper = styled.div`
  margin: .25rem;
  background-color: red;
  .task-dates {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .card-body {
    padding: .5rem 0;
    .card-title {
      text-align: start;
    }
    .task-urls {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
  }
`

function TaskCard({task}) {
  console.log(task)

  return (
    <TaskWrapper>
      <Card style={{ width: '100%' }}>
        <div className="task-dates">
          <span>Started {formatDistanceToNow(new Date(task.startedDate), { addSuffix: true, includeSeconds: false })} ({task.startedDate})</span>
          { task.done && <span>Finished on: {task.finishedDate}</span> }
        </div>
        <Card.Body>
          <Card.Title>{task.title}</Card.Title>
          <div className="task-urls">
            <span>{task.ptUrl}</span>
            <span>{task.mrUrl}</span>
            <span>{task.boxUrl}</span>
          </div>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Checklist listData={task.todos} />
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </TaskWrapper>
  )
}

export default TaskCard