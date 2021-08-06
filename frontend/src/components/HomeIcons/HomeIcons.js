import styles from './homeIcons.module.css';
import HomeExpertise from '../Icons/HomeExpertise';
import HomeHygiene from '../Icons/HomeHygiene';
import HomeLab from '../Icons/HomeLab';
import HomeRetention from '../Icons/HomeRetention';

const HomeIcons = () => {
  return (
    <div className={styles.container}>
      <div className={styles.topLeft}>
        <div
          className={styles.logo}
          onClick={() => alert('You have clicked an icon!')}
        >
          <HomeExpertise />
        </div>
        <h4 onClick={() => alert('You have clicked an icon!')}>Lorem</h4>
      </div>
      <div className={styles.topRight}>
        <div
          className={styles.logo}
          onClick={() => alert('You have clicked an icon!')}
        >
          <HomeHygiene />
        </div>
        <h4 onClick={() => alert('You have clicked an icon!')}>Lorem ipsum</h4>
      </div>
      <div className={styles.bottomLeft}>
        <div
          className={styles.logo}
          onClick={() => alert('You have clicked an icon!')}
        >
          <HomeLab />
        </div>
        <h4 onClick={() => alert('You have clicked an icon!')}>Lorem ipsum</h4>
      </div>
      <div className={styles.bottomRight}>
        <div
          className={styles.logo}
          onClick={() => alert('You have clicked an icon!')}
        >
          <HomeRetention />
        </div>
        <h4 onClick={() => alert('You have clicked an icon!')}>Lorem</h4>
      </div>
    </div>
  );
};

export default HomeIcons;
