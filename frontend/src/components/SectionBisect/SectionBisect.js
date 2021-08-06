import styles from './sectionBisect.module.css';
import HomeIcons from '../HomeIcons/HomeIcons';

const SectionBisect = ({ bodyText, icons, imagePath, title }) => {
  return (
    <div className={styles.container}>
      <div className={styles.colLeft}>
        <h2 style={{ color: '#3e3e3e' }}>{title}</h2>
        <p>{bodyText}</p>
        <button>{'>'} Lorem ipsum</button>
      </div>
      {icons ? (
        <div className={styles.iconsCol}>
          <HomeIcons />
        </div>
      ) : (
        <div
          className={styles.image}
          style={{ backgroundImage: `url(${imagePath})` }}
        ></div>
      )}
    </div>
  );
};

export default SectionBisect;
