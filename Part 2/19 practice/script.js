'use strict';

let numberOfFilms;

function start() {
  numberOfFilms = +prompt('How many movies have you watched so far?', '');

  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('How many movies have you watched so far?', '');
  }
}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    let a = prompt('One of the last movies you watched?', '').trim();
    let b = prompt('How much do you rate it?', '').trim();
  
    if (a != null && b != null && a != '' && b != '' && a.length < 50 && b.length < 50) {
      personalMovieDB.movies[a] = b;
    } else {
      i--;
    }
  }
}

rememberMyFilms();

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log('просмотрено довольно мало фильмов');
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30){
    console.log('вы классический зритель');
  } else if (personalMovieDB.count > 30) {
    console.log('вы киноман');
  } else {
    console.log('произошла ошибка');
  }
}

detectPersonalLevel();

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}

function writeYourGenres() {
  for (let i = 1; i < 4; i++) {
    personalMovieDB.genres[i - 1] = prompt(`Your favorite genre ${i}?`);
  }
}

writeYourGenres();

showMyDB(personalMovieDB.privat);