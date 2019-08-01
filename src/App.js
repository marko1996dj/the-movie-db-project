import React, { Component } from 'react';
import './App.css';

import axios from 'axios';


class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      api_key: '8ff61bbd5329bd86f6c3fb9c61a115ba',
      movie: null
    }
    this.request = this.request.bind(this);
  }

  request = () => {
    axios.get(`https://api.themoviedb.org/3/movie/76341?api_key=${this.state.api_key}`).then(
      (response) => {
        const movie = response.data;
        this.setState({movie: movie})
        console.log(response.data)
      }
    ).catch(e => {
      console.log(e);
    })
  }

  componentDidMount = () => {
    this.request()
  }


  render() {
    let moviePoster;
    if(this.state.movie) {
      moviePoster = this.state.movie.belongs_to_collection.poster_path
      console.log(moviePoster);
    }



    return(
      <div className="App">
        <h1>the-movie-db</h1>
        <img src={moviePoster}></img>
      </div>
    );
  }
}

export default App;
