import * as Immutable from 'immutable';
import { handleActions, Action } from 'redux-actions';
import * as ActionTypes from "constants/actionTypes";

type State = Immutable.Map<string, any>
const initalState = Immutable.Map<string, any>();

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
function getRandomChar() {
    return String.fromCharCode(getRandomInt(65, 90));
}


const exchangeItems = (state: State, action: Action): State => {
    let payload: IExchangeItemsPayload = action.payload;
    let sourceItem = state.get(payload.sourceId);
    let targetItem = state.get(payload.targetId);
    let newState = state
        .setIn([payload.sourceId, "title"], targetItem.get("title"))
        .setIn([payload.targetId, "title"], sourceItem.get("title"))
    return newState;
}

const addItem = (state: State, action: Action): State => {
    let newItemId = state.keySeq().map((key) => Number(key)).max() + 1;
    let newItem: IPlacedItem = {
        title: getRandomChar()
    }
    let newState = state.set(newItemId.toString(), Immutable.fromJS(newItem));
    
    return newState;

}



export const itemPlacerReducers = handleActions<State>({
    [ActionTypes.EXCHANGE_ITEMS]: exchangeItems,
    [ActionTypes.ADD_COMPONENTA_ITEM]: addItem
}, initalState);
