import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import styles from './Navbar.module.css';

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Transport', to: '/transport' },
  { label: 'Weather', to: '/weather' },
  { label: 'Before You Go', to: '/before-you-go' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>

        <Link to="/" className={styles.brand} onClick={close}>
          <img
  src="/logo.png"
  alt="CebuCentral"
  style={{ width: '32px', height: '32px', objectFit: 'contain' }}
/>
          <span className={styles.brandName}>
            Cebu<span className={styles.accent}>Central</span>
          </span>
        </Link>

        <nav className={styles.nav} aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                [styles.link, isActive ? styles.linkActive : ''].join(' ')
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className={styles.right}>
          <Link to="/emergency" className={styles.emergencyBtn}>
            <Phone size={14} strokeWidth={2.5} />
            Emergency
          </Link>
          <button
            className={styles.toggle}
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <div
        className={[styles.drawer, open ? styles.drawerOpen : ''].join(' ')}
        aria-hidden={!open}
      >
        <nav className={styles.drawerNav}>
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                [styles.drawerLink, isActive ? styles.drawerLinkActive : ''].join(' ')
              }
              onClick={close}
            >
              {link.label}
            </NavLink>
          ))}
          <Link to="/emergency" className={styles.drawerEmergency} onClick={close}>
            <Phone size={16} />
            Emergency Contacts
          </Link>
        </nav>
      </div>
    </header>
  );
}
