import PropTypes from 'prop-types';
import { StyledList } from './FeedbackOptions.styled';

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

  return <StyledList>{Buttons}</StyledList>;
};

FeedbackOptions.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
