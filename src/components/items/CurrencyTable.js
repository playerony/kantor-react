import React, { Component } from 'react';
import CurrencyRow from './CurrencyRow';
import PropTypes from 'prop-types';
import './CurrencyTable.scss';

class CurrencyTable extends Component {
    render() {
        const currencies = this.props.currencies.map(currency => 
            <CurrencyRow key = {currency.code} 
                         currency = {currency} />
        );

        return (
            <div className="table-wrapper">
                <div className="mask">
                    <div className="table-container">
                        <div className="tbl-content">
                            <table>
                                <thead className="tbl-header">
                                    <tr>
                                        <th>Currency</th>
                                        <th>Unit</th>
                                        <th>Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {currencies}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

CurrencyTable.propTypes = {
    currencies: PropTypes.arrayOf(PropTypes.shape({
        currency: PropTypes.objectOf(PropTypes.shape({
            code: PropTypes.string.isRequired,
            unit: PropTypes.number.isRequired,
            purchasePrice: PropTypes.object.isRequired
        })).isRequired
    })).isRequired
}

export default CurrencyTable;