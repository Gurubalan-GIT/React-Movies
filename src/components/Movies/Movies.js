/*
 * Created Date: Friday April 24th 2020
 * Author: Gurubalan Harikrishnan
 * Email-ID: gurubalan.work@gmail.com
 * -----
 * Copyright (c) 2020 Gurubalan Harikrishnan
 */
import React, { Component } from 'react';
import SearchField from '../SearchField';
import axios from 'axios';
import MovieGrid from './MovieGrid'
import {Container, Row, Col, Alert} from 'react-bootstrap'

// ANCHOR Using class based components here to set default states through constructor and send props down the hierarchy.
// NOTE I'll be using function based components as well but with react hooks in other components.
class Movies extends Component {
    constructor(){
        super();
        this.state = {
            movies: [],
            searchTerm: '',
            apiCallError: 0
        }
        this.apiKey = "ccc7381861c0bec8c7d8aa25d848affb";
    }
    handleSubmit = (e) => {
        e.preventDefault();
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchTerm}`)
        .then(res => res.data)
        .then(data => {
            this.setState({ movies: [...data.results]})
            this.setState({apiCallError : 0})
        })
        .catch(error=>{
            console.log(error);
            this.setState({apiCallError : 1})
        })
    }

    handleChange = (e) => {
        this.setState({searchTerm: e.target.value})
    }
    render() {
        return (
            <div>
                {this.state.apiCallError === 1 && <Alert variant="danger">Please search something valid.</Alert> }
                <SearchField handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
                {
                   this.state.searchTerm === '' && this.state.movies.length === 0? 
                   <Container>
                        <Row>
                            <Col md={{ span: 4, offset: 5 }}>
                                <br></br>
                                <br></br>
                                <h5 className="search-text">Search Movies.</h5> 
                            </Col>
                        </Row>
                    </Container>
                   : <MovieGrid movies={this.state.movies}/>
                }
            </div>
        );
    } 
}

export default Movies;