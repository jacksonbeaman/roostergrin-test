import styles from './homeIcons.module.css';
import HomeExpertise from '../Icons/HomeExpertise';
import HomeHygiene from '../Icons/HomeHygiene';
import HomeLab from '../Icons/HomeLab';
import HomeRetention from '../Icons/HomeRetention';

const HomeIcons = () => {
  return (
    <div className={styles.container}>
      <div className={styles.topLeft}>
        <div className={styles.logo}>
          <HomeExpertise />
        </div>
        <h4>Lorem</h4>
      </div>
      <div className={styles.topRight}>
        <div className={styles.logo}>
          <HomeHygiene />
        </div>
        <h4>Lorem ipsum</h4>
      </div>
      <div className={styles.bottomLeft}>
        <div className={styles.logo}>
          <HomeLab />
        </div>
        <h4>Lorem ipsum</h4>
      </div>
      <div className={styles.bottomRight}>
        <div className={styles.logo}>
          <HomeRetention />
        </div>
        <h4>Lorem</h4>
      </div>
    </div>
  );
};

export default HomeIcons;
