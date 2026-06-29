import { useState, useEffect } from 'react';
import {
  Sun, Cloud, CloudSun, CloudRain, CloudDrizzle, CloudLightning,
  Droplets, Wind, Eye, Thermometer, ExternalLink, Info,
} from 'lucide-react';
import PageHero from '../components/PageHero';
import { seasonalInfo, weatherSources } from '../data/weather';
import styles from './Weather.module.css';

const API_KEY = import.meta.env.VITE_OPENWEATHERMAP_API_KEY;
const WEATHER_ICONS = { Sun, Cloud, CloudSun, CloudRain, CloudDrizzle, CloudLightning };
const DAY_NAMES = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

function getIconName(id) {
  if (id === 800) return 'Sun';
  if (id === 801 || id === 802) return 'CloudSun';
  if (id >= 803) return 'Cloud';
  if (id >= 500 && id < 600) return 'CloudRain';
  if (id >= 300 && id < 400) return 'CloudDrizzle';
  if (id >= 200 && id < 300) return 'CloudLightning';
  return 'Cloud';
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

function capitalize(str) {
  return str.replace(/\b\w/g, (c) => c.toUpperCase());
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
        const [curRes, foreRes] = await Promise.all([
          fetch(`https://api.openweathermap.org/data/2.5/weather?q=Cebu City,PH&units=metric&appid=${API_KEY}`),
          fetch(`https://api.openweathermap.org/data/2.5/forecast?q=Cebu City,PH&units=metric&appid=${API_KEY}`),
        ]);

        const curData = await curRes.json();
        const foreData = await foreRes.json();

        // Map current weather
        setCurrent({
          location: `${curData.name}, PH`,
          tempC: Math.round(curData.main.temp),
          feelsLikeC: Math.round(curData.main.feels_like),
          condition: capitalize(curData.weather[0].description),
          conditionIcon: getIconName(curData.weather[0].id),
          humidity: curData.main.humidity,
          windKph: Math.round(curData.wind.speed * 3.6),
          visibility: `${(curData.visibility / 1000).toFixed(1)} km`,
          rainChancePercent: Math.round((foreData.list[0]?.pop || 0) * 100),
        });

        // Group forecast list by day
        const days = {};
        foreData.list.forEach((item) => {
          const date = new Date(item.dt * 1000);
          const key = date.toDateString();
          if (!days[key]) days[key] = { items: [], date };
          days[key].items.push(item);
        });

        const forecastDays = Object.values(days).slice(0, 5).map(({ items, date }) => {
          const mid = items.reduce((best, item) => {
            const h = new Date(item.dt * 1000).getHours();
            const bh = new Date(best.dt * 1000).getHours();
            return Math.abs(h - 12) < Math.abs(bh - 12) ? item : best;
          });
          const temps = items.map((i) => i.main.temp);
          return {
            day: DAY_NAMES[date.getDay()],
            icon: getIconName(mid.weather[0].id),
            condition: capitalize(mid.weather[0].description),
            high: Math.round(Math.max(...temps)),
            low: Math.round(Math.min(...temps)),
            rain: Math.round((mid.pop || 0) * 100),
          };
        });

        setForecast(forecastDays);
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
              {/* Current conditions */}
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

              {/* 5-day forecast */}
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

          {/* Seasonal info */}
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

          {/* Sources */}
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
