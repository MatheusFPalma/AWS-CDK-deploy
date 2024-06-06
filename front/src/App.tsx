import React from 'react';
import './App.css';
import RegisterVehicle from './components/RegisterVehicle';
import VehicleList from './components/VehicleList';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Facilita Fleet Management</h1>
      <RegisterVehicle />
      <VehicleList />
    </div>
  );
};

export default App;