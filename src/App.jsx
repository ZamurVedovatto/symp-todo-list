import { useState } from 'react'
import reactLogo from './assets/react.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import './styles/styles.css'

import ListGroup from 'react-bootstrap/ListGroup';

import Form from 'react-bootstrap/Form'

import TaskList from './components/TaskList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="navbar">
        <h4>
          symp-todo-list
        </h4>
      </div>
      <div className="main-area">
        <div className="main-content">
          <TaskList />
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
    </div>
  )
}

export default App
