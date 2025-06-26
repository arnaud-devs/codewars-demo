// Our football team has finished the championship.

// Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

// For example: ["3:1", "2:2", "0:1", ...]

// Points are awarded for each match as follows:

// if x > y: 3 points (win)
// if x < y: 0 points (loss)
// if x = y: 1 point (tie)
// We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

// Notes:

// our team always plays 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4



function points(games){
  let pt = 0;
  let result =[];
  for(let i = 0 ; i < games.length ; i++){
    let score = games[i];
    if(score[0]>score[2]){
        pt += 3;
    }
    else if(score[2] == score[0]){
        pt += 1;
    }
}

  return pt;
}
let marks = ["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"];
console.log(points(marks));