import React, { Component } from 'react';
import { fetchCurrencies } from '../../actions/currencies/currencies.action';
import CurrencyTable from '../../components/items/CurrencyTable';
import Loader from '../Loader';
import ErrorModal from '../modals/ErrorModal';
import { connect } from 'react-redux';

class MainPage extends Component {
    componentDidMount() {
        const { dispatch } = this.props;

        dispatch(fetchCurrencies());
    }

    render() {
        const { payload, isFetching, isError, error } = this.props.currencies

        return (
            <div>
                {isError &&
                    <ErrorModal message={error} />
                }

                {!isError && isFetching && payload.response === undefined && <Loader />}
                {!isError && !isFetching && payload.response === undefined && <h2>Empty.</h2>}
                {!isError && payload.response !== undefined && payload.response !== null && payload.response.items.length > 0 &&
                    <div>
                        <CurrencyTable currencies={payload.response.items} />
                    </div>
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { currencies } = state;

    return {
        currencies
    }
}

export default connect(mapStateToProps)(MainPage);