import React, { useState, useEffect } from "react";
import axios from "axios";

const RandomApi = () => {
  const [vehicle, setVehicle] = useState({});
  const API = "https://random-data-api.com/api/vehicle/random_vehicle";

  useEffect(() => {
    const fetchVehicle = async () => {
      try {
        const response = await axios.get(API);
        setVehicle(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchVehicle();
  }, []);

  return (
    <div>
      <h1>Random API - vehicle</h1>
      <h2>{vehicle.make_and_model}</h2>
    </div>
  );
};

export default RandomApi;
