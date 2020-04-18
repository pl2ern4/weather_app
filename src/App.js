import React from 'react';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import './App.css';
import {rootReducer} from './reducers';
import WeatherContainer from './WeatherContainer';

const store = createStore(rootReducer, 
                            composeWithDevTools(
                                applyMiddleware(thunk),
                                // other store enhancers if any
                            ));

const App = props => <Provider store={store}><WeatherContainer/></Provider>

export default App;