"use strict";

let numberOfFilms;

function start() {

    numberOfFilms = +prompt("How many fils have you watched?", "");
    
    while(numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("How many fils have you watched?", "");
    }
}

start();

let personalMovieDB;
personalMovieDB = {
    count : numberOfFilms,
    movies : {  
    },
    actors : {
    },
    genres : [],
    privat : false
}; 

function showMyDB(hidden){

    if(!hidden)
    {
        console.log("Amount of films - " + personalMovieDB.count +
        "movies - " + personalMovieDB.movies +
        "actors - " + personalMovieDB.actors +
        "genres - " + personalMovieDB.genres +
        "privat value - " + personalMovieDB.privat);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGanres()
{
    for(let i =0; i < 3; i++)
    {
        personalMovieDB.genres[i] = prompt("Can you name your favourite ganre number "+ (i+1) +"?", "");
    }
    console.log(personalMovieDB.genres);
}

writeYourGanres();

if(personalMovieDB.count < 10)
{
    console.log("Not enought");
} else if (personalMovieDB.count > 10 && personalMovieDB.count3 < 30){
    console.log("Wow, you`re cool");
} else if (personalMovieDB.count > 30){
    console.log("You`re cinoholoc");
} else {console.log("Error");
}  

  /*for(let i = 0; i < 2; i++)
    {

        const filmN = prompt("Can you name the film you`ve watched recently?", 
        "");
        const filmR = +prompt("Rate this film", "");

        if(filmN.length < 50 && filmN != null && filmR != null && 
            filmN == "" && filmR == "")
        {
            personalMovieDB.movies[filmN] = filmR; 
            console.log("Done"); 
        } else {
            console.log("Error"); 
            i--;
        }
              
    }


*/