import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import { Provider } from 'react-redux';
import configureStore from '../configureStore';

const store = configureStore();

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div>
                    <Switch>
                        <Route exact path="/" component={LoginPage} />
                        <Route exact path="/main" component={MainPage} />
                    </Switch>
                </div>
            </Provider>
        )
    }
}

export default App;