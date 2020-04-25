/*
 * Created Date: Saturday April 25th 2020
 * Author: Gurubalan Harikrishnan
 * Email-ID: gurubalan.work@gmail.com
 * -----
 * Copyright (c) 2020 Gurubalan Harikrishnan
 */
import React from 'react';
import {Col, Card, Button} from 'react-bootstrap';
import '../../styles/component.css';
import { Link } from 'react-router-dom';
function Actor(props) {
    return (
        <Col sm={3}>
                <Card className="movie-card">
                    {   // NOTE The AWS link is actually a No Image found ( image ), this will come in place if there is not image available in the API
                        props.image == null? <Card.Img variant="top" src={`https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg`} className="movie-img" /> : <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w185${props.image}`} className="movie-img" />
                    }
                    <Card.Body>
                        <Card.Title>{props.name}</Card.Title>
                        <Card.Text>
                            Known for : {props.role} 
                        </Card.Text>
                        <Link to={`/actors/${props.id}`}><Button variant="info" size="sm">Know more</Button></Link>
                    </Card.Body>
                </Card>          
        </Col>
    );
}

export default Actor;