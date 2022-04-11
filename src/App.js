import logo from './logo.svg';
import './App.css';
import{useState}from"react"

function App() {
  const [Score,setScore]=useState(76);
  const [Wicket,setWicket]=useState(2)
  const [Ball,setBall]=useState(50)
  const handle=()=>{
    setScore(Score+1);
    console.log(Score)
  }
  const handle1=()=>{
    setScore(Score+4);
    console.log(Score)
  }
  const handle2=()=>{
    setScore(Score+6);
    console.log(Score)
  }
  const addwicket=()=>{
    setWicket(Wicket+1);
  }
  const addball=()=>{
    setBall(Ball+1);
  }
  let e=""
  
    if(Score>100){
      e= "India Won"
    }
   
  
  const over=(Ball/6).toFixed(1)
  return (
    <div className="App">
      <h3>India:</h3>
      <div className="banner">
        <div>
          Score:{}
          <h1 className="scoreCount">
            {
              Score
              // show "score" here
            }
          </h1>
        </div>
        <div>
          Wicket:{" "}
          <h1 className="wicketCount">
            {
              Wicket
              // show wicket here
            }
          </h1>
        </div>

        <div>
          Over:{" "}
          <h1 className="overCount">
            {
              over
              // Show Over here in the format: "over.ball" eg: 4.5 means 4th over and 5th ball
              // if 1 more ball is thrown then over is now 5.0
              // you have to write logic to form this string from current ball number.
            }
          </h1>
        </div>
      </div>

      <div className="addScore">
        Add Score
        {/* these buttons should add the respective amount in the score */}
        <button className="addScore1" onClick={handle}>Add 1</button>
        <button className="addScore4" onClick={handle1}>Add 4</button>
        <button className="addScore6" onClick={handle2}>Add 6</button>
      </div>

      <div className="addWicket">
        Add Wicket
        {/* Increase the count of wicket */}
        <button onClick={addwicket}>Add 1 wicket</button>
      </div>

      <div className="addBall">
        Add ball
        {/* Increase the total number of balls thrown here. */}
        <button onClick={addball}>Add 1</button>
      </div>
       
      {/* If score reaches greater than 100, show text "India Won" without quotes in h1 tag with class name 'status' */}
       <h1 className='status'>{e}</h1>
    </div>
  );
}

export default App;
