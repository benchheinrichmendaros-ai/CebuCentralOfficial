import { Mail, MessageSquare, Bug, Lightbulb, Handshake } from 'lucide-react';
import PageHero from '../components/PageHero';
import styles from './Contact.module.css';

const REASONS = [
  { icon: MessageSquare, text: 'Report outdated or incorrect info (fares, schedules, contacts)' },
  { icon: Bug, text: 'Report a bug or something broken on the site' },
  { icon: Lightbulb, text: 'Suggest a feature or a page you wish existed' },
  { icon: Handshake, text: 'Partnership, sponsorship, or advertising inquiries' },
];

// TODO: replace with your real email before publishing
const CONTACT_EMAIL = 'hello@cebucentral.example';

export default function Contact() {
  return (
    <>
      <PageHero
        icon={Mail}
        eyebrow="Get in Touch"
        title="Contact Us"
        subtitle="Spotted outdated info or have a suggestion? We'd love to hear from you."
        accent="blue"
      />

      <div className={styles.page}>
        <div className="container">

          <div className={styles.card}>
            <div className={styles.iconWrap}>
              <Mail size={26} />
            </div>
            <h2 className={styles.cardTitle}>Email us</h2>
            <p className={styles.cardDesc}>The quickest way to reach us. We read every message.</p>
            <a href={`mailto:${CONTACT_EMAIL}`} className={styles.emailLink}>
              {CONTACT_EMAIL}
            </a>
          </div>

          <div className={styles.reasonsBlock}>
            <h2 className={styles.sectionTitle}>What to reach out about</h2>
            <div className={styles.reasonsList}>
              {REASONS.map(({ icon: Icon, text }) => (
                <div key={text} className={styles.reasonItem}>
                  <Icon size={18} className={styles.reasonIcon} />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
