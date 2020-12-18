import React, {useState} from "react";
import quizServices from "../quizService/index.js";
import Questions from "./Questions.jsx";
import Result from "./Result.jsx";
import Timer from "./Timer.jsx";

function App(){
  const[quizQuestions,setQuizQuestion]=useState([]);
  const [fadeOut,setFadeOut]=useState(false);
  const[score,setScore]=useState(0);
  const[responses,setResponse]=useState(0);
  const [seconds, setSeconds] = useState(15);

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
  setSeconds(15);
}
return(
     <div className="container">
     <div className="title">QuizBee</div>

     <button className="start-button" onClick={displayQuestions} style={{display:fadeOut && "none"}}>START</button>
     {
      fadeOut && responses<5 && seconds>0 &&
      (<div>
        <Timer second={seconds} setSecond={setSeconds}/>
        {quizQuestions.map(({question,answers,correct,questionId}) => <Questions key={questionId} questionNo={question} options={answers} onSelect={checkResult}/>)}</div>)

     }
     {
       responses ===5 && (<Result score={score} playAgain={resetQuiz} endTime={seconds}/>)
     }
     {
       seconds===0 && (<Result score={score} playAgain={resetQuiz} endTime={seconds}/>)
     }

     </div>

  );
}
export default App;
