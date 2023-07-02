'use strict'

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', "");

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

const questionA = prompt('Один из последних просмотренных фильмов?', ""),
      questionB = +prompt('На сколько оцените его?', ""),
      questionC = prompt('Один из последних просмотренных фильмов?', ""),
      questionD = +prompt('На сколько оцените его?', "");

personalMovieDB.movies[questionA] = questionB;
personalMovieDB.movies[questionC] = questionD;

console.log(personalMovieDB);