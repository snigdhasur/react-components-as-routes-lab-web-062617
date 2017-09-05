import React from 'react';
import { actors } from '../data';

const Actors = () => {

	const actorDivs = actors.map(actor => {
	  	const movieList = actor.movies.map(movie => <ul> {movie} </ul>)
	  	return (
	  		<div>
		  		<h3>{actor.name}</h3>
		  		{movieList}
	  		</div>
	  	)
    })

  return (
    <div>
      <h1>Actors Page</h1>
      {actorDivs}
    </div>
  );
};

export default Actors;
