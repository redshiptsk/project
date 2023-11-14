"use strict"

const numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?", "");
if (numberOfFilms < 10) {
    console.log("Просмотрено мало фильмов")
} else if (numberOfFilms > 10 && numberOfFilms < 30) {
    console.log("Вы средний зритель")
} else if (numberOfFilms > 30) {
    console.log("Вы киноман")
} else {
    console.log("Произошла ошибка")
}
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};
let count = 0;
while (count < 2) {
    const movie = prompt("Один из последних просмотренных фильмов?", ""),
        raiting = prompt("Как оцениваете его?", "");
    if (movie.length != "" && raiting != "" && movie.length < 50 && movie != null && raiting != null) {
        personalMovieDB.movies[movie] = raiting;
        count++;
    };

};
if (personalMovieDB.count < 10) {
    console.log("Просмотрено мало фильмов")
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы средний зритель")
} else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман")
} else {
    console.log("Произошла ошибка")
}
console.log(personalMovieDB);