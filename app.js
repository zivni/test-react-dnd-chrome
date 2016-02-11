/// <reference path="./interfaces.d.ts" />
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const React = require('react');
const react_redux_1 = require('react-redux');
const redux_1 = require('redux');
const react_dnd_1 = require('react-dnd');
var HTML5Backend = require('react-dnd-html5-backend');
const itemPlacerActions = require('actions/actions');
const ItemPlacerList_1 = require('ui/itemPlacer/ItemPlacerList');
function getItems(state) {
    return state.channel.get("placedItems").map((v, k) => v.merge({ id: k }))
        .toList()
        .sortBy(i => i.get("id"))
        .toJS();
}
const mapStateToProps = (state) => ({
    items: getItems(state)
});
const mapDispatch = (dispatch) => {
    return {
        itemActions: redux_1.bindActionCreators(itemPlacerActions, dispatch)
    };
};
let App = class extends React.Component {
    render() {
        var x;
        const { items, itemActions } = this.props;
        return (React.createElement("div", null, React.createElement(ItemPlacerList_1.ItemPlacerList, React.__spread({items: items}, itemActions))));
    }
};
App = __decorate([
    react_dnd_1.DragDropContext(HTML5Backend),
    react_redux_1.connect(mapStateToProps, mapDispatch), 
    __metadata('design:paramtypes', [])
], App);
exports.App = App;
//# sourceMappingURL=app.js.map