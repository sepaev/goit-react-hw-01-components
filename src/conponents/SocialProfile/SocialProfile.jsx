import PropTypes from "prop-types";
import css from "./SocialProfile.module.css";
import { goHomeClick } from "../../utils/goHomeClick";

export const Profile = ({ name, tag, location, avatar, stats }) => {
  return (
    <div className={css.taskOne}>
      <div className={css._container}>
        <div className={css._profile}>
          <div className={css._description}>
            <img src={avatar} alt="user avatar" className={css._avatar} />
            <p className={css._name}>{name}</p>
            <p className={css._tag}>@{tag}</p>
            <p className={css._location}>{location}</p>
          </div>

          <ul className={css._stats}>
            <li>
              <span className={css._label}>Followers</span>
              <span className={css._quantity}>{stats.followers}</span>
            </li>
            <li>
              <span className={css._label}>Views</span>
              <span className={css._quantity}>{stats.views}</span>
            </li>
            <li>
              <span className={css._label}>Likes</span>
              <span className={css._quantity}>{stats.likes}</span>
            </li>
          </ul>
        </div>
      </div>
      <button className="goHome" onClick={goHomeClick}>
        go home from SocialProfile
      </button>
    </div>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
