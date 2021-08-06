import styles from './sectionFull.module.css';

const SectionFull = ({ alt, bodyText, imagePath, title }) => (
  <div className={styles.container}>
    <div
      className={styles.image}
      style={{ backgroundImage: `url(${imagePath})` }}
    >
      <div className={`${alt ? styles.contentAlt : styles.content}`}>
        <h2>{title}</h2>
        <p style={!bodyText ? { display: 'none' } : { display: 'block' }}>
          {bodyText}
        </p>
        <button>Button Button</button>
      </div>
    </div>
  </div>
);

export default SectionFull;
