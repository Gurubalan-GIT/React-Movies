/*
 * Created Date: Saturday April 25th 2020
 * Author: Gurubalan Harikrishnan
 * Email-ID: gurubalan.work@gmail.com
 * -----
 * Copyright (c) 2020 Gurubalan Harikrishnan
 */
import React, {Component} from 'react';
import axios from 'axios';

class MovieDetails extends Component {
    constructor(props){
        super(props);
        this.state = {
            movie: {},
            cast: [],
            id: props.match.params.id
        }
        this.apiKey = "ccc7381861c0bec8c7d8aa25d848affb";
    }

    componentDidMount(){
        axios.get(`https://api.themoviedb.org/3/movie/${this.state.id}?api_key=ccc7381861c0bec8c7d8aa25d848affb`)
        .then(res => res.data)
        .then(data => {
            this.setState({ movie: data})
            console.log(data);
        })

        axios.get(`https://api.themoviedb.org/3/movie/${this.state.id}/credits?api_key=ccc7381861c0bec8c7d8aa25d848affb`)
        .then(res => res.data)
        .then(data => {
            this.setState({ cast: [...data.cast]})
            console.log(data.cast);
        })
    }

    render() {
        return (
            <div>
                <h2>{this.state.movie.original_title}</h2>
                {console.log(this.state.cast)}
                <ul>
                    {this.state && this.state.cast && this.state.cast.map(item =>
                        <li key={item.id}>{item.name}</li>
                    )}
                </ul>
            </div>
        );
    }
}

export default MovieDetails;
