import React , {useEffect} from "react";

function Timer(props){

  useEffect(() => {
    if(props.second >0){
      setTimeout(()=> props.setSecond(props.second-1),1000)
    }
  });
  return(
    <div className="App">

          <h5>Remaining Time: </h5>
            <button className="timer-btn">{props.second}</button>

        </div>
  );
}
export default Timer;
