/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt("Сколько фильмов Вы уже посмотрели?", "");

        while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Сколько фильмов Вы уже посмотрели?", "");
        }
    },
    rememberMyFilms: function () {

        for (let i = 0; i < 2; i++) {
            const movie = prompt("Один из последних просмотренных фильмов?", ""),
                raiting = prompt("Как оцениваете его?", "");
            if (movie.length != "" && raiting != "" && movie.length < 50 && movie != null && raiting != null) {
                personalMovieDB.movies[movie] = raiting;
            } else {
                i--
            };

        };
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log("Просмотрено мало фильмов")
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("Вы средний зритель")
        } else if (personalMovieDB.count >= 30) {
            console.log("Вы киноман")
        } else {
            console.log("Произошла ошибка")
        }
    },
    writeYourGenres: function () {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`, "");
            if (genre === "" || genre == null) {
                i--
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }    

        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i+1} - это ${item}`)
        })
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        } 
    },
    showMyDB: function () {
        if (!personalMovieDB.privat) {
            console.log(personalMovieDB);
        }
    },
};

