import PropTypes from 'prop-types';
import css from './FriendList.module.css';

import { goHomeClick } from '../../utils/goHomeClick';

export const FriendList = (props)  => {
  return (
    <div> 
      <button className='goHome' onClick={goHomeClick}>go home from FriendList</button>
    </div>
  );
};

// FriendList.propTypes = {
//   name: PropTypes.string.isRequired,
//   location: PropTypes.string.isRequired,
//   speaker: PropTypes.string.isRequired,
//   type: PropTypes.string.isRequired,
//   start: PropTypes.string.isRequired,
//   end: PropTypes.string.isRequired,
// };