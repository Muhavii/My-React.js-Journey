import { useState, useEffect } from 'react';
import './App.css';
import WeatherHeader from './components/WeatherHeader';
import SearchBar from './components/SearchBar';
import CurrentWeather from './components/CurrentWeather';
import WeatherForecast from './components/WeatherForecast';
import LoadingSpinner from './components/LoadingSpinner';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [location, setLocation] = useState('London'); // Default location

  const API_KEY = '24386924b23d7e6b88d5573f2a1d3fe3'; // You'll need to get this from OpenWeatherMap
  const BASE_URL = 'https://api.openweathermap.org/data/2.5';

  const fetchWeatherData = async (city) => {
    setLoading(true);
    setError(null);
    
    try {
      // Fetch current weather
      const weatherResponse = await fetch(
        `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      
      if (!weatherResponse.ok) {
        throw new Error('City not found');
      }
      
      const weather = await weatherResponse.json();
      setWeatherData(weather);

      // Fetch 5-day forecast
      const forecastResponse = await fetch(
        `${BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric`
      );
      
      if (forecastResponse.ok) {
        const forecast = await forecastResponse.json();
        setForecastData(forecast);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeatherData(location);
  }, []);

  const handleSearch = (searchTerm) => {
    setLocation(searchTerm);
    fetchWeatherData(searchTerm);
  };

  return (
    <div className="weather-app">
      <WeatherHeader />
      <main className="weather-main">
        <SearchBar onSearch={handleSearch} />
        
        {loading && <LoadingSpinner />}
        
        {error && (
          <div className="error-message">
            <p>❌ {error}</p>
            <p>Please try searching for a different city.</p>
          </div>
        )}
        
        {weatherData && !loading && (
          <CurrentWeather data={weatherData} />
        )}
        
        {forecastData && !loading && (
          <WeatherForecast data={forecastData} />
        )}
      </main>
    </div>
  );
}

export default App;
