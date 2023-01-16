'use strict';

const numberOfFilms = +prompt('How many movies have you watched so far?', '');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

const ask1 = prompt('One of the last movies you watched?', '');
const ask2 = prompt('How much do you rate it?', '');
const ask3 = prompt('One of the last movies you watched?', '');
const ask4 = prompt('How much do you rate it?', '');

personalMovieDB.movies[ask1] = ask2;
personalMovieDB.movies[ask3] = ask4;

console.log(personalMovieDB);