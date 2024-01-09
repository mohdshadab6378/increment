import react from "react";

 function Incr ()  {
  console.log("ok ")
 }

const App = () =>  {
  return (
    <>
    <div className="container">
      <h1> 0 </h1>
      <button onClick={Incr} className="btn">click me</button>
      </div>
    </>

  )
}

export default App;