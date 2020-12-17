import React, {useState} from "react";
import quizServices from "../quizService/index.js";
import Questions from "./Questions.jsx";
import Result from "./Result.jsx";

function App(){
  const[quizQuestions,setQuizQuestion]=useState([]);
  const [fadeOut,setFadeOut]=useState(false);
  const[score,setScore]=useState(0);
  const[responses,setResponse]=useState(0);




  function displayQuestions(){
    const newQBank=[];
    for(var i=0;i<5;i++){
      var random=Math.floor(Math.random()*quizServices.length);
      newQBank.push(quizServices[random]);
      quizServices.splice(random,1);
    }
    setFadeOut(true);
    setQuizQuestion(newQBank);
  }
function checkResult(selectedOpt){
//eslint-disable-next-line
  quizQuestions.map(quizQuestion => {
   if(quizQuestion.correct === selectedOpt){
    return (setScore(score+1));
  }
});
setResponse(responses<5? responses+1:5);
}
function resetQuiz(){
  setFadeOut(false);
  setQuizQuestion(quizServices);
  setScore(0);
  setResponse(0);

}
return(
     <div className="container">
     <div className="title">QuizBee</div>
     <button className="start-button" onClick={displayQuestions} style={{display:fadeOut && "none"}}>START</button>
     {
      fadeOut && responses<5 && quizQuestions.map(({question,answers,correct,questionId}) => <Questions key={questionId} questionNo={question} options={answers} onSelect={checkResult}/>)
     }
     {
       responses ===5 && (<Result score={score} playAgain={resetQuiz}/>)
     }

     </div>

  );
}
export default App;
