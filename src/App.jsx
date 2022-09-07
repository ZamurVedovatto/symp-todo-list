import { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import symtodoLogo from './assets/logo3.png'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/styles.css'

import styled from 'styled-components'
import { Navbar, Container } from 'react-bootstrap'

import TaskList from './components/TaskList'
import TaskDetails from './components/TaskDetails'

const AppWrapper = styled.section`
.navbar {
  background-color: #425C9C;
  .navbar-brand {
    img {
      border: 1px solid #d3d3d357;
      border-radius: 6px;
    }
  }
}
.main-content {
  padding: 1rem;
}
`

const tasksData = [
  {
    id: 1,
    title: 'FT: Refocus Button That Opened Modal',
    ptUrl: 'https://www.pivotaltracker.com/n/projects/2198983/stories/183169458',
    mrUrl: 'https://gitlab.symplicity.com/symplicity/advocate/-/merge_requests/2093',
    boxUrl: 'https://zvedovatto.advocate.74dev.symplicity.com/',
    todos: [
        {
          title: 'fix buttons position',
          done: true
        },
        {
          title: 'fix buttons position',
          done: false
        },
        {
          title: 'fix buttons position',
          done: false
        },
    ],
    startedDate: '08/08/2022',
    done: true,
    finishedDate: '20/09/2022',
    status: [
      {
        title: 'awaiting christians code review 1',
        done: true
      },
      {
        title: 'fixing code review ',
        done: true
      },
      {
        title: 'awaiting christians code review 2',
        done: false
      },
    ],
  },
  {
    id: 1,
    title: 'FT: Refocus Button That Opened Modal',
    ptUrl: 'https://www.pivotaltracker.com/n/projects/2198983/stories/183169458',
    mrUrl: 'https://gitlab.symplicity.com/symplicity/advocate/-/merge_requests/2093',
    boxUrl: 'https://zvedovatto.advocate.74dev.symplicity.com/',
    todos: [
        {
          title: 'fix buttons position',
          done: true
        },
        {
          title: 'fix buttons position',
          done: false
        },
        {
          title: 'fix buttons position',
          done: false
        },
    ],
    startedDate: '08/28/2022',
    done: false,
    finishedDate: '',
    status: [
      {
        title: 'awaiting christians code review 1',
        done: true
      },
      {
        title: 'fixing code review ',
        done: true
      },
      {
        title: 'awaiting christians code review 2',
        done: false
      },
    ],
  }
]

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <AppWrapper>
        <Navbar>
          <Container>
            <Navbar.Brand href="#home">
              <img
                alt=""
                src={symtodoLogo}
                width="auto"
                height="50"
                className="d-inline-block align-top"
              />{' '}
            </Navbar.Brand>
          </Container>
          <ul>
            <li>
              <Link to="/">List</Link>
            </li>
            <li>
              <Link to="/task-details">Details</Link>
            </li>
          </ul>
        </Navbar>
        <div className="main-content">
          <Routes>
            <Route exact path="/">
              <TaskList tasksData={tasksData} />
            </Route>
            <Route path="/task-details">
              <TaskDetails task={tasksData[0]} />
            </Route>
          </Routes>
        </div>
      </AppWrapper>
    </Router>
  )
}

export default App
