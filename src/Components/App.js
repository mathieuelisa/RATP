import { useState } from "react";
import "./Styles.scss";

function App() {
  const [state, setState] = useState({
    numberOfParticipants: "",
    quittanceOf35: "",
    quittanceOf50: "",
    quittanceOf60: "",
  });
  const [stateResult, setStateResult] = useState(0);

  const handleChange = (evt) => {
    setState({
      ...state,
      [evt.target.name]: evt.target.value,
    });
  };

  // Put all values in integer
  const integerParticipants = Number(state.numberOfParticipants);
  const integerOf35 = Number(state.quittanceOf35);
  const integerOf50 = Number(state.quittanceOf50);
  const integerOf60 = Number(state.quittanceOf60);

  // Function get an average
  function getAverage(oneLevel, secondLevel, thirdLevel) {
    let resultOfFirstLevel = oneLevel * 35;
    let resultOfSecondLevel = secondLevel * 50;
    let resultOfThirdLevel = thirdLevel * 60;

    return resultOfFirstLevel + resultOfSecondLevel + resultOfThirdLevel;
  }

  let myResult =
    getAverage(integerOf35, integerOf50, integerOf60) / integerParticipants;

  const handleResult = () => {
    setStateResult(myResult / state.numberOfParticipants);
  };

  return (
    <div className="App">
      <h1>RATP APP</h1>
      <div>
        <input
          type="number"
          value={state.numberOfParticipants}
          onChange={handleChange}
          name="numberOfParticipants"
        />
        Nombre de participants
      </div>
      <div>
        <input
          type="number"
          value={state.quittanceOf35}
          onChange={handleChange}
          name="quittanceOf35"
        />
        Quittances de 35 euros
      </div>
      <div>
        <input
          type="number"
          value={state.quittanceOf50}
          onChange={handleChange}
          name="quittanceOf50"
        />
        Quittances de 50 euros
      </div>
      <div>
        <input
          type="number"
          value={state.quittanceOf60}
          onChange={handleChange}
          name="quittanceOf60"
        />
        Quittances de 60 euros
      </div>
      <button onClick={handleResult}>GO</button>
      {/* <h2>Resultat: {myResult}</h2> */}
      <h2>Le resultat est de : {Math.floor(stateResult)}</h2>
    </div>
  );
}

export default App;
