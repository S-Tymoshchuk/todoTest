import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import store from './redux/store.js';


export let rerenderEntireTree = (state) => {
    ReactDOM.render(
            <App state={store.getState} addTask={store} 
            	 changeImportant={store} />, document.getElementById('root'));
}