
import { useState } from 'react';
import './App.css';
import Calculator from './Calculator';
import Result from './Result';

function App() {
  const [input, setInput]= useState("");
  const [result, setResult]=useState("");
  const [showResult, setShowResult]=useState(false);
  const runCalculator= (event)=>{
    event.preventDefault()
   const calculo= Calculator(input);
   if(calculo != null){
   console.log(calculo)
   setResult(calculo);
   setShowResult(true);
   }else {
     setResult("input no válido, N tiene que ser mayor o igual a 2");
     setShowResult(true);
   }
  }
  return (
    <div className="App">
      <form className="box">
        <label id="textBox"> Challenge Sngular</label>
        <input
          type="number"
          className="input"
          placeholder="Inserte el número n:"
          autoComplete="off"
        onChange={(e) => setInput(e.target.value)}
        />
        <button className="buttonResult" onClick={runCalculator}>
          Calcular
        </button>
        
      </form>
      { showResult && (
      <Result
      result={result}/>
      )}
    </div>
  );
}

export default App;
