import React from 'react';
import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <ul className={s.optionsList}>
    {options.map(label => (
      <li className={s.feedbackOption}>
        <button
          type="button"
          className={s.button}
          key={label}
          onClick={() => onLeaveFeedback(label)}
        >
          {label}
        </button>
      </li>
    ))}
  </ul>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
