import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import locationReducer from './reducers';

const rootReducer = combineReducers({ locationReducer });

export const Store = createStore(rootReducer, applyMiddleware(thunk));