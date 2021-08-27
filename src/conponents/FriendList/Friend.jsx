
import PropTypes from 'prop-types';

export const Friend = ({ classItem, statusClass, avatarClass, avatar, nameClass, name }) => {
    return (
        <li className={classItem}>
            <span className={statusClass}></span>
            <img className={avatarClass} src={avatar} alt="user avatar" width="48" />
            <p className={nameClass}>{ name }</p>
        </li>
    );
}

Friend.propTypes = {
    classItem: PropTypes.string.isRequired,
    statusClass: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    avatarClass: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    nameClass: PropTypes.string.isRequired,
}