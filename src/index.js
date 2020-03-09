import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux'
import {createStore,applyMiddleware,compose, combineReducers} from 'redux';
import Namereducer from './reducer/NameReducer';
import Wishreducer from './reducer/WishReducer';
import thunk from 'redux-thunk';

const masterReducer=combineReducers({
    name:Namereducer,
    wish:Wishreducer,
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(masterReducer,{name:'Saifullah',wish:['apple','Mango']},composeEnhancers(applyMiddleware(thunk)));
ReactDOM.render(<Provider store={store}> <App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();