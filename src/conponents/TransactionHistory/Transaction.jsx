import PropTypes from "prop-types";
import css from "./TransactionHistory.module.css";

export const Transaction = ({ type, amount, currency, color }) => {
  return (
    <tr className={css[`_row_${color}`]}>
      <td>{type} </td>
      <td>{amount.toFixed(2)}</td>
      <td>{currency} </td>
    </tr>
  );
};

Transaction.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
  color: PropTypes.oneOf(["grey", "white"]),
};
