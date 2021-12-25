import "./Styles.scss";

import { useState } from "react";
import { Zoom, Fade } from "react-reveal";
import logo from "../Assets/ratp.png";

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
  const getAverage = (oneLevel, secondLevel, thirdLevel) => {
    const resultOfFirstLevel = oneLevel * 35;
    const resultOfSecondLevel = secondLevel * 50;
    const resultOfThirdLevel = thirdLevel * 60;

    return resultOfFirstLevel + resultOfSecondLevel + resultOfThirdLevel;
  };

  let myResult =
    getAverage(integerOf35, integerOf50, integerOf60) / integerParticipants;

  const handleResult = () => {
    setStateResult(myResult / state.numberOfParticipants);
  };

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const myCurrentDate = new Date().toLocaleDateString("fr-FR", options);

  return (
    <div className="App">
      <Zoom duration={1000}>
        <div className="logo">
          <img src={logo} alt="logo" className="logo-image" />
        </div>
      </Zoom>
      <div className="wrapper">
        <Fade left duration={2000}>
          <div className="inputData">
            <label className="inputData-label">
              <input
                type="number"
                value={state.numberOfParticipants}
                onChange={handleChange}
                name="numberOfParticipants"
                className="inputData-each"
              />
              <p className="inputData-text">NOMBRES DE PARTICIPANTS</p>
            </label>
          </div>
        </Fade>

        <Fade right duration={2000}>
          <div className="inputData">
            <label className="inputData-label">
              <input
                type="number"
                value={state.quittanceOf35}
                onChange={handleChange}
                name="quittanceOf35"
                className="inputData-each"
              />
              <p className="inputData-text">QUITTANCES DE 35 EUROS</p>
            </label>
          </div>
        </Fade>

        <Fade left duration={2000}>
          <div className="inputData">
            <label className="inputData-label">
              <input
                type="number"
                value={state.quittanceOf50}
                onChange={handleChange}
                name="quittanceOf50"
                className="inputData-each"
              />
              <p className="inputData-text">QUITTANCES DE 50 EUROS</p>
            </label>
          </div>
        </Fade>

        <Fade right duration={2000}>
          <div className="inputData">
            <label className="inputData-label">
              <input
                type="number"
                value={state.quittanceOf60}
                onChange={handleChange}
                name="quittanceOf60"
                className="inputData-each"
              />
              <p className="inputData-text">QUITTANCES DE 60 EUROS</p>
            </label>
          </div>
        </Fade>
        <a onClick={handleResult} className="result-button">
          LET'S GO
        </a>
        {!stateResult ? (
          ""
        ) : (
          <>
            {" "}
            <h2 className="result">
              Prime de{" "}
              <span className="result-number">{Math.floor(stateResult)}</span>{" "}
              euros pour la journée du {""}
              {myCurrentDate}.
            </h2>
          </>
        )}
      </div>
      <div className="footer">
        <p>Crée par ELISA Mathieu sur une idée de CALISTE Yohann</p>
      </div>
    </div>
  );
}

export default App;
