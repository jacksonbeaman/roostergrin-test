import styles from './footer.module.css';
import LogoInstagram from '../Logos/LogoInstagram';
import LogoFacebook from '../Logos/LogoFacebook';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <h5>Follow Us:</h5>
      <div className={styles.logo + ' ' + styles.logoLeft}>
        <LogoInstagram />
      </div>
      <div className={styles.logo + ' ' + styles.logoRight}>
        <LogoFacebook />
      </div>
    </footer>
  );
};

export default Footer;
