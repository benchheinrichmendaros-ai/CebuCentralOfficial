import { useState, useEffect, useRef } from 'react';
import { Ship, ArrowRight, ExternalLink, MapPin } from 'lucide-react';
import PageHero from '../../components/PageHero';
import { ferryRoutes } from '../../data/ferry';
import styles from './TransportSub.module.css';

export default function Ferry() {
  const [direction, setDirection] = useState('fromCebu');
  const [selectedId, setSelectedId] = useState(null);
  const resultsRef = useRef(null);

  const selected = ferryRoutes.find((r) => r.id === selectedId) || null;

  const handleSelect = (id) => {
    setSelectedId(id);
    setTimeout(() => {
      resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 80);
  };

  // Reset selection when direction changes
  useEffect(() => { setSelectedId(null); }, [direction]);

  const from = direction === 'fromCebu' ? 'Cebu' : selected?.destination || 'Destination';
  const to   = direction === 'fromCebu' ? selected?.destination || 'Destination' : 'Cebu';

  return (
    <>
      <PageHero
        icon={Ship}
        eyebrow="Transportation › Ferry"
        title="Ferry & Boat Routes"
        subtitle="Select your direction and destination to see operators and booking links."
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
              🚢 Leaving Cebu
            </button>
            <button
              className={`${styles.dirBtn} ${direction === 'toCebu' ? styles.dirBtnActive : ''}`}
              onClick={() => setDirection('toCebu')}
            >
              🏠 Coming to Cebu
            </button>
          </div>

          {/* Destination grid */}
          <div className={styles.routeGrid}>
            {ferryRoutes.map((route) => (
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
                  <span>{route.category}</span>
                </span>
                <span className={styles.routeCardFare}>{route.fareRange}</span>
              </button>
            ))}
          </div>

          {/* Prompt */}
          {!selected && (
            <div className={styles.selectPrompt}>
              <Ship size={20} />
              Pick a destination above to see available ferry operators and booking links.
            </div>
          )}

          {/* Results */}
          {selected && (
            <div className={styles.results} ref={resultsRef}>
              <div className={styles.resultsHeader}>
                <div className={styles.resultsRoute}>
                  <span>{direction === 'fromCebu' ? 'Cebu' : selected.destination}</span>
                  <ArrowRight size={18} className={styles.routeArrow} />
                  <span>{direction === 'fromCebu' ? selected.destination : 'Cebu'}</span>
                </div>
                <div className={styles.resultsMeta}>
                  <div className={styles.resultMetaItem}>
                    <span className={styles.resultMetaLabel}>Duration</span>
                    <span className={styles.resultMetaVal}>{selected.duration}</span>
                  </div>
                  <div className={styles.resultMetaItem}>
                    <span className={styles.resultMetaLabel}>Fare from</span>
                    <span className={styles.resultMetaVal}>{selected.fareRange}</span>
                  </div>
                  <div className={styles.resultMetaItem}>
                    <span className={styles.resultMetaLabel}>
                      {direction === 'fromCebu' ? 'Departs from' : 'Departs from'}
                    </span>
                    <span className={styles.resultMetaVal}>
                      {direction === 'fromCebu' ? 'Pier 1, Cebu Port' : selected.port}
                    </span>
                  </div>
                </div>
              </div>

              {/* Operators */}
              <div className={styles.operatorGrid}>
                {selected.operators.map((op) => (
                  <div key={op.name} className={styles.operatorCard}>
                    <div>
                      <p className={styles.operatorName}>{op.name}</p>
                      <p className={styles.operatorType}>{op.type}</p>
                    </div>
                    <div className={styles.operatorDetails}>
                      <span className={styles.operatorDetail}>⏱ {op.duration}</span>
                      <span className={styles.operatorFare}>From {op.fareFrom}</span>
                    </div>
                    <a
                      href={op.bookingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.bookBtn}
                    >
                      Book with {op.name} <ExternalLink size={14} />
                    </a>
                  </div>
                ))}
              </div>

              {/* Tips */}
              <div className={styles.tipsSection}>
                <p className={styles.tipsTitle}>Tips for this route</p>
                <div className={styles.tipsList}>
                  {selected.tips[direction].map((tip, i) => (
                    <div key={i} className={styles.tip}>
                      <span className={styles.tipDot} aria-hidden="true" />
                      {tip}
                    </div>
                  ))}
                </div>
                {selected.note && (
                  <p className={styles.routeNote}>{selected.note}</p>
                )}
              </div>
            </div>
          )}

          {/* Info box */}
          <div className={styles.infoBox}>
            <p className={styles.infoBoxTitle}>📍 Cebu City Port Location</p>
            <div className={styles.tipsList}>
              {[
                'Pier 1–4 are all within the same port area in downtown Cebu City',
                'Take a Grab or metered taxi from anywhere in Cebu City (15–25 min)',
                'Terminal fees of ₱20–₱30 are paid at the port entrance, separate from your ticket',
              ].map((t, i) => (
                <div key={i} className={styles.tip}>
                  <span className={styles.tipDot} aria-hidden="true" />
                  {t}
                </div>
              ))}
            </div>
            <a
              href="https://maps.google.com/?q=Cebu+City+Port+Pier"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.appLinkBtn}
              style={{ marginTop: '1rem', display: 'inline-flex' }}
            >
              <MapPin size={14} /> View port on Google Maps
            </a>
          </div>

        </div>
      </div>
    </>
  );
}
