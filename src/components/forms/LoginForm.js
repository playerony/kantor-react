import React, { Component } from 'react';
import Loader from '../Loader';
import PropTypes from 'prop-types';
import './LoginForm.scss';

class LoginForm extends Component {
    state = {
        data: {
            username: '',
            password: ''
        },
        errors: {}
    }

    onSubmit = e => {
        e.preventDefault();

        const errors = this.validate(this.state.data);

        this.setState({
            errors
        })

        if(Object.keys(errors).length === 0) {
            this.props.handleLogin(this.state.data);
        }
    }

    validate = data => {
        const errors = {};

        if(!data.username.trim())
            errors.username = `THIS FIELD IS REQUIRED.`;

        if(!data.password.trim())
            errors.password = `THIS FIELD IS REQUIRED.`;

        return errors;
    }

    onChange = e => {
        this.setState({
            ...this.state,
            data: {
                ...this.state.data,
                [e.target.name]: e.target.value
            }
        })
    }

    renderForm = () => {
        const { data, errors } = this.state;

        return (
            <div className="login-wrapper">
                <div className="mask">
                    <form autoComplete="off" className="login-form" onSubmit={this.onSubmit}>
                        <h1><span>Kantor</span>React</h1>
                        <div className="login-form--field">
                            <label className="login-form--field--label">Login<span>{!!errors.username ? `(${errors.username})` : ``}</span></label>
                            <input 
                                type="text"
                                name="username"
                                value={data.username}
                                onChange={this.onChange}
                                className={!!errors.username ? "login-form--field--input-error" : "login-form--field--input"}
                            />
                        </div>
                        <div className="login-form--field">
                            <label className="login-form--field--label">Password<span>{!!errors.password ? `(${errors.password})` : ``}</span></label>
                            <input 
                                type="password"
                                name="password"
                                value={data.password}
                                onChange={this.onChange}
                                className={!!errors.password ? "login-form--field--input-error" : "login-form--field--input"}
                            />
                        </div>
                        <div className="login-form--field">
                            <input type="submit" value="Login" className="login-form--field--submit-button" />
                        </div>
                    </form>
                </div>
            </div>
        )
    }

    render() {
        const { isFetching, payload, isError } = this.props.login;

        return (
            <div className="login-form-wrapper">
                {isFetching ? <Loader /> : this.renderForm()}
            </div>
        )
    }
}

LoginForm.propTypes = {
    login: PropTypes.objectOf(PropTypes.shape({
        isError: PropTypes.bool.isRequired,
        isFetching: PropTypes.bool.isRequired,
        error: PropTypes.array.isRequired,
        payload: PropTypes.array.isRequired
    })).isRequired,
    handleLogin: PropTypes.func.isRequired
}

export default LoginForm;