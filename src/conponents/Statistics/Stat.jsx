
import PropTypes    from 'prop-types';
import css          from './Statistics.module.css';

export const Stat = ({ color, label, percentage }) => {
  return (
    <li className = {css[`_statItem_${color}`]}>
      <span className = {css._label}>{label}</span>
      <span className = {css._percentage}>{percentage}%</span>
    </li>
  );
}

Stat.propTypes = {
  classItem: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  classLabel: PropTypes.string.isRequired,
  classPercentage: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
}