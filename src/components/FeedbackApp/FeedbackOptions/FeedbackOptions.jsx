import PropTypes from 'prop-types';
import { StyledList } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const Buttons = options.map(key => {
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
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
