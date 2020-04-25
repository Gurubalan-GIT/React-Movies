/*
 * Created Date: Saturday April 25th 2020
 * Author: Gurubalan Harikrishnan
 * Email-ID: gurubalan.work@gmail.com
 * -----
 * Copyright (c) 2020 Gurubalan Harikrishnan
 */
import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Movie from './Movie.js';
function MovieGrid(props) {
    return (
        <div>
            <Container>
                <Row>
                        {
                            props.movies.map((movie,i) => {
                                return (
                                    <Movie key={i} image={movie.poster_path}/>
                                )
                            })
                        }
                </Row>
            </Container>
        </div>
    );
}

export default MovieGrid;