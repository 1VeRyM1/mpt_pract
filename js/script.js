'use strict'

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', "");

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

Survey: for (let i =0; i <2; i++) {
    const questionA = prompt('Один из последних просмотренных фильмов?', ""),
          questionB = prompt('На сколько оцените его?', "");

    if (questionA === null || questionB === null || questionB === "" || questionA === "" || questionA.length > 50) {
        alert("Некорректный ответ(");
        console.log("Некорректный ответ(");
        i--;
        continue Survey; 
    };
    personalMovieDB.movies[questionA] = questionB;
}

if (personalMovieDB.count < 10) {
    alert("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    alert("Вы классический зритель");
} else if (personalMovieDB.count > 30) {
    alert("Вы киноман");
} else {
    alert("Некорретный ввод количества просмотренных фильмов");
};

console.log(personalMovieDB);