"use strict";
const redux_1 = require('redux');
const channelReducer_1 = require('./channelReducer');
exports.rootReducer = redux_1.combineReducers({
    channel: channelReducer_1.channelReducer,
});
//# sourceMappingURL=rootReducer.js.map