import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

import { goHomeClick } from '../../utils/goHomeClick';

export const TransactionHistory = (props)  => {
  return (
    <div> 
      <button className='goHome' onClick={goHomeClick}>go home from TransactionHistory</button>
    </div>
  );
};

// TransactionHistory.propTypes = {
//   name: PropTypes.string.isRequired,
//   location: PropTypes.string.isRequired,
//   speaker: PropTypes.string.isRequired,
//   type: PropTypes.string.isRequired,
//   start: PropTypes.string.isRequired,
//   end: PropTypes.string.isRequired,
// };