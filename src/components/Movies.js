/*
 * Created Date: Friday April 24th 2020
 * Author: Gurubalan Harikrishnan
 * Email-ID: gurubalan.work@gmail.com
 * -----
 * Copyright (c) 2020 Gurubalan Harikrishnan
 */
import React, { Component } from 'react';
import SearchField from './SearchField';
import axios from 'axios';
import MovieGrid from './MovieGrid'

// ANCHOR Using class based components here to set default states through constructor and send props down the hierarchy.
class Movies extends Component {
    constructor(){
        super();
        this.state = {
            movies: [],
            searchTerm: ''
        }
        this.apiKey = "ccc7381861c0bec8c7d8aa25d848affb";
    }
    handleSubmit = (e) => {
        e.preventDefault();
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchTerm}`)
        .then(res => res.data)
        .then(data => {
            console.log(data);
            this.setState({ movies: [...data.results]})
        })
    }

    handleChange = (e) => {
        this.setState({searchTerm: e.target.value})
    }
    render() {
        return (
            <div>
                <SearchField handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
                <MovieGrid movies={this.state.movies}/>
            </div>
        );
    } 
}

export default Movies;