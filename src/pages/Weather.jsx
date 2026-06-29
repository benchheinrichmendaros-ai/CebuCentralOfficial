import {
  Sun, Cloud, CloudSun, CloudRain, CloudDrizzle, CloudLightning,
  Droplets, Wind, Eye, Thermometer, ExternalLink, Info,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import PageHero from '../components/PageHero';
import { seasonalInfo, weatherSources } from '../data/weather';
import styles from './Weather.module.css';

const WEATHER_ICONS = { Sun, Cloud, CloudSun, CloudRain, CloudDrizzle, CloudLightning };

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
  const [currentWeather, setCurrentWeather] = useState(null);
const [weekForecast, setWeekForecast] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState('');
  useEffect(() => {
  async function loadWeather() {
    try {
      const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

      const [currentRes, forecastRes] = await Promise.all([
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=Cebu,PH&units=metric&appid=${apiKey}`),
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=Cebu,PH&units=metric&appid=${apiKey}`),
      ]);

      if (!currentRes.ok || !forecastRes.ok) {
        throw new Error('Weather request failed');
      }

      const currentData = await currentRes.json();
      const forecastData = await forecastRes.json();

      setCurrentWeather({
        location: `${currentData.name}, Philippines`,
        condition: currentData.weather?.[0]?.description ?? 'Unknown',
        conditionIcon: 'CloudSun',
        tempC: Math.round(currentData.main.temp),
        feelsLikeC: Math.round(currentData.main.feels_like),
        humidity: currentData.main.humidity,
        rainChancePercent: Math.round((forecastData.list?.[0]?.pop || 0) * 100),
        windKph: Math.round((currentData.wind?.speed || 0) * 3.6),
        uvIndex: 0,
        uvLabel: 'N/A',
        visibility: currentData.visibility
          ? `${Math.round(currentData.visibility / 1000)} km`
          : 'N/A',
      });

      const days = [];
      const seen = new Set();

      for (const item of forecastData.list || []) {
        const date = new Date(item.dt * 1000);
        const day = date.toLocaleDateString('en-US', { weekday: 'short' });
        const hour = date.getHours();

        if (!seen.has(day) && hour >= 11 && hour <= 13) {
          seen.add(day);
          days.push({
            day,
            condition: item.weather?.[0]?.main ?? 'Unknown',
            icon: 'CloudSun',
            high: Math.round(item.main.temp_max),
            low: Math.round(item.main.temp_min),
            rain: Math.round((item.pop || 0) * 100),
          });
        }
      }

      setWeekForecast(days.slice(0, 7));
    } catch (err) {
      setError(err.message || 'Failed to load weather');
    } finally {
      setLoading(false);
    }
  }

  loadWeather();
}, []);
  
if (loading) {
  return (
    <>
      <PageHero
        icon={Cloud}
        eyebrow="Conditions"
        title="Cebu Weather"
        subtitle="Current conditions and a 7-day outlook. Always check PAGASA for official forecasts."
        accent="blue"
      />
      <div className={styles.page}>
        <div className="container">Loading weather...</div>
      </div>
    </>
  );
}

if (error) {
  return (
    <>
      <PageHero
        icon={Cloud}
        eyebrow="Conditions"
        title="Cebu Weather"
        subtitle="Current conditions and a 7-day outlook. Always check PAGASA for official forecasts."
        accent="blue"
      />
      <div className={styles.page}>
        <div className="container">{error}</div>
      </div>
    </>
  );
      }
  return (
    <>
      <PageHero
        icon={Cloud}
        eyebrow="Conditions"
        title="Cebu Weather"
        subtitle="Current conditions and a 7-day outlook. Always check PAGASA for official forecasts."
        accent="blue"
      />

      <div className={styles.page}>
        <div className="container">


          {/* Current conditions */}
          <div className={styles.currentCard}>
            <div className={styles.currentLeft}>
              <div className={styles.currentIconWrap}>
                <WeatherIcon name={currentWeather.conditionIcon} size={60} className={styles.currentIcon} />
              </div>
              <div>
                <p className={styles.currentLocation}>{currentWeather.location}</p>
                <p className={styles.currentTemp}>{currentWeather.tempC}°C</p>
                <p className={styles.currentCondition}>{currentWeather.condition}</p>
                <p className={styles.feelsLike}>Feels like {currentWeather.feelsLikeC}°C</p>
              </div>
            </div>

            <div className={styles.currentStats}>
              {[
                { Icon: Droplets,    val: `${currentWeather.humidity}%`,              label: 'Humidity' },
                { Icon: CloudRain,   val: `${currentWeather.rainChancePercent}%`,     label: 'Rain chance' },
                { Icon: Wind,        val: `${currentWeather.windKph} kph`,            label: 'Wind speed' },
                { Icon: Thermometer, val: currentWeather.uvLabel,                     label: `UV index (${currentWeather.uvIndex})` },
                { Icon: Eye,         val: currentWeather.visibility,                  label: 'Visibility' },
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

          {/* 7-day forecast */}
          <h2 className={styles.forecastTitle}>7-Day Forecast</h2>
          <div className={styles.forecastGrid}>
            {weekForecast.map((day) => (
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
