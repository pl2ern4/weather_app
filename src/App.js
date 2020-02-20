import React from 'react';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import './App.css';
import {rootReducer} from './reducers';
import WeatherContainer from './WeatherContainer';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

const store = createStore(rootReducer, 
                        applyMiddleware(thunk));

const App = props => <Provider store={store}><WeatherContainer/></Provider>

export default App;