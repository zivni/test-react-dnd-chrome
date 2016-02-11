"use strict";
const React = require('react');
const PlacedItemContainer_1 = require("./PlacedItemContainer");
class ItemPlacerList extends React.Component {
    constructor(...args) {
        super(...args);
        this.isItemPlaced = (title) => (this.props.items.some((item) => item.title === title));
    }
    render() {
        const { exchangeItems } = this.props;
        return (React.createElement("div", null, this.props.items.map((item, i) => {
            return (React.createElement("div", {key: item.id}, React.createElement(PlacedItemContainer_1.PlacedItemContainer, {item: item, exchangeItems: exchangeItems, isItemPlaced: this.isItemPlaced})));
        })));
    }
}
exports.ItemPlacerList = ItemPlacerList;
//# sourceMappingURL=ItemPlacerList.js.map