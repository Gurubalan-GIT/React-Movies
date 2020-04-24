/*
 * Created Date: Friday April 24th 2020
 * Author: Gurubalan Harikrishnan
 * Email-ID: gurubalan.work@gmail.com
 * -----
 * Copyright (c) 2020 Gurubalan Harikrishnan
 */

import React from 'react';
import {Container, Row, Col, Form, FormControl, Button} from 'react-bootstrap'

function SearchField(props) {
    return (
        <div>
            <br></br>
            <Container>
                <Row>
                    <Col md={{ span: 4, offset: 4 }}>
                        <Form inline onSubmit={props.handleSubmit}>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={props.handleChange}/>
                            <Button variant="outline-success" type="submit">Search</Button>
                        </Form>                
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default SearchField;