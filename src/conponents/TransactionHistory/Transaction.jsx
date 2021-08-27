import PropTypes from 'prop-types' 

export const Transaction = ({type, amount, currency, rowClass }) => {
    return (
        <tr className={rowClass}>
            <td>{ type }</td>
            <td>{ amount }</td>
            <td>{ currency }</td>
        </tr>
    );
}

Transaction.propTypes = {
    
    type: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
    rowClass: PropTypes.string.isRequired
}