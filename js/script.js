'use strict'

let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
    start: function() {
        do {
            this.count = prompt('Сколько фильмов вы уже посмотрели?', "");
        } while (this.count == null || isNaN(this.count) || this.count.trim() == "")
        this.count =this.count.trim();
    },
    rememberMyFilms: function() {
        Survey: for (let i =0; i <2; i++) {
            const questionA = prompt('Один из последних просмотренных фильмов?', ""),
                  questionB = prompt('На сколько оцените его?', "");
        
            if (questionA === null || questionB === null || questionB.trim() === "" || questionA.trim() === "" || questionA.length > 50) {
                alert("Некорректный ответ(");
                console.log("Некорректный ответ(");
                i--;
                continue Survey; 
            };
            this.movies[questionA] = questionB.trim();
        }
    },
    detectPersonalLevel: function() {
        if (this.count < 10) {
            alert("Просмотрено довольно мало фильмов");
        } else if (this.count >= 10 && this.count <= 30) {
            alert("Вы классический зритель");
        } else if (this.count > 30) {
            alert("Вы киноман");
        } else {
            alert("Некорретный ввод количества просмотренных фильмов");
        };
    },
    writeYourGenres: function() {
        for (let i = 0; i < 3; i++) {
            const genres = prompt(`Ваш любимый жанр под номером ${i+1}`,"");
            if (genres != null && genres.trim() != "") {
                this.genres[i] = genres.trim();
            } else {
                alert("Введите жанр");
                i--;
            };
        }
        this.genres.forEach(function(element, index) {
            console.log(`Любимый жанр #${index + 1} - это ${element}`)
        });
    },
    toggleVisibleMyDB: function() {
        if (this.privat === false) {
            this.privat = true;
        } else {
            this.privat = false;
        };
    },
    showMyDB: function(mainObj) {
        if (!mainObj.privat){ 
            console.log(mainObj)
        };
    },
};

personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPerson alLevel();
personalMovieDB.writeYourGenres();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB(personalMovieDB);