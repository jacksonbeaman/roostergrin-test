import styles from './hero.module.css';
import LogoWhite from '../Logos/LogoWhite';

const Hero = ({ imagePath }) => {
  return (
    <div
      className={styles.hero}
      style={{ backgroundImage: `url(${imagePath})` }}
    >
      <div className={styles.logo}>
        <LogoWhite />
      </div>
      <div className={styles.heroContent}>
        <h1>
          <span>Welcome To</span>
          <br></br>Rooster Grin
        </h1>
        <button>Button Button</button>
      </div>
    </div>
  );
};

export default Hero;
