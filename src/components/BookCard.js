import React from 'react'
import './comp.css'
import {Card, Button, Col} from 'react-bootstrap';

const BookCard = (props) => {
    return (
        <div>
            {/* <img src={props.book.volumeInfo.imageLinks !== undefined && props.book.volumeInfo.imageLinks.thumbnail} alt="books"/> */}
             {/* ............... */}
            {/* <h2>{props.book.volumeInfo.title}</h2> */}
            {/* <img src={props.book.volumeInfo.imageLinks !== undefined ?  props.book.volumeInfo.imageLinks.thumbnail : props.img} alt="books"/> */}
<br/>
<div className="cardsView">
<Col md="4">
<Card style={{width: '18rem' }}>
  <Card.Img style={{width: '18rem', height:'18rem'}} variant="top" src={props.book.volumeInfo.imageLinks !== undefined ?  props.book.volumeInfo.imageLinks.thumbnail : props.img} alt="books"/>
  {/* <Card.Img style={{width: '18rem', height:'18rem'}} variant="top" src={props.book.volumeInfo.imageLinks.thumbnail} alt="books"/> */}
  <Card.Body>
    <Card.Title>{props.book.volumeInfo.title}</Card.Title>
    <Card.Text>
    Author: {props.book.volumeInfo !== undefined ? props.book.volumeInfo.authors : props.empty}
    </Card.Text>
    <Card.Text>
    Category: {props.book.volumeInfo !== undefined ? props.book.volumeInfo.categories : props.empty}
    </Card.Text>
    <Button target=" " size="sm" variant="dark" href={props.book.accessInfo.webReaderLink}>Read Book</Button>
  </Card.Body>
</Card></Col>
</div>




        </div>
    )
}

export default BookCard


