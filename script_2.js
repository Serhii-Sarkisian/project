'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const first = prompt('Один из последних просмотренных фильмов?', ''),
      second = prompt('На сколько оцените его?', '');

personalMovieDB.movies[first] = second;

console.log(personalMovieDB);