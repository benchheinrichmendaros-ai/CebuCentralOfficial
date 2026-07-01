import { MapPin, Compass, Heart, ShieldCheck, Clock } from 'lucide-react';
import PageHero from '../components/PageHero';
import styles from './About.module.css';

const OFFERINGS = [
  { title: 'Transportation', desc: 'Ferry, flight, taxi, bus, jeepney, and habal-habal info with real operator and booking links.' },
  { title: 'Live Weather', desc: 'Current conditions and forecast for Cebu City, pulled from a live weather service.' },
  { title: 'Emergency Contacts', desc: 'Police, fire, hospitals, and disaster response numbers when it matters most.' },
  { title: 'Before You Go', desc: 'A quick checklist to help you prepare before heading out anywhere in Cebu.' },
  { title: 'Local News', desc: 'A curated feed of Cebu and Philippine headlines from trusted news outlets.' },
];

const VALUES = [
  { icon: Heart, title: 'Free, always', desc: 'CebuCentral is free to use and always will be. No paywalls, no accounts required.' },
  { icon: Compass, title: 'Locally focused', desc: 'Built specifically for Cebu — not a generic template repurposed for every city.' },
  { icon: Clock, title: 'Kept up to date', desc: 'Weather is live. Transport and emergency info is reviewed and updated regularly.' },
];

export default function About() {
  return (
    <>
      <PageHero
        icon={MapPin}
        eyebrow="Our Story"
        title="About CebuCentral"
        subtitle="A free, independent resource hub built for the people who live in, commute through, and visit Cebu."
        accent="blue"
      />

      <div className={styles.page}>
        <div className="container">

          <section className={styles.section}>
            <p className={styles.lead}>
              CebuCentral started from a simple frustration: information about getting
              around Cebu — ferry schedules, weather updates, emergency numbers — is
              scattered across dozens of government pages, Facebook groups, and outdated
              PDFs. CebuCentral brings the essentials into one simple, mobile-friendly
              place.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>What we offer</h2>
            <div className={styles.offerGrid}>
              {OFFERINGS.map((item) => (
                <div key={item.title} className={styles.offerCard}>
                  <h3 className={styles.offerTitle}>{item.title}</h3>
                  <p className={styles.offerDesc}>{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>What we stand for</h2>
            <div className={styles.valuesRow}>
              {VALUES.map(({ icon: Icon, title, desc }) => (
                <div key={title} className={styles.valueCard}>
                  <Icon size={22} className={styles.valueIcon} />
                  <h3 className={styles.valueTitle}>{title}</h3>
                  <p className={styles.valueDesc}>{desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className={styles.disclaimerBox}>
            <ShieldCheck size={20} className={styles.disclaimerIcon} />
            <div>
              <h3 className={styles.disclaimerTitle}>Independent project</h3>
              <p className={styles.disclaimerText}>
                CebuCentral is an independent, community-built resource. It is not
                officially affiliated with the Cebu City Government, the Province of
                Cebu, PAGASA, DOTr, or any transport operator listed on this site. Info
                is compiled from public and official sources for convenience — for
                critical decisions (severe weather, official schedules, emergencies),
                always confirm with the relevant official channel.
              </p>
            </div>
          </section>

        </div>
      </div>
    </>
  );
}
