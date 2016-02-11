"use strict";
const React = require('react');
const ReactDOM = require('react-dom');
const Immutable = require('immutable');
const react_redux_1 = require('react-redux');
const configureStore_1 = require('./store/configureStore');
const app_1 = require('./app');
const ItemActions = require('actions/actions');
var rootElement = document.createElement("div");
document.body.appendChild(rootElement);
const initialStore = {
    channel: Immutable.fromJS({
        placedItems: {
            "00": {
                title: "a",
            },
            "01": {
                title: "b",
            },
            "02": {
                title: "c",
            },
            "03": {
                title: "d",
            },
            "65": {
                title: "e",
            },
            "66": {
                title: "f",
            },
            "673": {
                title: "g",
            }
        }
    })
};
const store = configureStore_1.configureStore(initialStore);
const addItemsActions = ItemActions.addComponentaItem();
for (var j = 0; j < 10; j++) {
    store.dispatch(addItemsActions);
}
ReactDOM.render(React.createElement(react_redux_1.Provider, {store: store}, React.createElement(app_1.App, null)), rootElement);
//# sourceMappingURL=index.js.map