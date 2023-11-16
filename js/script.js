/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

let numberOfFilms

function start() {
    numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?", "");

    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?", "");
    }
};

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

function rememberMyFilms () {

    for (let i = 0; i < 2; i++) {
        const movie = prompt("Один из последних просмотренных фильмов?", ""),
            raiting = prompt("Как оцениваете его?", "");
        if (movie.length != "" && raiting != "" && movie.length < 50 && movie != null && raiting != null) {
            personalMovieDB.movies[movie] = raiting;
        } else{
            i--
        };
    
    };    
};

rememberMyFilms();


function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено мало фильмов")
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы средний зритель")
    } else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман")
    } else {
        console.log("Произошла ошибка")
    }
};

detectPersonalLevel();

function writeYourGenres() {
    for(let i = 1; i<=3; i++) {
        let genre;
        do {
            genre = prompt(`Ваш любимый жанр под номером ${i}`, "");
        }
        while(genre.length>0);
        personalMovieDB.genres[i-1] = genre;
    }
};

writeYourGenres();

function showMyDB(hidden){
    if (!hidden) {
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);