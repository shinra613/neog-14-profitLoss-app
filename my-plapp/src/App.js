
import './App.css';
import calculateProfitAndLoss from "./plcalc";
import { useState } from "react";

function App() {
  let [state, setState] = useState({
    Initialprice: 0,
    Quantity: 0,
    Currentprice: 0
  });

  let Calculator = calculateProfitAndLoss;
  let [result, setresult] = useState(
    <div>Hi there, enter the requested details.</div>
  );

  return (
    <div className="App">
      <div className="container">
      <div className="input">
        <h1>Profit / Loss Calculator</h1>
        <br />
        <label>Intial Price : </label>
        <br />
        <br />
        <input
          type="text"
          onChange={(event) =>
            setState({ ...state, Initialprice: event.target.value })
          }
        />
        <br />
        <br />
        <br />
        <label>Quantity of stock : </label>
        <br />
        <br />
        <input
          type="text"
          onChange={(event) =>
            setState({ ...state, Quantity: event.target.value })
          }
        />
        <br />
        <br />
        <br />
        <label>Current Price : </label>
        <br />
        <br />
        <input
          type="text"
          onChange={(event) =>
            setState({ ...state, Currentprice: event.target.value })
          }
        />
        <br />
        <br />
        <br />
        <br />
        <button
          onClick={() => (
            <div>
              {setresult(
                Calculator({
                  one: state.Initialprice,
                  two: state.Quantity,
                  three: state.Currentprice
                })
              )}
            </div>
          )}
        >
          Calculate
        </button>
      </div>

        <div className="output">{result}</div>
        
        </div>

      <footer>
        <h3>
          Made by{" "}
          <a href="https://akhilvenkateshpillai.vercel.app/" target="_blank">
            Akhil
          </a>
         

        </h3>
      </footer>
    </div>

  );
}

export default App;
