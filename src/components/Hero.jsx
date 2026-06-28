import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, ImageIcon, MapPin } from 'lucide-react';
import styles from './Hero.module.css';

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

export default function Hero() {
  const { time, date } = useLiveTime();

  return (
    <section className={styles.hero} aria-label="CebuCentral — Welcome">
      {/* Background orbs */}
      <div className={styles.orb1} aria-hidden="true" />
      <div className={styles.orb2} aria-hidden="true" />

      <div className={`container ${styles.inner}`}>
        {/* Logo placeholder */}
        <div className={styles.logoWrap} aria-hidden="true">
          <public/logoframe.png size={20} strokeWidth={1.5} />
          <span>public/logoframe.png</span>
        </div>

        {/* Badge */}
        <div className={styles.badge}>
          <MapPin size={13} strokeWidth={2.5} />
          Cebu, Philippines
        </div>

        {/* Headline */}
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

        {/* CTAs */}
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

        {/* Floating stat strip */}
        <div className={styles.statsRow} aria-label="Quick status">
          <div className={styles.stat}>
            <span className={styles.statVal}>{time || '—'}</span>
            <span className={styles.statLabel}>{date || 'PST'}</span>
          </div>
          <div className={styles.statDivider} aria-hidden="true" />
          <div className={styles.stat}>
            <span className={styles.statVal}>30°C</span>
            <span className={styles.statLabel}>Cebu City · Partly Cloudy</span>
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
