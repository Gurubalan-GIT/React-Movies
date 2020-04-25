/*
 * Created Date: Saturday April 25th 2020
 * Author: Gurubalan Harikrishnan
 * Email-ID: gurubalan.work@gmail.com
 * -----
 * Copyright (c) 2020 Gurubalan Harikrishnan
 */
import React from 'react';
import {Col, Card, Button} from 'react-bootstrap';

function Movie(props) {
    return (
        <Col sm={3}>
                <Card style={{ width: '15rem' }}>
                    {   // NOTE The AWS link is actually a No Image found ( image ), this will come in place if there is not image available in the API
                        props.image == null? <Card.Img variant="top" src={`https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg`} style={{width: "100%", height: 180}} /> : <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w185${props.image}`} style={{width: "100%", height: 180}} />
                    }
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>          
        </Col>
    );
}

export default Movie;