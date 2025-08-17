import React, { useState } from 'react';

const ValveLog = () => {
  const [log, setLog] = useState({
    valveName: '',
    operation: 'Open',
    breakoutTorque: '',
    runningTorque: '',
    makeupTorque: '',
    numberOfTurns: ''
  });

  const handleChange = (e) => {
    setLog({ ...log, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', log);
    alert('Valve operation logged.');
  };

  return (
    <div style={{ flex: 1, padding: '2rem' }}>
      <h2>Valve Operation Log</h2>
      <form onSubmit={handleSubmit}>
        <input name="valveName" placeholder="Valve Name" onChange={handleChange} /><br />
        <select name="operation" onChange={handleChange}>
          <option>Open</option>
          <option>Close</option>
        </select><br />
        <input name="breakoutTorque" placeholder="Break-out Torque" onChange={handleChange} /><br />
        <input name="runningTorque" placeholder="Running Torque" onChange={handleChange} /><br />
        <input name="makeupTorque" placeholder="Make-up Torque" onChange={handleChange} /><br />
        <input name="numberOfTurns" placeholder="Number of Turns" onChange={handleChange} /><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ValveLog;