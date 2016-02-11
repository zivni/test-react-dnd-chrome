"user strict";
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
const react_dnd_1 = require('react-dnd');
require('./styles.css');
const classNames = require('classnames');
const dndTypes = require('constants/dndTypes');
const dndTarget = {
    drop(props) {
        return { targetId: props.item.id };
    },
    canDrop(props, monitor) {
        var itemType = monitor.getItemType();
        return (itemType == dndTypes.PLACED_ITEM);
    }
};
const dndSource = {
    beginDrag(props) {
        return { sourceId: Number(props.item.id) };
    },
    endDrag(props, monitor) {
        if (monitor.didDrop()) {
            let droppedProps = monitor.getDropResult();
            props.exchangeItems(props.item.id, droppedProps.targetId);
        }
    },
    canDrag(props) {
        return !!props.item.title;
    }
};
let PlacedItemContainer = class extends React.Component {
    render() {
        const { item, connectDropTarget, connectDragSource } = this.props;
        return connectDragSource(connectDropTarget(React.createElement("div", {className: classNames(this.getDndStyle())}, React.createElement(PlacedItemBox, React.__spread({}, item)))));
    }
    getDndStyle() {
        const { isOver, canDrop } = this.props;
        console.log("isOver: %s, canDrop: %s", isOver, canDrop);
        return {
            ['itemIsOver']: isOver && canDrop,
            ['itemCanDrop']: canDrop,
        };
    }
};
PlacedItemContainer = __decorate([
    react_dnd_1.DropTarget(dndTypes.PLACED_ITEM, dndTarget, (connect, monitor) => ({
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
    })),
    react_dnd_1.DragSource(dndTypes.PLACED_ITEM, dndSource, (connect, monitor) => ({
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    })), 
    __metadata('design:paramtypes', [])
], PlacedItemContainer);
exports.PlacedItemContainer = PlacedItemContainer;
class PlacedItemBox extends React.Component {
    render() {
        return (React.createElement("div", null, this.props.title));
    }
}
//# sourceMappingURL=PlacedItemContainer.js.map