"use strict";

//1 Excercise
const numberOfFilms = +prompt("How many fils have you watched?", "");
//document.getElementById("films").innerHTML = numberOfFilms;

//2 Excercise
const personalMovieDB = {
    count : numberOfFilms,
    movies : {  
    },
    actors : {
    },
    genres : [],
    privat : false
}; 

//3 Exsercice

/*const filmName = prompt("Can you name the film you`ve watched recently?", ""),
      filmRate = +prompt("Rate this film", ""),

      filmName2 = prompt("Can you name the film you`ve watched recently?", ""),
      filmRate2 = +prompt("Rate this film", "");

    personalMovieDB.movies[filmName] = filmRate;
    personalMovieDB.movies[filmName2] = filmRate2;*/

    for(let i = 0; i < 2; i++)
    {
        const filmN = [];
        const filmR = [];
        filmN [i] = prompt("Can you name the film you`ve watched recently?", "");
        filmR [i] = +prompt("Rate this film", "");
        personalMovieDB.movies[filmN[i]] = filmR [i];       
    }

    console.log(personalMovieDB.movies); 