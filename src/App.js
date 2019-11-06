import './App.css';
import Contact from './components/Contact'
import About from './components/About'
import Home from './components/Home'
import {Navbar, Nav} from 'react-bootstrap';
import React, { Component } from 'react'
//Router
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';

export default class App extends Component {
 
  render() {
    return (
      <BrowserRouter> 
      <div>
         <div>
        <Navbar variant="dark" className="navi">
            <Navbar.Brand>ReadME</Navbar.Brand>
            <Nav>
                <Nav.Link href="/">Home</Nav.Link>
            </Nav>
            <Nav className="ml-auto">
                <Nav.Link href="./About">About</Nav.Link>
                <Nav.Link href="/Contact">Contact</Nav.Link>
         </Nav>
        </Navbar>
        </div>
  
       <Switch> 
        <Route exact path="/" component={Home}/>
        <Route path="/Contact" component={Contact}/>
        <Route path="/About" component={About}/>
        </Switch>
      </div>
      </BrowserRouter> 
    )
  }
}
