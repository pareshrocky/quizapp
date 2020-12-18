import React from "react";

function Result(props){
  var resultDisplayed;
if(props.endTime === 0){
  resultDisplayed="You ran out of time! #Go Fu#ck yourself..."
}else{
  if(props.score===5){
    resultDisplayed= "Excellent, You scored " + props.score + "/5 correct answers!!" ;
  }else if(props.score<5 && props.score>=3){
    resultDisplayed= "Good Game, You scored " +  props.score + "/5 #Keep Learning";
  }else if(props.score<3 && props.score>0){
    resultDisplayed= "No Problem, You scored " + props.score + "/5 #Don't Give Up";
  }else{
    resultDisplayed= "Awww!, You scored " + props.score + "/5 #Work Hard";
  }
}



  return(
    <div className="score-board">
       <div className="score"> {resultDisplayed} </div>
       <button className="playBtn" onClick={props.playAgain}>Play Again</button>
    </div>
  );
}
export default Result;
