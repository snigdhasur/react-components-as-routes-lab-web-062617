import React from 'react';
import { directors } from '../data';

const Directors = () => {

	const directorDivs = directors.map(director => {
	  	const movieList = director.movies.map(movie => <ul> {movie} </ul>)
	  	return (
	  		<div>
		  		<h3>{director.name}</h3>
		  		{movieList}
	  		</div>
	  	)
    })


  return (
    <div>
      <h1>Directors Page</h1>
      {directorDivs}
    </div>
  );
}

export default Directors
