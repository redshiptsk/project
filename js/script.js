"use strict"

const numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?", "");
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};
const movie1 = prompt("Один из последних просмотренных фильмов?", ""),
    raiting1 = +prompt("Как оцениет его?", ""),
    movie2 = prompt("Один из последних просмотренных фильмов?", ""),
    raiting2 = +prompt("Как оцениет его?", "");
    personalMovieDB.movies[movie1] = raiting1;
    personalMovieDB.movies[movie2] = raiting2;
console.log(personalMovieDB);