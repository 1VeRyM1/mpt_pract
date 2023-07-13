'use strict'

let numberOfFilms;

function start() {
    do {
        numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', "");
    } while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms))
}

start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

function rememberMyFilms() {
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
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        alert("Вы классический зритель");
    } else if (personalMovieDB.count > 30) {
        alert("Вы киноман");
    } else {
        alert("Некорретный ввод количества просмотренных фильмов");
    };
}

detectPersonalLevel();

function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        const genres = prompt(`Ваш любимый жанр под номером ${i+1}`);
        if (genres != "" && genres != null) {
            personalMovieDB.genres[i] = genres;
        } else {
            alert("Введите жанр");
            i--;
        };
    }
}

writeYourGenres();

function showMyDB(mainObj) {
    if (!mainObj.privat){ 
        console.log(mainObj)
    };
}

showMyDB(personalMovieDB);