import { useState, useEffect } from 'react';
import {
  Sun, Cloud, CloudSun, CloudRain, CloudDrizzle, CloudLightning,
  Droplets, Wind, Eye, Thermometer, ExternalLink, Info,
} from 'lucide-react';
import PageHero from '../components/PageHero';
import { seasonalInfo, weatherSources } from '../data/weather';
import styles from './Weather.module.css';

const WEATHER_ICONS = { Sun, Cloud, CloudSun, CloudRain, CloudDrizzle, CloudLightning };
const DAY_NAMES = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const LAT = 10.3157;
const LON = 123.8854;

// Open-Meteo uses WMO weather codes
function getIconName(code) {
  if (code === 0) return 'Sun';
  if (code === 1 || code === 2) return 'CloudSun';
  if (code === 3) return 'Cloud';
  if (code >= 51 && code <= 67) return 'CloudDrizzle';
  if (code >= 80 && code <= 82) return 'CloudRain';
  if (code >= 95) return 'CloudLightning';
  if (code >= 61 && code <= 65) return 'CloudRain';
  return 'Cloud';
}

function getCondition(code) {
  const map = {
    0: 'Clear sky', 1: 'Mostly clear', 2: 'Partly cloudy', 3: 'Overcast',
    45: 'Foggy', 48: 'Foggy',
    51: 'Light drizzle', 53: 'Drizzle', 55: 'Heavy drizzle',
    61: 'Light rain', 63: 'Rain', 65: 'Heavy rain',
    80: 'Rain showers', 81: 'Rain showers', 82: 'Violent showers',
    95: 'Thunderstorm', 96: 'Thunderstorm w/ hail', 99: 'Severe thunderstorm',
  };
  return map[code] || 'Unknown';
}

function WeatherIcon({ name, size = 24, className = '' }) {
  const Icon = WEATHER_ICONS[name] || Cloud;
  return <Icon size={size} className={className} />;
}

function rainClass(pct) {
  if (pct >= 70) return styles.rainHigh;
  if (pct >= 40) return styles.rainMed;
  return styles.rainLow;
}

function getCurrentSeason() {
  const m = new Date().getMonth();
  return m >= 5 && m <= 9 ? 'Wet Season' : 'Dry Season';
}

export default function Weather() {
  const season = getCurrentSeason();
  const [current, setCurrent] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchWeather() {
      try {
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${LAT}&longitude=${LON}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m,visibility&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max&timezone=Asia%2FManila&forecast_days=6`;

        const res = await fetch(url);
        if (!res.ok) throw new Error('Network error');
        const data = await res.json();

        setCurrent({
          location: 'Cebu City, PH',
          tempC: Math.round(data.current.temperature_2m),
          feelsLikeC: Math.round(data.current.apparent_temperature),
          condition: getCondition(data.current.weather_code),
          conditionIcon: getIconName(data.current.weather_code),
          humidity: data.current.relative_humidity_2m,
          windKph: Math.round(data.current.wind_speed_10m),
          visibility: data.current.visibility
            ? `${(data.current.visibility / 1000).toFixed(1)} km`
            : 'N/A',
          rainChancePercent: data.daily.precipitation_probability_max[0] ?? 0,
        });

        const days = data.daily.time.slice(1, 6).map((dateStr, i) => {
          const idx = i + 1;
          const date = new Date(dateStr);
          return {
            day: DAY_NAMES[date.getDay()],
            icon: getIconName(data.daily.weather_code[idx]),
            condition: getCondition(data.daily.weather_code[idx]),
            high: Math.round(data.daily.temperature_2m_max[idx]),
            low: Math.round(data.daily.temperature_2m_min[idx]),
            rain: data.daily.precipitation_probability_max[idx] ?? 0,
          };
        });

        setForecast(days);
        setLoading(false);
      } catch (err) {
        setError('Could not load weather data. Please try again later.');
        setLoading(false);
      }
    }

    fetchWeather();
  }, []);

  return (
    <>
      <PageHero
        icon={Cloud}
        eyebrow="Conditions"
        title="Cebu Weather"
        subtitle="Live conditions and forecast. Always check PAGASA for official forecasts."
        accent="blue"
      />

      <div className={styles.page}>
        <div className="container">

          {loading && (
            <div className={styles.notice}>
              <Info size={15} />
              <span>Loading live weather data...</span>
            </div>
          )}

          {error && (
            <div className={styles.notice}>
              <Info size={15} />
              <span>{error}</span>
            </div>
          )}

          {current && (
            <>
              <div className={styles.currentCard}>
                <div className={styles.currentLeft}>
                  <div className={styles.currentIconWrap}>
                    <WeatherIcon name={current.conditionIcon} size={60} className={styles.currentIcon} />
                  </div>
                  <div>
                    <p className={styles.currentLocation}>{current.location}</p>
                    <p className={styles.currentTemp}>{current.tempC}°C</p>
                    <p className={styles.currentCondition}>{current.condition}</p>
                    <p className={styles.feelsLike}>Feels like {current.feelsLikeC}°C</p>
                  </div>
                </div>

                <div className={styles.currentStats}>
                  {[
                    { Icon: Droplets,    val: `${current.humidity}%`,              label: 'Humidity' },
                    { Icon: CloudRain,   val: `${current.rainChancePercent}%`,     label: 'Rain chance' },
                    { Icon: Wind,        val: `${current.windKph} kph`,            label: 'Wind speed' },
                    { Icon: Eye,         val: current.visibility,                  label: 'Visibility' },
                  ].map(({ Icon, val, label }) => (
                    <div key={label} className={styles.stat}>
                      <Icon size={16} className={styles.statIcon} />
                      <div>
                        <p className={styles.statVal}>{val}</p>
                        <p className={styles.statLabel}>{label}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {forecast.length > 0 && (
                <>
                  <h2 className={styles.forecastTitle}>5-Day Forecast</h2>
                  <div className={styles.forecastGrid}>
                    {forecast.map((day) => (
                      <div key={day.day} className={styles.forecastCard}>
                        <p className={styles.forecastDay}>{day.day}</p>
                        <WeatherIcon name={day.icon} size={32} className={styles.forecastIcon} />
                        <p className={styles.forecastCond}>{day.condition}</p>
                        <div className={styles.forecastTemps}>
                          <span className={styles.tempHigh}>{day.high}°</span>
                          <span className={styles.tempLow}>{day.low}°</span>
                        </div>
                        <span className={`${styles.rainBadge} ${rainClass(day.rain)}`}>
                          {day.rain}%
                        </span>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </>
          )}

          <div className={styles.seasonCard}>
            <div className={styles.seasonLeft}>
              <span className={styles.seasonBadge}>{season}</span>
              <p className={styles.seasonNote}>{seasonalInfo.seasonNote}</p>
            </div>
            <div className={styles.seasonStats}>
              <div className={styles.seasonStat}>
                <p className={styles.seasonStatLabel}>Dry season</p>
                <p className={styles.seasonStatVal}>{seasonalInfo.drySeasonMonths}</p>
              </div>
              <div className={styles.seasonStat}>
                <p className={styles.seasonStatLabel}>Wet season</p>
                <p className={styles.seasonStatVal}>{seasonalInfo.wetSeasonMonths}</p>
              </div>
              <div className={styles.seasonStat}>
                <p className={styles.seasonStatLabel}>Typhoon risk</p>
                <p className={`${styles.seasonStatVal} ${styles.typhoon}`}>{seasonalInfo.typhoonRisk}</p>
              </div>
            </div>
          </div>

          <div className={styles.sources}>
            <p className={styles.sourcesLabel}>Check live conditions at</p>
            <div className={styles.sourceLinks}>
              {weatherSources.map((s) => (
                <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" className={styles.sourceLink}>
                  {s.name} <ExternalLink size={13} />
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
