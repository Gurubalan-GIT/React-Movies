/*
 * Created Date: Saturday April 25th 2020
 * Author: Gurubalan Harikrishnan
 * Email-ID: gurubalan.work@gmail.com
 * -----
 * Copyright (c) 2020 Gurubalan Harikrishnan
 */
import React from 'react';
import {Container, Row} from 'react-bootstrap';
import '../../styles/movie.css'
import Cast from './Cast.js'

function CastInfo(props) {
    return (
        <div>
            <Container>
                <h3>Cast</h3>
                <Row>
                    {
                        props.casts.map((cast) => {
                            return (
                                cast.profile_path != null && <Cast key={cast.id} id={cast.id} cast={cast} />
                            )
                        })
                    }
                </Row>
            </Container>
        </div>
    );
}

export default CastInfo;