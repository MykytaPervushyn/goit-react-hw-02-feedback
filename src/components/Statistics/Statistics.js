import React from 'react';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <ul className={s.statisticsList}>
    <li className={s.statisticItem}>Good:{good}</li>
    <li className={s.statisticItem}>Neutral:{neutral}</li>
    <li className={s.statisticItem}>Bad:{bad}</li>
    <li className={s.statisticItem}>Total:{total}</li>
    <li className={s.statisticItem}>Positive feedback:{positivePercentage}%</li>
  </ul>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
