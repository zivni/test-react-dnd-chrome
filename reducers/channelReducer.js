"use strict";
const Immutable = require('immutable');
const itemPlacerReducers_1 = require('./itemPlacerReducers');
const initialState = Immutable.Map();
function channelReducer(state = initialState, action) {
    let newState = state.update("placedItems", (items) => itemPlacerReducers_1.itemPlacerReducers(items, action));
    return newState;
}
exports.channelReducer = channelReducer;
//# sourceMappingURL=channelReducer.js.map