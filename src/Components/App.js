import { useState } from "react";
import "./Styles.scss";

function App() {
  const [state, setState] = useState({
    numberOfParticipants: "",
    quittanceOf35: "",
    quittanceOf50: "",
    quittanceOf60: "",
  });

  const handleChange = (evt) => {
    setState({
      ...state,
      [evt.target.name]: evt.target.value,
    });
  };

  console.log(state);

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
        Quittance de 35 euros
      </div>
      <div>
        <input
          type="number"
          value={state.quittanceOf50}
          onChange={handleChange}
          name="quittanceOf50"
        />
        Quittance de 50 euros
      </div>
      <div>
        <input
          type="number"
          value={state.quittanceOf60}
          onChange={handleChange}
          name="quittanceOf60"
        />
        Quittance de 60 euros
      </div>
    </div>
  );
}

export default App;
