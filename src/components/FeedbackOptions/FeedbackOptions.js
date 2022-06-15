import PropTypes from 'prop-types';
import { ListOfButtons, Button } from './FeedbackOptions.styled';

export function FeedbackOptions({ onLeaveFeedback, options }) {
  return (
    <ListOfButtons>
      {options.map((option, index) => {
        return (
          <li key={index}>
            <Button value={option} onClick={e => onLeaveFeedback(e)}>
              {option}
            </Button>
          </li>
        );
      })}
    </ListOfButtons>
  );
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
};
