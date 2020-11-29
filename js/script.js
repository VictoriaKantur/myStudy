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

  /*  for(let i = 0; i < 2; i++)
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
              
    }*/
    // 4 Ex

    if(personalMovieDB.count < 10)
    {
        console.log("Not enought");
    } else if (personalMovieDB.count > 10 && personalMovieDB.count3 < 30){
        console.log("Wow, you`re cool");
    } else if (personalMovieDB.count > 30){
        console.log("You`re cinoholoc");
    } else {console.log("Error");
    }  
    