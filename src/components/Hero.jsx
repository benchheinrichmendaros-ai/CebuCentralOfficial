import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, MapPin } from 'lucide-react';
import styles from './Hero.module.css';

const LAT = 10.3157;
const LON = 123.8854;

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

function useLiveTime() {
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-PH', {
        timeZone: 'Asia/Manila',
        hour: '2-digit',
        minute: '2-digit',
      }));
      setDate(now.toLocaleDateString('en-PH', {
        timeZone: 'Asia/Manila',
        weekday: 'short',
        month: 'short',
        day: 'numeric',
      }));
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return { time, date };
}

function useLiveWeather() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    async function fetchWeather() {
      try {
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${LAT}&longitude=${LON}&current=temperature_2m,weather_code&timezone=Asia%2FManila`;
        const res = await fetch(url);
        const data = await res.json();
        setWeather({
          tempC: Math.round(data.current.temperature_2m),
          condition: getCondition(data.current.weather_code),
        });
      } catch (err) {
        setWeather(null);
      }
    }
    fetchWeather();
  }, []);

  return weather;
}

export default function Hero() {
  const { time, date } = useLiveTime();
  const weather = useLiveWeather();

  return (
    <section className={styles.hero} aria-label="CebuCentral — Welcome">
      <div className={styles.orb1} aria-hidden="true" />
      <div className={styles.orb2} aria-hidden="true" />

      <div className={`container ${styles.inner}`}>
        <img
          src="/logoframe.png"
          alt="CebuCentral"
          style={{ height: '60px', width: 'auto', objectFit: 'contain' }}
        />
        <div className={styles.badge}>
          <MapPin size={13} strokeWidth={2.5} />
          Cebu, Philippines
        </div>

        <h1 className={styles.headline}>
          Your Cebu,
          <br />
          <span className={styles.headlineRed}>All in One Place.</span>
        </h1>

        <p className={styles.sub}>
          Transport routes, live weather, emergency contacts, and local
          guides — everything you need to navigate Cebu quickly and
          confidently.
        </p>

        <div className={styles.ctas}>
          <Link to="/transport" className={styles.btnPrimary}>
            Explore CebuCentral
            <ArrowRight size={18} />
          </Link>
          <Link to="/emergency" className={styles.btnGhost}>
            <Phone size={16} />
            Emergency: 911
          </Link>
        </div>

        <div className={styles.statsRow} aria-label="Quick status">
          <div className={styles.stat}>
            <span className={styles.statVal}>{time || '—'}</span>
            <span className={styles.statLabel}>{date || 'PST'}</span>
          </div>
          <div className={styles.statDivider} aria-hidden="true" />
          <div className={styles.stat}>
            <span className={styles.statVal}>{weather ? `${weather.tempC}°C` : '—'}</span>
            <span className={styles.statLabel}>
              Cebu City · {weather ? weather.condition : 'Loading...'}
            </span>
          </div>
          <div className={styles.statDivider} aria-hidden="true" />
          <div className={styles.stat}>
            <span className={`${styles.statVal} ${styles.statRed}`}>911</span>
            <span className={styles.statLabel}>Emergency hotline</span>
          </div>
        </div>
      </div>
    </section>
  );
}
