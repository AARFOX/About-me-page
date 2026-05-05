// DOM Elements
const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search-btn");
const weatherResult = document.querySelector("#weather-result");
const loadingEl = document.querySelector("#loading");
const errorMessage = document.querySelector("#error-message");
const errorText = document.querySelector("#error-text");
const recentList = document.querySelector("#recent-list");

// API Configuration
const API_BASE = "https://wttr.in/";

// Weather emoji mapping based on weather code
const weatherEmojis = {
    "113": "☀️", // Sunny
    "116": "⛅", // Partly cloudy
    "119": "☁️", // Cloudy
    "122": "☁️", // Overcast
    "143": "🌫️", // Mist
    "176": "🌦️", // Patchy rain
    "179": "🌨️", // Patchy snow
    "182": "🌨️", // Patchy sleet
    "185": "🌨️", // Patchy freezing drizzle
    "200": "⛈️", // Thunderstorm
    "227": "❄️", // Blowing snow
    "230": "❄️", // Blizzard
    "248": "🌫️", // Fog
    "260": "🌫️", // Freezing fog
    "263": "🌦️", // Patchy light drizzle
    "266": "🌧️", // Light drizzle
    "281": "🌧️", // Freezing drizzle
    "284": "🌧️", // Heavy freezing drizzle
    "293": "🌧️", // Patchy light rain
    "296": "🌧️", // Light rain
    "299": "🌧️", // Moderate rain
    "302": "🌧️", // Heavy rain
    "305": "🌧️", // Heavy rain
    "308": "🌧️", // Heavy rain
    "311": "🌧️", // Freezing rain
    "314": "🌧️", // Heavy freezing rain
    "317": "🌨️", // Sleet
    "320": "🌨️", // Heavy sleet
    "323": "🌨️", // Patchy snow
    "326": "🌨️", // Light snow
    "329": "🌨️", // Moderate snow
    "332": "🌨️", // Heavy snow
    "335": "🌨️", // Heavy snow
    "338": "🌨️", // Heavy snow
    "350": "🌨️", // Ice pellets
    "353": "🌧️", // Rain shower
    "356": "🌧️", // Heavy rain shower
    "359": "🌧️", // Torrential rain
    "362": "🌨️", // Sleet showers
    "365": "🌨️", // Heavy sleet showers
    "368": "🌨️", // Snow showers
    "371": "🌨️", // Heavy snow showers
    "374": "🌨️", // Ice pellets
    "377": "🌨️", // Heavy ice pellets
    "386": "⛈️", // Thunderstorm
    "389": "⛈️", // Thunderstorm with rain
    "392": "⛈️", // Thunderstorm with snow
    "395": "⛈️", // Heavy thunderstorm
};

/**
 * Gets the emoji for a weather code
 * @param {string} code - Weather code
 * @returns {string} - Emoji
 */
function getWeatherEmoji(code) {
    return weatherEmojis[code] || "🌡️";
}

/**
 * Fetches weather data for a city
 * @param {string} city - City name
 */
async function getWeather(city) {
    if (!city.trim()) {
        showError("Please enter a city name");
        return;
    }

    // Show loading, hide others
    showLoading(true);
    hideError();
    weatherResult.classList.add("hidden");

    try {
        // Build URL with format=j1 for JSON
        const url = `${API_BASE}${encodeURIComponent(city)}?format=j1`;

        // Fetch data
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Parse JSON
        const data = await response.json();

        // Check if we have valid data
        if (!data.current_condition || !data.current_condition[0]) {
            throw new Error("Invalid weather data");
        }

        // Display weather
        displayWeather(data, city);

        // Save to recent searches
        saveRecentSearch(city);

    } catch (error) {
        console.error("Error fetching weather:", error);
        showError(`Could not find weather for "${city}". Please try another city.`);
    } finally {
        showLoading(false);
    }
}

/**
 * Displays weather data on the page
 * @param {Object} data - Weather data from API
 * @param {string} city - City name
 */
function displayWeather(data, city) {
    const current = data.current_condition[0];
    const location = data.nearest_area[0];

    // Get weather details
    const tempC = current.temp_C;
    const tempF = current.temp_F;
    const description = current.weatherDesc[0].value;
    const humidity = current.humidity;
    const windSpeed = current.windspeedKmph;
    const windDir = current.winddir16Point;
    const feelsLike = current.FeelsLikeC;
    const visibility = current.visibility;
    const weatherCode = current.weatherCode;

    // Get area name (might be different from search)
    const areaName = location.areaName[0].value;
    const country = location.country[0].value;

    // Build HTML
    const html = `
        <div class="city-name">
            <span>${areaName}</span>
            <span class="country-flag">${getCountryFlag(country)}</span>
        </div>
        <p style="color: var(--text-secondary); margin-bottom: 20px;">${country}</p>

        <div class="weather-main">
            <div class="temperature">${tempC}°C</div>
            <div class="weather-icon">${getWeatherEmoji(weatherCode)}</div>
        </div>
        <p class="weather-condition">${description}</p>

        <div class="weather-details">
            <div class="detail-item">
                <p class="detail-label">Feels Like</p>
                <p class="detail-value">${feelsLike}°C</p>
            </div>
            <div class="detail-item">
                <p class="detail-label">Humidity</p>
                <p class="detail-value">${humidity}%</p>
            </div>
            <div class="detail-item">
                <p class="detail-label">Wind</p>
                <p class="detail-value">${windSpeed} km/h ${windDir}</p>
            </div>
            <div class="detail-item">
                <p class="detail-label">Visibility</p>
                <p class="detail-value">${visibility} km</p>
            </div>
        </div>
    `;

    weatherResult.innerHTML = html;
    weatherResult.classList.remove("hidden");
}

/**
 * Gets a country flag emoji from country name
 * @param {string} country - Country name
 * @returns {string} - Flag emoji or globe
 */
function getCountryFlag(country) {
    // Common country flags (simplified)
    const flags = {
        "Egypt": "🇪🇬",
        "United States": "🇺🇸",
        "United Kingdom": "🇬🇧",
        "Saudi Arabia": "🇸🇦",
        "United Arab Emirates": "🇦🇪",
        "France": "🇫🇷",
        "Germany": "🇩🇪",
        "Italy": "🇮🇹",
        "Spain": "🇪🇸",
        "Japan": "🇯🇵",
        "China": "🇨🇳",
        "India": "🇮🇳",
        "Brazil": "🇧🇷",
        "Canada": "🇨🇦",
        "Australia": "🇦🇺",
        "Russia": "🇷🇺",
        "Turkey": "🇹🇷",
    };
    return flags[country] || "🌍";
}

/**
 * Shows/hides loading state
 * @param {boolean} show - Whether to show loading
 */
function showLoading(show) {
    if (show) {
        loadingEl.classList.remove("hidden");
    } else {
        loadingEl.classList.add("hidden");
    }
}

/**
 * Shows an error message
 * @param {string} message - Error message
 */
function showError(message) {
    errorText.textContent = message;
    errorMessage.classList.remove("hidden");
    weatherResult.classList.add("hidden");
}

/**
 * Hides the error message
 */
function hideError() {
    errorMessage.classList.add("hidden");
}

/**
 * Saves a city to recent searches
 * @param {string} city - City name
 */
function saveRecentSearch(city) {
    let recent = getRecentSearches();

    // Remove if already exists
    recent = recent.filter(c => c.toLowerCase() !== city.toLowerCase());

    // Add to beginning
    recent.unshift(city);

    // Keep only last 5
    recent = recent.slice(0, 5);

    // Save to localStorage
    localStorage.setItem("recentWeatherSearches", JSON.stringify(recent));

    // Update display
    displayRecentSearches();
}

/**
 * Gets recent searches from localStorage
 * @returns {Array} - Array of city names
 */
function getRecentSearches() {
    const stored = localStorage.getItem("recentWeatherSearches");
    return stored ? JSON.parse(stored) : [];
}

/**
 * Displays recent searches
 */
function displayRecentSearches() {
    const recent = getRecentSearches();

    if (recent.length === 0) {
        recentList.innerHTML = '<p style="color: var(--text-secondary);">No recent searches</p>';
        return;
    }

    recentList.innerHTML = recent.map(city =>
        `<span class="recent-item" data-city="${city}">${city}</span>`
    ).join("");

    // Add click handlers
    document.querySelectorAll(".recent-item").forEach(item => {
        item.addEventListener("click", () => {
            const city = item.dataset.city;
            cityInput.value = city;
            getWeather(city);
        });
    });
}

/**
 * Initialize the app
 */
function init() {
    // Event listeners
    searchBtn.addEventListener("click", () => {
        getWeather(cityInput.value);
    });

    cityInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            getWeather(cityInput.value);
        }
    });

    // Display recent searches
    displayRecentSearches();

    // Focus input
    cityInput.focus();
}

// Start the app when DOM is ready
document.addEventListener("DOMContentLoaded", init);
