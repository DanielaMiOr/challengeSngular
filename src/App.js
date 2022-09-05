
import { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput]= useState();
  return (
    <div className="App">
      <form className="box">
        <label id="textBox"> Challenge Sngular</label>
        <input
          type="text"
          className="input"
          placeholder="Inserte el número n:"
          autoComplete="off"
        onChange={(e) => setInput(e.target.value)}
        />
        <button className="buttonResult">
          Calcular
        </button>
      </form>
    </div>
  );
}

export default App;
