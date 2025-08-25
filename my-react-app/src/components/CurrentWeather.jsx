import React from 'react';

const CurrentWeather = ({ data }) => {
  const getWeatherIcon = (weatherCode) => {
    const icons = {
      '01': '☀️', // clear sky
      '02': '⛅', // few clouds
      '03': '☁️', // scattered clouds
      '04': '☁️', // broken clouds
      '09': '🌧️', // shower rain
      '10': '🌦️', // rain
      '11': '⛈️', // thunderstorm
      '13': '🌨️', // snow
      '50': '🌫️', // mist
    };
    
    const code = weatherCode.toString().substring(0, 2);
    return icons[code] || '🌤️';
  };

  const formatDate = (timestamp) => {
    return new Date(timestamp * 1000).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="current-weather">
      <h2>Current Weather</h2>
      <div className="weather-card">
        <div className="weather-main">
          <div className="weather-icon">
            {getWeatherIcon(data.weather[0].id)}
          </div>
          <div className="weather-info">
            <h3>{data.name}, {data.sys.country}</h3>
            <p className="date">{formatDate(data.dt)}</p>
            <p className="temperature">{Math.round(data.main.temp)}°C</p>
            <p className="description">{data.weather[0].description}</p>
          </div>
        </div>
        
        <div className="weather-details">
          <div className="detail-item">
            <span className="label">Feels like:</span>
            <span className="value">{Math.round(data.main.feels_like)}°C</span>
          </div>
          <div className="detail-item">
            <span className="label">Humidity:</span>
            <span className="value">{data.main.humidity}%</span>
          </div>
          <div className="detail-item">
            <span className="label">Wind:</span>
            <span className="value">{Math.round(data.wind.speed)} m/s</span>
          </div>
          <div className="detail-item">
            <span className="label">Pressure:</span>
            <span className="value">{data.main.pressure} hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
