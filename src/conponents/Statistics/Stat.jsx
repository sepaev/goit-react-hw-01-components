
import PropTypes    from 'prop-types';
import css          from './Statistics.module.css';

export const Stat=({ color, label, percentage }) => {
  return (
    <li className={css[`_statItem_${color}`]}>
      <span className={css._label}>{label}</span>
      <span className={css._percentage}>{percentage}%</span>
    </li>
  );
}

Stat.propTypes={
  color: PropTypes.oneOf(['purple', 'red', 'blue', 'green']),
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
}