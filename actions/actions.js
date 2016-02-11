"use strict";
const redux_actions_1 = require('redux-actions');
const ActionTypes = require("constants/actionTypes");
exports.exchangeItems = redux_actions_1.createAction(ActionTypes.EXCHANGE_ITEMS, (index1, index2) => {
    return {
        sourceId: index1,
        targetId: index2,
    };
});
exports.addComponentaItem = redux_actions_1.createAction(ActionTypes.ADD_COMPONENTA_ITEM, () => null);
//# sourceMappingURL=actions.js.map