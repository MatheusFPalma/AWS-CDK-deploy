import React, { useState } from 'react';
import axios from 'axios';

const RegisterVehicle: React.FC = () => {
  const [vehicleId, setVehicleId] = useState('');
  const [location, setLocation] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await axios.post('https://1x6r9xb8vl.execute-api.us-east-1.amazonaws.com/prod/vehicle', {
        vehicleId,
        data: { location, status }
      });
      alert(response.data.message);
    } catch (error) {
      alert('Erro ao registrar o veículo');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>ID do Veículo:</label>
        <input type="text" value={vehicleId} onChange={(e) => setVehicleId(e.target.value)} required />
      </div>
      <div>
        <label>Localização:</label>
        <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} required />
      </div>
      <div>
        <label>Status:</label>
        <input type="text" value={status} onChange={(e) => setStatus(e.target.value)} required />
      </div>
      <button type="submit">Registrar Veículo</button>
    </form>
  );
};

export default RegisterVehicle;