import React, { useState, useEffect, useContext, createContext } from "react";

const WeatherContext = createContext();
const API_BASE_URL = "https://api.openweathermap.org/data/2.5/forecast";
const API_KEY = "dfe3dd29e67afba442b682196ef9f20f";


export const WeatherProvider = ({ children }) => {
  const [data, setData] = useState(null);

  const fetchData = async (city = 'teresina') => {
    const API_URL = `${API_BASE_URL}?q=${city}&appid=${API_KEY}&units=metric&lang=pt`;

    try {
      const response = await fetch(API_URL);
      if (response.ok) {
        const result = await response.json();
        setData(result);
      } else {
        console.error("Erro ao buscar os dados:", response.statusText);
      }
    } catch (error) {
      console.error("Erro ao buscar os dados:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <WeatherContext.Provider value={{ data, fetchData }}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => {
  return useContext(WeatherContext);
};