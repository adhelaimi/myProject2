import './App.css';
import Navigation from './components/Navigation';
import axios from 'axios'
import {Image, FormControl, Row} from 'react-bootstrap';
import BookCard from './components/BookCard'
import FooterPage from './components/FooterPage';
import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }
  srchFunc = (e) => {
    const searchh = e.target.elements.srchBar.value
      e.preventDefault()

      // fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchh}:keyes&key=AIzaSyAaCiGPlCZcM6BcH4laKHqE0OWezL-us7g`)
      //   .then(response => response.json())
      //   .then(data => this.setState({ data }));
        // console.log(this.state.data)

        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchh}:keyes&key=AIzaSyAaCiGPlCZcM6BcH4laKHqE0OWezL-us7g`)
        .then(response => {
          this.setState({data : response})
          console.log(response)
        })
        .catch(error => {
          console.log("Axios Error")
        })
        
        setTimeout(function (){
          // window.scrollTo(0,910);
          window.scrollTo({
            top: 910,
            left: -15000,
            behavior: "smooth"
          })   
        }, 700)
        
    }

  render() {
    return (
      <div>
        <Navigation/>
        <Image className="bgi" src="https://www.qualtrics.com/m/assets/blog/wp-content/uploads/2018/08/shutterstock_1068141515.jpg"flued />
        <div className="qoute">
        <h1><b>  “If you don’t like to read, you haven’t found the right book.”</b></h1>
        <p>Find it here!</p>
        </div>
        <div className="searchBAR">
       <form onSubmit={this.srchFunc}>
        <input type="text" name="srchBar" placeholder="Search" className="searchBar" />
        <br/>
        <button type="submit" className="submitBtn">Search</button>
       </form>
       </div>
       <Row>
       {this.state.data !== null && this.state.data.data.items.map((bookss, i)=>{
          return <BookCard book={bookss} empty={" "} img={"https://icon-library.net/images/no-image-icon/no-image-icon-0.jpg"}/>
          {/* // console.log(bookss) */}
       })}
       </Row>
        <FooterPage/>
      </div>
    )
  }
}
