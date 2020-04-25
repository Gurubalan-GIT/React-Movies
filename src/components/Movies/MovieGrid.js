/*
 * Created Date: Saturday April 25th 2020
 * Author: Gurubalan Harikrishnan
 * Email-ID: gurubalan.work@gmail.com
 * -----
 * Copyright (c) 2020 Gurubalan Harikrishnan
 */
import React from 'react';
import {Container, Row} from 'react-bootstrap';
import Movie from './Movie.js';
function MovieGrid(props) {
    return (
        <div>
            <br></br>
            <Container>
                <Row>
                        {
                            props.movies.map((movie,i) => {
                                return (
                                    <Movie key={movie.id} id={movie.id} image={movie.poster_path} title={movie.title} overview={movie.overview} rating={movie.vote_average} dateReleased={movie.release_date}/>
                                )
                            })
                        }
                </Row>
            </Container>
            <br></br>
        </div>
    );
}

export default MovieGrid;