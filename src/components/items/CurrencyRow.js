import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CurrencyRow extends Component {
    render() {
        const { currency } = this.props;

        return (
            <tr>
                <td>{currency.code}</td>
                <td>{currency.unit}</td>
                <td>{currency.purchasePrice}</td>
            </tr>
        );
    }
}

CurrencyRow.propTypes = {
    currency: PropTypes.objectOf(PropTypes.shape({
        code: PropTypes.string.isRequired,
        unit: PropTypes.number.isRequired,
        purchasePrice: PropTypes.object.isRequired
    })).isRequired
}

export default CurrencyRow;