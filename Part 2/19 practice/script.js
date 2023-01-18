'use strict';

const numberOfFilms = +prompt('How many movies have you watched so far?', '');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

for (let i = 0; i < 2; i++) {
  let a = prompt('One of the last movies you watched?', '');
  let b = prompt('How much do you rate it?', '');

  if (a != null && b != null && a != '' && b != '' && a.length < 50 && b.length < 50) {
    personalMovieDB.movies[a] = b;
  } else {
    i--;
  }
}

if (personalMovieDB.count < 10) {
  console.log('просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30){
  console.log('вы классический зритель');
} else if (personalMovieDB.count > 30) {
  console.log('вы киноман');
} else {
  console.log('произошла ошибка');
}

console.log(personalMovieDB);