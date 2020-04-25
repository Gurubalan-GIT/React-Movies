/*
 * Created Date: Saturday April 25th 2020
 * Author: Gurubalan Harikrishnan
 * Email-ID: gurubalan.work@gmail.com
 * -----
 * Copyright (c) 2020 Gurubalan Harikrishnan
 */
import React, {Component} from 'react';
import axios from 'axios';
import MovieInfo from './MovieInfo.js'
import CastInfo from './CastInfo.js'

class MovieDetails extends Component {
    constructor(props){
        super(props);
        this.state = {
            movie: {},
            casts: [],
            id: props.match.params.id
        }
        this.apiKey = "ccc7381861c0bec8c7d8aa25d848affb";
    }

    componentDidMount(){
        axios.get(`https://api.themoviedb.org/3/movie/${this.state.id}?api_key=ccc7381861c0bec8c7d8aa25d848affb`)
        .then(res => res.data)
        .then(data => {
            this.setState({ movie: data})
        })

        axios.get(`https://api.themoviedb.org/3/movie/${this.state.id}/credits?api_key=ccc7381861c0bec8c7d8aa25d848affb`)
        .then(res => res.data)
        .then(data => {
            this.setState({ casts: [...data.cast]})
        })
    }

    render() {
        return (
            <div>
                {
                    this.state && this.state.movie && <MovieInfo movie={this.state.movie}/>
                }
                <br></br>
                {
                    this.state && this.state.casts && <CastInfo casts={this.state.casts}/>
                }
          
            </div>
        );
    }
}

export default MovieDetails;
