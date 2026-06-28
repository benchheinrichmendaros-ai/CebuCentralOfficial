import { Link } from 'react-router-dom';
import { Plane, Ship, Car, Bus, Truck, Bike, ArrowRight } from 'lucide-react';
import PageHero from '../components/PageHero';
import styles from './Transport.module.css';

const MODES = [
  {
    to: '/transport/flights',
    icon: Plane,
    label: 'Flights',
    tag: 'Air Travel',
    tagColor: { bg: 'var(--blue-light)', color: 'var(--blue)' },
    desc: 'Domestic and international flights from Mactan-Cebu International Airport.',
    cta: 'View flights',
  },
  {
    to: '/transport/ferry',
    icon: Ship,
    label: 'Ferry & Boats',
    tag: 'Sea Travel',
    tagColor: { bg: 'var(--blue-light)', color: 'var(--blue)' },
    desc: 'Inter-island routes to Bohol, Leyte, Mindanao, Manila and more from Cebu Port.',
    cta: 'View routes',
  },
  {
    to: '/transport/taxi',
    icon: Car,
    label: 'Taxis & Ride-Hailing',
    tag: 'On-Demand',
    tagColor: { bg: 'var(--green-light)', color: 'var(--green)' },
    desc: 'Grab, Micab, and traditional metered taxis across Metro Cebu.',
    cta: 'View options',
  },
  {
    to: '/transport/bus',
    icon: Bus,
    label: 'Provincial Buses',
    tag: 'Island Routes',
    tagColor: { bg: 'var(--gold-tint)', color: 'var(--gold-dark)' },
    desc: 'North and South bus terminals serving towns and destinations across Cebu Island.',
    cta: 'View routes',
  },
  {
    to: '/transport/jeepney',
    icon: Truck,
    label: 'Jeepneys',
    tag: 'City Routes',
    tagColor: { bg: 'var(--purple-light)', color: 'var(--purple)' },
    desc: 'Modernized e-jeepneys covering dozens of routes through Cebu City.',
    cta: 'View guide',
  },
  {
    to: '/transport/habal',
    icon: Bike,
    label: 'Habal-Habal',
    tag: 'Moto-Taxi',
    tagColor: { bg: 'var(--orange-light)', color: 'var(--orange)' },
    desc: 'App-based moto-taxis (Angkas, Move It, JoyRide) and roadside habal-habal.',
    cta: 'View apps',
  },
];

export default function Transport() {
  return (
    <>
      <PageHero
        icon={Plane}
        eyebrow="Getting Around"
        title="Transportation in Cebu"
        subtitle="Choose your transport mode to see routes, operators, and booking links."
        accent="blue"
      />

      <div className={styles.page}>
        <div className="container">
          <div className={styles.grid}>
            {MODES.map((mode) => {
              const Icon = mode.icon;
              return (
                <Link key={mode.to} to={mode.to} className={styles.card}>
                  <div className={styles.cardTop}>
                    <div className={styles.iconWrap}>
                      <Icon size={24} strokeWidth={1.75} />
                    </div>
                    <span className={styles.tag} style={{ background: mode.tagColor.bg, color: mode.tagColor.color }}>
                      {mode.tag}
                    </span>
                  </div>
                  <div className={styles.cardBody}>
                    <h2 className={styles.cardLabel}>{mode.label}</h2>
                    <p className={styles.cardDesc}>{mode.desc}</p>
                  </div>
                  <div className={styles.cardCta}>
                    {mode.cta} <ArrowRight size={15} />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
