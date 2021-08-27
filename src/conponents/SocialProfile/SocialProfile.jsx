import PropTypes from 'prop-types';
import css from './SocialProfile.module.css';

import { goHomeClick } from '../../utils/goHomeClick';

export const Profile = ({name, tag, location, stats})  => {
  return (
    <div className={css.taskOne}>
      <div className={css.wrapper}>
      <div className={css.profile}>
        <div className={css.description}>
          <img
            src="https://i.pinimg.com/originals/a0/40/66/a04066a2d1fcf25df39c599e093995c8.jpg"
            alt="user avatar"
            className={css.avatar}/>
          <p className={css.name}>{name}</p>
          <p className={css.tag}>@{tag}</p>
          <p className={css.location}>{location}</p>
        </div>

        <ul className={css.stats}>
          <li>
            <span className={css.label}>Followers</span>
            <span className={css.quantity}>{stats.followers}</span>
          </li>
          <li>
            <span className={css.label}>Views</span>
            <span className={css.quantity}>{stats.views}</span>
          </li>
          <li>
            <span className={css.label}>Likes</span>
            <span className={css.quantity}>{stats.likes}</span>
          </li>
        </ul>
      </div>
      </div>
      <button className='goHome' onClick={goHomeClick}>go home</button>
    </div>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  speaker: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
};