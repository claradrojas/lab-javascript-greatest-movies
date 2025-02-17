// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?


function getAllDirectors(movies) {
  let allDirectors = movies.map(function(element){
    return element.director
  })
  return allDirectors
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  
 let dramaMovies = movies.filter(function(element){
   if (element.genre.includes('Drama') && element.director == 'Steven Spielberg'){
    return element
   }
   
 })
 return dramaMovies.length
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (movies.length ==0){
    return 0
  }
  let allScoresAvg = movies.reduce(function(acc, value){
    return acc + value.score
  }, 0)
return (allScoresAvg/movies.length).toFixed(2)
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  let dramaMovies = movies.filter(function(element){
   if(element.genre.includes('Drama')){
    return element
   }
  
  })

 return dramaMovies/movies.length
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  
  let newArr = movies.year.sort(function(a,b){
   if (a.year>b.year){
     return 1
   }
   else {
   
     return -1
   }
 })
 return newArr
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {


   movies.year.sort(function(a,b){
    if (a.title>b.title){
      return 1
    }
    else {
    
      return -1
    }
  })


  return orderAlphabetically.slice(0,20)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
