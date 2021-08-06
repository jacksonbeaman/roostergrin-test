import { useState } from 'react';
import styles from './sectionCarousel.module.css';
import Rating from '../Rating.js/Rating';

const SectionCarousel = () => {
  const reviews = [
    {
      name: 'John Doe',
      date: '08/08/19',
      product: 'Lorem ipsum dolor sit amet',
      rating: 4,
      comment: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            vitae lacinia nisl. Ut nec dolor ut urna condimentum gravida.
            Phasellus at purus luctus, blandit quam auctor, eleifend elit.
            Vestibulum ullamcorper ex diam. Fusce elementum neque purus,
            eget mollis sapien scelerisque ut.`,
    },
    {
      name: 'Jeanne Deaux',
      date: '02/01/20',
      product: 'Nemo enim ipsam voluptatem',
      rating: 3.5,
      comment: `Sed ut perspiciatis, unde omnis iste natus error sit 
          voluptatem accusantium doloremque laudantium, totam rem aperiam 
          eaque ipsa, quae ab illo inventore veritatis et quasi architecto 
          beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, 
          quia voluptas sit, aspernatur aut odit aut fugit`,
    },
    {
      name: 'Debbie Downer',
      date: '04/15/20',
      product: 'Integer porttitor venenatis',
      rating: 1.5,
      comment: `Donec ullamcorper, mauris sit amet dictum congue, enim orci
            dapibus eros, a ullamcorper neque risus quis libero. Donec
            tempor eros tristique, finibus metus sed, maximus diam. Vivamus
            tristique tortor id consectetur bibendum. Integer porttitor
            venenatis odio, rhoncus accumsan turpis consequat sed. Morbi
            nisl nibh, ullamcorper id sapien nec, sollicitudin interdum mi.`,
    },
  ];

  const [reviewNum, setReviewNum] = useState(0);

  const increment = () => {
    setReviewNum((reviewNum + 1) % 3);
  };

  const decrement = () => {
    if (reviewNum === 0) {
      setReviewNum(2);
    } else {
      setReviewNum((reviewNum - 1) % 3);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.colLeft}>
        <h2>{reviews[reviewNum].product}</h2>
        <Rating
          color={'#ff7218'}
          value={reviews[reviewNum].rating}
          fontSize={'1.25rem'}
        />
      </div>
      <div className={styles.colRight}>
        <h4>{`${reviews[reviewNum].name} ${reviews[reviewNum].date}`}</h4>
        <div className={styles.commentContainer}>
          <i className={'fas fa-angle-left'} onClick={() => decrement()}></i>
          <p>{reviews[reviewNum].comment}</p>
          <i className={'fas fa-angle-right'} onClick={() => increment()}></i>
        </div>

        <div className={styles.dotContainer}>
          <span
            className={styles.dot}
            onClick={() => setReviewNum(0)}
            style={
              reviewNum === 0
                ? { backgroundColor: '#ffc71a' }
                : { backgroundColor: '#ffe567' }
            }
          ></span>
          <span
            className={styles.dot}
            onClick={() => setReviewNum(1)}
            style={
              reviewNum === 1
                ? { backgroundColor: '#ffc71a' }
                : { backgroundColor: '#ffe567' }
            }
          ></span>
          <span
            className={styles.dot}
            onClick={() => setReviewNum(2)}
            style={
              reviewNum === 2
                ? { backgroundColor: '#ffc71a' }
                : { backgroundColor: '#ffe567' }
            }
          ></span>
        </div>
      </div>
    </div>
  );
};

export default SectionCarousel;
