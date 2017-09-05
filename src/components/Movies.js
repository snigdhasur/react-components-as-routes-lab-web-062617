import React from 'react';
import { movies } from '../data';

const Movies = () => {
  const movieDivs = movies.map(movie => {
  	const genreList = movie.genres.map(genre => <ul> {genre} </ul>)
  	return (
  		<div>
	  		<h3>{movie.title}</h3>
	  		<p>Runtime (minutes): {movie.time}</p>
	  		{genreList}
  		</div>
  	)
  })

  return (
    <div>
        <h1>Movies Page</h1>
        {movieDivs}
    </div>
  );
};

export default Movies;
