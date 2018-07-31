import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ErrorModal.scss';

class ErrorModal extends Component {
    closeModal = () => {
        if(this.props.closeModal !== undefined)
            this.props.closeModal()
    }

    render() {
        return (
            <div className="modal-wrapper" onClick={this.closeModal}>
                <div className="modal">
                    <div className="modal--error">x</div>
                    <h2>Ups..</h2>
                    <h3>{this.props.message}</h3>
                </div>
            </div>
        );
    }
}

ErrorModal.propTypes = {
    message: PropTypes.string.isRequired,
    closeModal: PropTypes.func
}

export default ErrorModal;