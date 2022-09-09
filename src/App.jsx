import { useState } from 'react'
import symtodoLogo from './assets/logo3.png'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/styles.css'
import { AppWrapper } from './assets/styles'
import { Navbar, Container } from 'react-bootstrap'

import TaskDetails from './components/TaskDetails'

function App() {
  const [count, setCount] = useState(0)

  return (
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
      </Navbar>
      <div className="main-content">
        <TaskDetails />
      </div>
    </AppWrapper>
  )
}

export default App
