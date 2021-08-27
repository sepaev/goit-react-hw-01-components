
import PropTypes from 'prop-types';

export const Stat = ({ classItem, label, classLabel, classPercentage, percentage }) => {
    return (
        <li className={classItem}>
            <span className={classLabel}>{label}</span>
            <span className={classPercentage}>{percentage}%</span>
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