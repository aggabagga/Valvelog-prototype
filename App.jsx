import React from 'react';
import Sidebar from './Sidebar';
import ValveLog from './ValveLog';

const App = () => {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <Sidebar />
      <ValveLog />
    </div>
  );
};

export default App;