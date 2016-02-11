import { createStore, applyMiddleware, compose, Store } from 'redux';
import {rootReducer} from '../reducers/rootReducer';


const finalCreateStore = compose(
    (<any>window).devToolsExtension ? (<any>window).devToolsExtension() : f => f
)(createStore)

export function configureStore(initialState): Store {
    return finalCreateStore(rootReducer, initialState)
}