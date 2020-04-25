/*
 * Created Date: Saturday April 25th 2020
 * Author: Gurubalan Harikrishnan
 * Email-ID: gurubalan.work@gmail.com
 * -----
 * Copyright (c) 2020 Gurubalan Harikrishnan
 */
import React from 'react';
import {Container, Row} from 'react-bootstrap';
import '../../styles/component.css'
import Movie from './Movie.js'

function MovieCastedInfo(props) {
    return (
        <div>
            <Container>
                <h4>Movies casted</h4>
                <Row>
                    {
                        props.moviesCasted.map((movie) => {
                            return (
                                movie.poster_path != null && <Movie key={movie.id} id={movie.id} movie={movie} />
                            )
                        })
                    }
                </Row>
            </Container>
        </div>
    );
}

export default MovieCastedInfo;