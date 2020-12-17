import React,{useState} from "react";

function Questions(props){
  const [answer,setAnswer]=useState(props.options)



  return(<div className="questionBox">
  <div className="question">
    <h4>{props.questionNo}</h4></div>
    {answer.map((text,index)=> (<button onClick={() =>{

       setAnswer([text]);
       props.onSelect(text);

    }} className="answerBtn"  key={index}> {text}</button> ))}

    </div>
  );
}
export default Questions;
