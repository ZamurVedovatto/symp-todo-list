import React from 'react'
import TaskCard from './TaskCard'

import {Form, ListGroup} from 'react-bootstrap'

function TaskList({tasksData}) {
  return (
    <div className="main-area">
      <div className="main-content">
        {
          tasksData?.map((task, i) => {
            return <TaskCard task={task} key={i} />
          })
        }
      </div>
      <div className="main-secondary">
        <span>logs</span>
        <ListGroup variant="flush">
            <ListGroup.Item>
              <Form.Check 
                type='radio'
                label='8/24/22'
              />
            </ListGroup.Item>
            <ListGroup.Item>
              <Form.Check 
                type='radio'
                label='8/24/22'
              />
            </ListGroup.Item>
            <ListGroup.Item>
              <Form.Check 
                type='radio'
                label='8/24/22'
              />
            </ListGroup.Item>
            <ListGroup.Item>
              <Form.Check 
                type='radio'
                label='8/24/22'
              />
            </ListGroup.Item>
            <ListGroup.Item>
              <Form.Check 
                type='radio'
                label='8/24/22'
              />
            </ListGroup.Item>
        </ListGroup>
      </div>
    </div>
  )
}

export default TaskList