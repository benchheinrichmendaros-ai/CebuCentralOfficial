import { useState, useEffect, useRef } from 'react';
import { Plane, ArrowRight, ExternalLink, MapPin } from 'lucide-react';
import PageHero from '../../components/PageHero';
import { flightRoutes } from '../../data/flights';
import styles from './TransportSub.module.css';

export default function Flights() {
  const [direction, setDirection] = useState('fromCebu');
  const [filter, setFilter] = useState('all');
  const [selectedId, setSelectedId] = useState(null);
  const resultsRef = useRef(null);

  const filtered = filter === 'all'
    ? flightRoutes
    : flightRoutes.filter((r) => r.type.toLowerCase().includes(filter));

  const selected = flightRoutes.find((r) => r.id === selectedId) || null;

  const handleSelect = (id) => {
    setSelectedId(id);
    setTimeout(() => {
      resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 80);
  };

  useEffect(() => { setSelectedId(null); }, [direction, filter]);

  return (
    <>
      <PageHero
        icon={Plane}
        eyebrow="Transportation › Flights"
        title="Flights from Cebu"
        subtitle="Select your destination to see airlines, fares, and booking links."
        accent="blue"
        parent={{ label: 'Transportation', to: '/transport' }}
      />

      <div className={styles.page}>
        <div className="container">

          {/* Direction toggle */}
          <div className={styles.dirToggle}>
            <button
              className={`${styles.dirBtn} ${direction === 'fromCebu' ? styles.dirBtnActive : ''}`}
              onClick={() => setDirection('fromCebu')}
            >
              ✈️ Leaving Cebu
            </button>
            <button
              className={`${styles.dirBtn} ${direction === 'toCebu' ? styles.dirBtnActive : ''}`}
              onClick={() => setDirection('toCebu')}
            >
              🏠 Flying to Cebu
            </button>
          </div>

          {/* Domestic / International filter */}
          <div className={styles.terminalTabs} style={{ marginBottom: '1.5rem' }}>
            {['all', 'domestic', 'international'].map((f) => (
              <button
                key={f}
                className={`${styles.terminalTab} ${filter === f ? styles.terminalTabActive : ''}`}
                onClick={() => setFilter(f)}
              >
                {f === 'all' ? 'All Routes' : f.charAt(0).toUpperCase() + f.slice(1)}
              </button>
            ))}
          </div>

          {/* Destination grid */}
          <div className={styles.routeGrid}>
            {filtered.map((route) => (
              <button
                key={route.id}
                className={`${styles.routeCard} ${selectedId === route.id ? styles.routeCardActive : ''}`}
                onClick={() => handleSelect(route.id)}
              >
                {route.popular && <span className={styles.popularBadge}>Popular</span>}
                <span className={styles.routeCardDest}>{route.destination}</span>
                <span className={styles.routeCardMeta}>
                  <span>{route.duration}</span>
                  <span>·</span>
                  <span>{route.type}</span>
                </span>
                <span className={styles.routeCardFare}>From {route.fareFrom}</span>
              </button>
            ))}
          </div>

          {!selected && (
            <div className={styles.selectPrompt}>
              <Plane size={20} />
              Pick a destination above to see airlines and booking links.
            </div>
          )}

          {selected && (
            <div className={styles.results} ref={resultsRef}>
              <div className={styles.resultsHeader}>
                <div className={styles.resultsRoute}>
                  <span>{direction === 'fromCebu' ? 'Cebu (MCIA)' : selected.destination}</span>
                  <ArrowRight size={18} className={styles.routeArrow} />
                  <span>{direction === 'fromCebu' ? selected.destination : 'Cebu (MCIA)'}</span>
                </div>
                <div className={styles.resultsMeta}>
                  <div className={styles.resultMetaItem}>
                    <span className={styles.resultMetaLabel}>Flight time</span>
                    <span className={styles.resultMetaVal}>{selected.duration}</span>
                  </div>
                  <div className={styles.resultMetaItem}>
                    <span className={styles.resultMetaLabel}>Fares from</span>
                    <span className={styles.resultMetaVal}>{selected.fareFrom}</span>
                  </div>
                  <div className={styles.resultMetaItem}>
                    <span className={styles.resultMetaLabel}>
                      {direction === 'fromCebu' ? 'Departure terminal' : 'Arrival terminal'}
                    </span>
                    <span className={styles.resultMetaVal}>
                      {direction === 'fromCebu'
                        ? selected.type === 'International' ? 'MCIA Terminal 2' : 'MCIA Terminal 1'
                        : selected.type === 'International' ? 'MCIA Terminal 2' : 'MCIA Terminal 1'
                      }
                    </span>
                  </div>
                </div>
              </div>

              <div className={styles.operatorGrid}>
                {selected.airlines.map((airline) => (
                  <div key={airline.name} className={styles.operatorCard}>
                    <div>
                      <p className={styles.operatorName}>{airline.name}</p>
                      <p className={styles.operatorType}>Code: {airline.code}</p>
                    </div>
                    <span className={styles.operatorFare}>From {airline.fareFrom}</span>
                    <a
                      href={airline.bookingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.bookBtn}
                    >
                      Book on {airline.name} <ExternalLink size={14} />
                    </a>
                  </div>
                ))}
              </div>

              <div className={styles.tipsSection}>
                <p className={styles.tipsTitle}>Tips for this route</p>
                <div className={styles.tipsList}>
                  {selected.tips[direction === 'fromCebu' ? 'fromCebu' : 'toCebu'].map((tip, i) => (
                    <div key={i} className={styles.tip}>
                      <span className={styles.tipDot} aria-hidden="true" />
                      {tip}
                    </div>
                  ))}
                </div>
                {selected.note && <p className={styles.routeNote}>{selected.note}</p>}
              </div>
            </div>
          )}

          <div className={styles.infoBox}>
            <p className={styles.infoBoxTitle}>📍 Mactan-Cebu International Airport (MCIA)</p>
            <div className={styles.tipsList}>
              {[
                'Located in Lapu-Lapu City — about 30–45 min from downtown Cebu City',
                'Terminal 1: Domestic flights — Terminal 2: International flights',
                'Grab, metered taxis, and MyBus available outside both terminals',
                'Arrive 2 hours early for domestic, 3 hours for international flights',
              ].map((t, i) => (
                <div key={i} className={styles.tip}>
                  <span className={styles.tipDot} aria-hidden="true" />
                  {t}
                </div>
              ))}
            </div>
            <a
              href="https://maps.google.com/?q=Mactan+Cebu+International+Airport"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.appLinkBtn}
              style={{ marginTop: '1rem', display: 'inline-flex' }}
            >
              <MapPin size={14} /> View MCIA on Google Maps
            </a>
          </div>

        </div>
      </div>
    </>
  );
}
