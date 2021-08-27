import PropTypes from 'prop-types';
import css from './Statistics.module.css';

import { goHomeClick } from '../../utils/goHomeClick';

export const Statistics = (props)  => {
  return (
    <div> 
      <button className='goHome' onClick={goHomeClick}>go home from Statistics</button>
    </div>
  );
};

// Statistics.propTypes = {
//   name: PropTypes.string.isRequired,
//   location: PropTypes.string.isRequired,
//   speaker: PropTypes.string.isRequired,
//   type: PropTypes.string.isRequired,
//   start: PropTypes.string.isRequired,
//   end: PropTypes.string.isRequired,
// };