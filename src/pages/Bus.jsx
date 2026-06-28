import { useState } from 'react';
import { Bus, Clock, MapPin, ExternalLink } from 'lucide-react';
import PageHero from '../../components/PageHero';
import { busTerminals, busTips } from '../../data/bus';
import styles from './TransportSub.module.css';

export default function BusPage() {
  const [terminal, setTerminal] = useState('south');
  const current = busTerminals[terminal];

  return (
    <>
      <PageHero
        icon={Bus}
        eyebrow="Transportation › Bus"
        title="Provincial Buses"
        subtitle="Routes across Cebu Island from North and South bus terminals."
        accent="blue"
        parent={{ label: 'Transportation', to: '/transport' }}
      />

      <div className={styles.page}>
        <div className="container">

          {/* Terminal selector */}
          <div className={styles.terminalTabs}>
            <button
              className={`${styles.terminalTab} ${terminal === 'south' ? styles.terminalTabActive : ''}`}
              onClick={() => setTerminal('south')}
            >
              🚌 South Bus Terminal
            </button>
            <button
              className={`${styles.terminalTab} ${terminal === 'north' ? styles.terminalTabActive : ''}`}
              onClick={() => setTerminal('north')}
            >
              🚌 North Bus Terminal
            </button>
          </div>

          {/* Terminal info */}
          <div className={styles.infoBox} style={{ marginBottom: '1.5rem' }}>
            <p className={styles.infoBoxTitle}>📍 {current.name}</p>
            <div className={styles.tipsList}>
              <div className={styles.tip}>
                <span className={styles.tipDot} aria-hidden="true" />
                {current.address}
              </div>
              <div className={styles.tip}>
                <span className={styles.tipDot} aria-hidden="true" />
                {current.tip}
              </div>
            </div>
            <a
              href={current.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.appLinkBtn}
              style={{ marginTop: '1rem', display: 'inline-flex' }}
            >
              <MapPin size={14} /> View on Google Maps <ExternalLink size={12} />
            </a>
          </div>

          {/* Routes list */}
          <div className={styles.busRouteList}>
            {current.routes.map((route) => (
              <div key={route.id} className={styles.busRoute}>
                <div>
                  <p className={styles.busRouteDest}>{route.destination}</p>
                  <div className={styles.busRouteMeta}>
                    <span className={styles.busMetaItem}><Clock size={13} /> {route.duration}</span>
                    <span className={styles.busMetaItem}>🚌 {route.type}</span>
                  </div>
                  {route.note && <p className={styles.busRouteNote}>{route.note}</p>}
                </div>
                <p className={styles.busFare}>{route.fare}</p>
              </div>
            ))}
          </div>

          {/* General tips */}
          <div className={styles.infoBox}>
            <p className={styles.infoBoxTitle}>Bus tips</p>
            <div className={styles.tipsList}>
              {busTips.map((tip, i) => (
                <div key={i} className={styles.tip}>
                  <span className={styles.tipDot} aria-hidden="true" />
                  {tip}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
