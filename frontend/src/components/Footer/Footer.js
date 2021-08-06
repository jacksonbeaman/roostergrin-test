import styles from './footer.module.css';
import LogoInstagram from '../Logos/LogoInstagram';
import LogoFacebook from '../Logos/LogoFacebook';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <h5>Follow Us:</h5>
      <div
        className={styles.logo + ' ' + styles.logoLeft}
        onClick={() => alert('You have clicked a logo!')}
      >
        <LogoInstagram />
      </div>
      <div
        className={styles.logo + ' ' + styles.logoRight}
        onClick={() => alert('You have clicked a logo!')}
      >
        <LogoFacebook />
      </div>
    </footer>
  );
};

export default Footer;
