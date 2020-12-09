"use strict";


let personalMovieDB;

personalMovieDB = {
    count : 0,
    movies : {  
    },
    actors : {
    },
    genres : [],
    privat : false,

    start : function() {

        personalMovieDB.count = +prompt("How many fils have you watched?", "");
        
        while(personalMovieDB.count == "" || personalMovieDB.count == null || 
        isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("How many fils have you watched?", "");
        }
    },

    rememberMyFilms : function(){
        for(let i = 0; i < 2; i++)
        {
            const a = prompt ('Which film you`ve watched recently?', ''),
                  b = prompt('Rate it', '');
            
            if(a != null && b != null || a != '' || b != '' || a.length < 50){
                personalMovieDB.movies[a] = b;
                console.log('Done!');
            } else {
                console.log('Error!');
                i--;
            }
        }
    },

    detectPersonalLevel : function(){
        if(personalMovieDB.count < 10)
    {
        console.log("Not enought");
    } else if (personalMovieDB.count > 10 && personalMovieDB.count3 < 30){
        console.log("Wow, you`re cool");
    } else if (personalMovieDB.count > 30){
        console.log("You`re cinoholoc");
    } else {
        console.log("Error");
    } 
    },

    showMyDB : function (hidden){

        if(!hidden)
        {
            console.log(personalMovieDB);
        }
    },

    
    writeYourGanres : function(){
    for(let i =0; i < 3; i++)
    {
        personalMovieDB.genres[i] = prompt("Can you name your favourite ganre number "+ (i+1) +"?", "");
        if(personalMovieDB.genres[i] == null || personalMovieDB.genres[i] == '')
        {
            i--;
            personalMovieDB.genres[i] = prompt("Can you name your favourite ganre number "+ (i+1) +"?", "");
        }
    }
    
    personalMovieDB.genres.forEach((item, i, personalMovieDB) => {
        console.log(`Favourite genre - ${item} has number ${i+1}
        and it's an array ${personalMovieDB.genres}`);
    });
    },

    toggleVisibleMyDB : function(){
    
        if(personalMovieDB.privat){
            personalMovieDB.privat = false;
         } else{
            personalMovieDB.privat =true;

        }
    }
}; 






  