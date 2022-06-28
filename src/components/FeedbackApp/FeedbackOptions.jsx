import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const Buttons = Object.keys(options).map(key => {
    return (
      <li key={key}>
        <button onClick={onLeaveFeedback} name={key}>
          {key}
        </button>
      </li>
    );
  });

  return <ul>{Buttons}</ul>;
};

FeedbackOptions.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
