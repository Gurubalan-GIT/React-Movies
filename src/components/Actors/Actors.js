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
import ActorGrid from './ActorGrid.js';

class Actors extends Component {

    constructor(){
        super();
        this.state = {
            actors: [],
            searchTerm: ''
        }
        this.apiKey = "ccc7381861c0bec8c7d8aa25d848affb";
    }
    handleSubmit = (e) => {
        e.preventDefault();
        axios.get(`https://api.themoviedb.org/3/search/person?api_key=${this.apiKey}&query=${this.state.searchTerm}`)
        .then(res => res.data)
        .then(data => {
            this.setState({ actors: [...data.results]})
        })
    }

    handleChange = (e) => {
        this.setState({searchTerm: e.target.value})
    }
    render() {
        return (
            <div>
                <SearchField handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
                <ActorGrid actors={this.state.actors}/>
            </div>
        );
    } 
    
}

export default Actors;