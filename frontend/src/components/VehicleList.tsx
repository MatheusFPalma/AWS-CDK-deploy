import React, { useState, useEffect } from 'react';
import axios from 'axios';

const VehicleList: React.FC = () => {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const response = await axios.get('https://1x6r9xb8vl.execute-api.us-east-1.amazonaws.com/prod/vehicle');
        setVehicles(response.data);
      } catch (error) {
        console.error('Erro ao buscar os veículos', error);
      }
    };

    fetchVehicles();
  }, []);

  return (
    <div>
      <h2>Veículos Registrados</h2>
      <ul>
        {vehicles.map((vehicle: any) => (
          <li key={vehicle.vehicleId}>
            {vehicle.vehicleId} - {vehicle.data.location} - {vehicle.data.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VehicleList;