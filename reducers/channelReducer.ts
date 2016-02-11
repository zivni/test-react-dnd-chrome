import * as Immutable from 'immutable';
import { Action } from 'redux-actions';
import * as ActionTypes from "constants/actionTypes";

import {itemPlacerReducers} from './itemPlacerReducers';

type State = Immutable.Map<string, any>;
const initialState: State = Immutable.Map<string, any>();

export function channelReducer(state: State = initialState, action: Action) : State {
    let newState = state.update("placedItems",(items)=>itemPlacerReducers(items,action));
    return newState;
}

