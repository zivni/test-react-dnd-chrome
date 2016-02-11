"use strict";
const redux_1 = require('redux');
const rootReducer_1 = require('../reducers/rootReducer');
const finalCreateStore = redux_1.compose(window.devToolsExtension ? window.devToolsExtension() : f => f)(redux_1.createStore);
function configureStore(initialState) {
    return finalCreateStore(rootReducer_1.rootReducer, initialState);
}
exports.configureStore = configureStore;
//# sourceMappingURL=configureStore.js.map