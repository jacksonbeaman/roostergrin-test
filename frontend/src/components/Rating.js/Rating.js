import PropTypes from 'prop-types';

const Rating = ({ value, color, fontSize }) => {
  const stars = [];

  for (let i = 0; i < 5; i++) {
    stars.push(
      <span key={i}>
        <i
          style={{ color, fontSize }}
          className={
            value >= 1 + i
              ? 'fas fa-star'
              : value >= 0.5 + i
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        ></i>
      </span>
    );
  }

  return <div className='rating'>{stars}</div>;
};

// in case color prop is not passed in
Rating.defaultProps = {
  color: '#f8e825',
  fontSize: '1rem',
  value: 0,
};

Rating.propTypes = {
  value: PropTypes.number.isRequired,
  color: PropTypes.string,
  size: PropTypes.string,
};

export default Rating;
