import React, { Component } from 'react';
import LoginForm from '../forms/LoginForm';
import ErrorModal from '../modals/ErrorModal';
import { Redirect } from 'react-router-dom';
import { login } from '../../actions/login/login.action';
import { connect } from 'react-redux';

class LoginPage extends Component {
    state = {
        showErrorModal: false
    }

    showErrorModal = () => {
        this.setState({
            showErrorModal: true
        });
    }

    closeContactModal = () => {
        this.setState({
            showErrorModal: false
        });
    }

    handleLogin = data => {
        const { dispatch } = this.props;

        dispatch(login(data));
    }

    render() {
        const { login } = this.props;

        return (
            <div>
                {login.payload.response === undefined ?
                    <LoginForm login={login} handleLogin={this.handleLogin} />
                :
                    <div>
                        {(login.error !== undefined && login.error !== null) ?
                            <Redirect to="/main" />
                        :
                            <ErrorModal message={login.error} closeModal={this.closeContactModal} />
                        }
                    </div>
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { login } = state;

    return {
        login
    }
}

export default connect(mapStateToProps)(LoginPage);