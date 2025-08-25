# 🌤️ Weather Dashboard

A beautiful and responsive weather dashboard built with React that displays current weather and 5-day forecast for any city.

## ✨ Features

- **Current Weather Display**: Shows temperature, weather description, humidity, wind speed, and pressure
- **5-Day Forecast**: Displays daily weather predictions with high/low temperatures
- **City Search**: Search for weather information by city name
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Beautiful UI**: Modern glassmorphism design with smooth animations
- **Weather Icons**: Visual weather representation using emojis
- **Error Handling**: User-friendly error messages for invalid searches

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone or download this project
2. Navigate to the project directory:
   ```bash
   cd my-react-app
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

### Setting up the API Key

This project uses the OpenWeatherMap API. You'll need to get a free API key:

1. Go to [OpenWeatherMap](https://openweathermap.org/)
2. Sign up for a free account
3. Navigate to your API keys section
4. Copy your API key
5. Open `src/App.jsx`
6. Replace `'YOUR_API_KEY'` with your actual API key:
   ```javascript
   const API_KEY = 'your_actual_api_key_here';
   ```

### Running the Application

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Open your browser and navigate to `http://localhost:5173`

3. Start searching for cities to see the weather information!

## 🛠️ Technologies Used

- **React 19** - Modern React with hooks
- **Vite** - Fast build tool and development server
- **CSS3** - Modern styling with glassmorphism effects
- **OpenWeatherMap API** - Weather data provider

## 📱 Features in Detail

### Current Weather Section
- City name and country
- Current date and time
- Temperature in Celsius
- Weather description
- "Feels like" temperature
- Humidity percentage
- Wind speed in m/s
- Atmospheric pressure

### 5-Day Forecast
- Daily weather predictions
- High and low temperatures
- Weather icons for each day
- Weather descriptions

### Search Functionality
- Search by city name
- Real-time API calls
- Error handling for invalid cities
- Loading states

## 🎨 Design Features

- **Glassmorphism Design**: Modern glass-like effects with backdrop blur
- **Gradient Background**: Beautiful purple-blue gradient
- **Responsive Grid**: Adapts to different screen sizes
- **Smooth Animations**: Hover effects and transitions
- **Color-coded Temperatures**: Red for high temps, blue for low temps

## 🔧 Customization

You can easily customize the weather dashboard:

### Changing the Default City
Edit the `location` state in `App.jsx`:
```javascript
const [location, setLocation] = useState('Your City');
```

### Modifying Colors
Update the CSS variables in `App.css` to change the color scheme.

### Adding More Weather Data
The OpenWeatherMap API provides additional data like UV index, visibility, etc. You can extend the components to display more information.

## 📝 API Information

This project uses the OpenWeatherMap API:
- **Current Weather**: `https://api.openweathermap.org/data/2.5/weather`
- **5-Day Forecast**: `https://api.openweathermap.org/data/2.5/forecast`
- **Units**: Metric (Celsius)
- **Rate Limit**: 1000 calls/day for free tier

## Sample Screenshot

![App Screenshot](public/screenshot.png)

## 🤝 Contributing

Feel free to contribute to this project by:
- Adding new features
- Improving the design
- Fixing bugs
- Adding more weather data points

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- OpenWeatherMap for providing the weather API
- React team for the amazing framework
- Vite for the fast development experience

---

**Happy coding! 🌟**
