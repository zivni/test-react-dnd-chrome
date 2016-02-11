"use strict";
const Immutable = require('immutable');
const redux_actions_1 = require('redux-actions');
const ActionTypes = require("constants/actionTypes");
const initalState = Immutable.Map();
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
function getRandomChar() {
    return String.fromCharCode(getRandomInt(65, 90));
}
const exchangeItems = (state, action) => {
    let payload = action.payload;
    let sourceItem = state.get(payload.sourceId);
    let targetItem = state.get(payload.targetId);
    let newState = state
        .setIn([payload.sourceId, "title"], targetItem.get("title"))
        .setIn([payload.targetId, "title"], sourceItem.get("title"));
    return newState;
};
const addItem = (state, action) => {
    let newItemId = state.keySeq().map((key) => Number(key)).max() + 1;
    let newItem = {
        title: getRandomChar()
    };
    let newState = state.set(newItemId.toString(), Immutable.fromJS(newItem));
    return newState;
};
exports.itemPlacerReducers = redux_actions_1.handleActions({
    [ActionTypes.EXCHANGE_ITEMS]: exchangeItems,
    [ActionTypes.ADD_COMPONENTA_ITEM]: addItem
}, initalState);
//# sourceMappingURL=itemPlacerReducers.js.map