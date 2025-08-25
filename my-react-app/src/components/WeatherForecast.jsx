import React from 'react';

const WeatherForecast = ({ data }) => {
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
      weekday: 'short',
      month: 'short',
      day: 'numeric',
    });
  };

  // Group forecast data by day and get the forecast for noon each day
  const getDailyForecast = () => {
    const dailyData = {};
    
    data.list.forEach(item => {
      const date = new Date(item.dt * 1000).toDateString();
      const hour = new Date(item.dt * 1000).getHours();
      
      // Get forecast for around noon (12-14 hours)
      if (hour >= 12 && hour <= 14) {
        dailyData[date] = item;
      }
    });
    
    return Object.values(dailyData).slice(0, 5); // Get 5 days
  };

  const dailyForecast = getDailyForecast();

  return (
    <div className="weather-forecast">
      <h2>5-Day Forecast</h2>
      <div className="forecast-container">
        {dailyForecast.map((day, index) => (
          <div key={index} className="forecast-card">
            <div className="forecast-date">
              {formatDate(day.dt)}
            </div>
            <div className="forecast-icon">
              {getWeatherIcon(day.weather[0].id)}
            </div>
            <div className="forecast-temp">
              <span className="max-temp">{Math.round(day.main.temp_max)}°</span>
              <span className="min-temp">{Math.round(day.main.temp_min)}°</span>
            </div>
            <div className="forecast-description">
              {day.weather[0].description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherForecast;
