/*
 * Created Date: Saturday April 25th 2020
 * Author: Gurubalan Harikrishnan
 * Email-ID: gurubalan.work@gmail.com
 * -----
 * Copyright (c) 2020 Gurubalan Harikrishnan
 */
import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import '../../styles/movie.css'
function MovieInfo(props) {
    return (
        <div>
            <br></br>
            <Container className="movie-info">
                <Row>
                    <Col sm={6}>
                        {   // NOTE The AWS link is actually a No Image found ( image ), this will come in place if there is not image available in the API
                            props.movie.poster_path == null? <img alt="No movie-img found" src={`https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg`} className="movie-info-img" /> : <img alt="movie-img found" src={`https://image.tmdb.org/t/p/w185${props.movie.poster_path}`} className="movie-info-img" />
                        }
                    </Col>

                    <Col sm={6}>
                        <h3>{props.movie.title}</h3>
                        <h5>{props.movie.tagline}</h5>
                        <p>{props.movie.overview}</p>
                        <p>Status : {props.movie.status}</p>
                        <p>Rating : {props.movie.vote_average}</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default MovieInfo;