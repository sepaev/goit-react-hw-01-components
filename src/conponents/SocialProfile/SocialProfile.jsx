import PropTypes from 'prop-types';
import css from './SocialProfile.module.css';
import user from '../../json/user.json';

export const Profile = (props) => {
  // console.log(props); // а=5 b-10
  return (
    <div className={css.taskOne}>
      <div className={css.wrapper}>
      <div className={css.profile}>
        <div className={css.description}>
          <img
            src="https://i.pinimg.com/originals/a0/40/66/a04066a2d1fcf25df39c599e093995c8.jpg"
            alt="user avatar"
            className={css.avatar}/>
          <p className={css.name}>{user.name}</p>
          <p className={css.tag}>@{user.tag}</p>
          <p className={css.location}>{user.location}</p>
        </div>

        <ul className={css.stats}>
          <li>
            <span className={css.label}>Followers</span>
            <span className={css.quantity}>{user.stats.followers}</span>
          </li>
          <li>
            <span className={css.label}>Views</span>
            <span className={css.quantity}>{user.stats.views}</span>
          </li>
          <li>
            <span className={css.label}>Likes</span>
            <span className={css.quantity}>{user.stats.likes}</span>
          </li>
        </ul>
      </div>
      </div>
      <button className='goHome'>go home</button>
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