import {Jumbotron, Button} from 'react-bootstrap';
import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <div>
                <Jumbotron>
                    <div style={{marginLeft: "30px"}} >
  <h1>Read<b>ME</b></h1>
  <ul>
      <li>
  <p>
  A React app that works with Google books API to find, list, view book and their information.
  </p>
  </li>
  <li>
  <p>
  This React.js App was done as a project in Software Engineering immersive at General Assembly.
  </p>
  </li>
  </ul>
  <p>
    <Button style={{marginLeft: "40px"}} target=" " variant="dark" href="https://github.com/adhelaimi/myProject2-1">GitHub</Button>
  </p>
<br/>
  <h1><b>Developing</b></h1>
  <ul>
      <li>
  <p>
  Done by <b>ABDULMAJED DHELAIMI</b>, 2019
  </p>
  </li>
  </ul>
  <p>
    <Button style={{marginLeft: "40px"}} target=" " variant="primary" href="https://www.linkedin.com/in/adhelaim">Linkedin</Button>
  </p>
  </div>
</Jumbotron>
            </div>
        )
    }
}
