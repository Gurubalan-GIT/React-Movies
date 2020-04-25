/*
 * Created Date: Saturday April 25th 2020
 * Author: Gurubalan Harikrishnan
 * Email-ID: gurubalan.work@gmail.com
 * -----
 * Copyright (c) 2020 Gurubalan Harikrishnan
 */
import React from 'react';
import {Col, Container, Row, Image} from 'react-bootstrap';
import './../../styles/component.css'

function ActorInfo(props) {
    return (
        <div className="movie-info">
            <br></br>
            <Container>
                <Row>
                    <Col sm={6}>
                        {   // NOTE The AWS link is actually a No Image found ( image ), this will come in place if there is not image available in the API
                            props.actor.profile_path == null? <Image alt="No movie-img found" src={`https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg`} className="movie-info-img" /> : <Image alt="movie-img found" src={`https://image.tmdb.org/t/p/w185${props.actor.profile_path}`} className="movie-info-img" />
                        }
                    </Col>

                    <Col sm={6}>
                        <h3>{props.actor.name}</h3>
                        <p>{props.actor.biography}</p>
                        <p>Born in {props.actor.place_of_birth}</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default ActorInfo;