import React from 'react';

import { Navbar, Container, Nav } from 'react-bootstrap';
import { BsFillBookmarkPlusFill, BsFillPersonFill, BsFillGearFill } from 'react-icons/bs';

import GoalList from './components/goallist';
import TaskList from './components/tasklist';

class App extends React.Component {

  render() {
    return (
      <div>
        <Navbar bg="primary" expand="lg" variant="dark">
          <Container>
            <Navbar.Brand>
              <BsFillBookmarkPlusFill />&nbsp;&nbsp;PlusGoals
            </Navbar.Brand>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="#action1"><BsFillPersonFill />&nbsp;&nbsp;Account</Nav.Link>
              <Nav.Link href="#action2"><BsFillGearFill />&nbsp;&nbsp;Settings</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <br />
        <GoalList />
      </div>
    )
  }
}

export default App;
