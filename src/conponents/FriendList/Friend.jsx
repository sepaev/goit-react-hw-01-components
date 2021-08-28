
import PropTypes    from 'prop-types';
import css          from './FriendList.module.css';

export const Friend = ({ color, avatar, name })  => {
  console.log(color);
  return (
    <li className = {css._item}>
      <span className = {css[`_status_${color}`]}></span>
      <img className = {css._avatar} src = {avatar} alt = "user avatar" width = "48" />
      <p className = {css._name}>{name}</p>
    </li>
  );
}

Friend.propTypes = {
  color: PropTypes.oneOf(['green', 'red']),
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}