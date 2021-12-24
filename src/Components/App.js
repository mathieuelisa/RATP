import { useState } from "react";
import "./Styles.scss";
import logo from "../Assets/ratp.png";
import { Zoom, Fade } from "react-reveal";

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
    let resultOfFirstLevel = oneLevel * 35;
    let resultOfSecondLevel = secondLevel * 50;
    let resultOfThirdLevel = thirdLevel * 60;

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
  console.log(myCurrentDate);

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
              <p className="inputData-text">Nombre de participants</p>
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
              <p className="inputData-text"> Quittances de 35 euros</p>
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
              <p className="inputData-text"> Quittances de 50 euros</p>
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
              <p className="inputData-text"> Quittances de 60 euros</p>
            </label>
          </div>
        </Fade>
        <button onClick={handleResult} className="result-button">
          LET'S GO
        </button>
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
    </div>
  );
}

export default App;
