import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // map over your movieData array and return an array of the correct JSX
    return movieData.map( info => <MovieCard title={info["title"]} IMDBRating={info["IMDBRating"]} genres={info["genres"]} poster={info["poster"]} />);

    // Alternate code to return a correct array 
    // let movieCardArr = [];
    // for( let i = 0; i < movieData.length; i++ ) {
    //   movieCardArr.push(<MovieCard title={movieData[i]["title"]} IMDBRating={movieData[i]["IMDBRating"]} genres={movieData[i]["genres"]} poster={movieData[i]["poster"]} />);
    // }
    // return movieCardArr;
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
