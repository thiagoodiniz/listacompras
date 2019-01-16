import {createStore, applyMiddleware, compose} from 'redux'
import reducers from './reducers'
import logger from 'redux-logger'
import { loadState, saveState } from './localStorage'
import createSagaMiddleware from 'redux-saga'
import sagas from './sagas'

const localStorageState = loadState();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();
const middlewares = [logger, sagaMiddleware];

const store = createStore(
    reducers, 
    localStorageState,
    composeEnhancers(
    applyMiddleware(...middlewares)))

store.subscribe(() =>{
    saveState({list: store.getState().list})
})

sagaMiddleware.run(sagas);

export default store;