/*
 * Created Date: Saturday April 25th 2020
 * Author: Gurubalan Harikrishnan
 * Email-ID: gurubalan.work@gmail.com
 * -----
 * Copyright (c) 2020 Gurubalan Harikrishnan
 */
import React, {Component} from 'react';
import axios from 'axios';
import ActorInfo from './ActorInfo.js'
import MovieCastedInfo from './MovieCastedInfo.js'

class ActorDetails extends Component {
    constructor(props){
        super(props);
        this.state = {
            actor: {},
            moviesCasted: [],
            id: props.match.params.id
        }
        this.apiKey = "ccc7381861c0bec8c7d8aa25d848affb";
    }

    componentDidMount(){
        axios.get(`https://api.themoviedb.org/3/person/${this.state.id}?api_key=ccc7381861c0bec8c7d8aa25d848affb`)
        .then(res => res.data)
        .then(data => {
            this.setState({ actor: data})
        })

        axios.get(`https://api.themoviedb.org/3/person/${this.state.id}/movie_credits?api_key=ccc7381861c0bec8c7d8aa25d848affb`)
        .then(res => res.data)
        .then(data => {
            this.setState({ moviesCasted: [...data.cast]})
        })
    }

    render() {
        return (
            <div>
                {
                    this.state && this.state.actor && <ActorInfo actor={this.state.actor}/>
                }
                <br></br>
                {
                    this.state && this.state.moviesCasted && <MovieCastedInfo moviesCasted={this.state.moviesCasted}/>
                }
          
            </div>
        );
    }
}

export default ActorDetails;