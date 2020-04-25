/*
 * Created Date: Saturday April 25th 2020
 * Author: Gurubalan Harikrishnan
 * Email-ID: gurubalan.work@gmail.com
 * -----
 * Copyright (c) 2020 Gurubalan Harikrishnan
 */
import React from 'react';
import {Container, Row} from 'react-bootstrap';
import Actor from './Actor.js';

function ActorGrid(props) {
    return (
        <div>
            <br></br>
            <Container>
                <Row>
                        {
                            props.actors.map((actor) => {
                                return (
                                    <Actor key={actor.id} id={actor.id} image={actor.profile_path} name={actor.name} role={actor.known_for_department}/>
                                )
                            })
                        }
                </Row>
            </Container>
            <br></br>
        </div>
    );
}

export default ActorGrid;