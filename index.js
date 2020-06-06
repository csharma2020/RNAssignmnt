/**
 * @format
 */

import {AppRegistry} from 'react-native';
import AppNavigator from './App';
import {name as appName} from './app.json';
import React from 'react';
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';

import AsteroidReducer from './src/reducers/AsteroidReducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './src/saga/';

const sagaMiddleware=createSagaMiddleware();
 
let store=createStore(AsteroidReducer,applyMiddleware(sagaMiddleware));

const App=()=>{
    return(
        <Provider store={store}>
            <AppNavigator/>
        </Provider>
    )
}
sagaMiddleware.run(rootSaga);

AppRegistry.registerComponent(appName, () => App);
