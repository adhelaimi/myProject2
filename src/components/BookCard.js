import React from 'react'
import {Card, Button, Col} from 'react-bootstrap';

const BookCard = (props) => {
    return (
        <div>
            {/* <img src={props.book.volumeInfo.imageLinks !== undefined && props.book.volumeInfo.imageLinks.thumbnail} alt="books"/> */}
             {/* ............... */}
            {/* <h2>{props.book.volumeInfo.title}</h2> */}
            {/* <img src={props.book.volumeInfo.imageLinks !== undefined ?  props.book.volumeInfo.imageLinks.thumbnail : props.img} alt="books"/> */}
<br/>
<div className="cardsVeiw">
<Col md="4">
<Card style={{width: '18rem' }}>
  <Card.Img variant="top" src={props.book.volumeInfo.imageLinks !== undefined ?  props.book.volumeInfo.imageLinks.thumbnail : props.img} alt="books"/>
  <Card.Body>
    <Card.Title>{props.book.volumeInfo.title}</Card.Title>
    <Card.Text>
    Price: {props.book.saleInfo.listPrice !== undefined ? props.book.saleInfo.listPrice.amount : props.empty} SAR
    </Card.Text>
    <Button target=" " variant="primary" href={props.book.accessInfo.webReaderLink}>Read ME</Button>
  </Card.Body>
</Card></Col>
</div>




        </div>
    )
}

export default BookCard


