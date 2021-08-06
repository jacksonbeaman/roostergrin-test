import styles from './hero.module.css';
import LogoWhite from '../Logos/LogoWhite';

const Hero = ({ imagePath }) => {
  return (
    <div
      className={styles.hero}
      style={{ backgroundImage: `url(${imagePath})` }}
    >
      <div
        className={styles.logo}
        onClick={() => alert('You have clicked the Rooster Grin logo!')}
      >
        <LogoWhite />
      </div>
      <div className={styles.heroContent}>
        <h1>
          <span>Welcome To</span>
          <br></br>Rooster Grin
        </h1>
        <button onClick={() => alert('You have clicked the hero button!')}>
          Button Button
        </button>
      </div>
    </div>
  );
};

export default Hero;
