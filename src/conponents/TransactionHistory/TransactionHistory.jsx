import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

import { goHomeClick } from '../../utils/goHomeClick';
import { Transaction } from './Transaction';

export const TransactionHistory = ({items})  => {
  return (
    <div className={css.taskFour}>
      <table className={css._history}>
        <thead className={css._head}>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map(({ id, type, amount, currency}, index) => 
            <Transaction
              key={id}
              type={type}
              amount={parseFloat(amount)}
              currency={currency}
              rowClass={css[`_row_${getColor(index)}`]}
            />)}
        </tbody>
      </table>
      <button className='goHome' onClick={goHomeClick}>go home from TransactionHistory</button>
    </div>
  );
};
function getColor(number) {
  return (number%2 === 0)?'grey':'white';

}
TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object)
};