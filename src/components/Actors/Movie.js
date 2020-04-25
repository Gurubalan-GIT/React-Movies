/*
 * Created Date: Saturday April 25th 2020
 * Author: Gurubalan Harikrishnan
 * Email-ID: gurubalan.work@gmail.com
 * -----
 * Copyright (c) 2020 Gurubalan Harikrishnan
 */
import React from 'react';
import {Col, Button ,Image} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../../styles/component.css';

function Movie(props) {
    return (
        <div className="cast-div card card-body bg-light">
            <Col>
                <div>
                    <Col>
                        {   // NOTE The AWS link is actually a No Image found ( image ), this will come in place if there is not image available in the API
                            <Image alt="movie-img found" src={`https://image.tmdb.org/t/p/w185${props.movie.poster_path}`} roundedCircle className="cast-img"/>
                        }
                    </Col>

                    <Col> 
                        <h5>{props.movie.title}</h5> 
                        <p>{props.movie.character}</p>
                        <Link to={`/movies/${props.id}`}><Button variant="info" size="sm">Know more</Button></Link>
                    </Col>
                </div>
            </Col>
        </div>
    );
}

export default Movie;