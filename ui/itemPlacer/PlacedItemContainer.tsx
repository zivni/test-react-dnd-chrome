"user strict"
import * as React  from 'react';
import { DropTarget, DropTargetSpec, ConnectDropTarget, DragSource, DragSourceSpec, ConnectDragSource  } from 'react-dnd';

require('./styles.css');
import * as classNames from 'classnames';
import * as dndTypes from 'constants/dndTypes';
import {exchangeItemsCommand} from 'actions/actions';

interface PlacedItemContainerProps extends React.Props<PlacedItemBox> {
    item: IPlacedItem;
    isItemPlaced(title): boolean;
    exchangeItems: exchangeItemsCommand;
    connectDropTarget?: ConnectDropTarget;
    connectDragSource?: ConnectDragSource;
    isOver?: boolean;
    canDrop?: boolean;
}

interface IPlacedItemsDndData {
    sourceId: number;
}

const dndTarget: DropTargetSpec<PlacedItemContainerProps> = {
    drop(props): IPlacedItemDropTarget {
        return { targetId: props.item.id };
    },
    canDrop(props, monitor): boolean {
        var itemType = monitor.getItemType();
        return (itemType == dndTypes.PLACED_ITEM);
    }
}

const dndSource: DragSourceSpec<PlacedItemContainerProps> = {
    beginDrag(props): IPlacedItemsDndData {
        return { sourceId: Number(props.item.id) }
    },
    endDrag(props, monitor) {
        if (monitor.didDrop()) {
            let droppedProps = monitor.getDropResult() as IPlacedItemDropTarget;
            props.exchangeItems(props.item.id, droppedProps.targetId);
        }
    },
    canDrag(props): boolean {
        return !!props.item.title;
    }
}

@DropTarget(dndTypes.PLACED_ITEM, dndTarget, (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
}))
@DragSource(dndTypes.PLACED_ITEM, dndSource, (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
}))
export class PlacedItemContainer extends React.Component<PlacedItemContainerProps, {}>{
    public render() {
        const {item, connectDropTarget, connectDragSource} = this.props;
        return connectDragSource(connectDropTarget(
            <div className={classNames(this.getDndStyle()) }>
                <PlacedItemBox {...item} />
                </div>
        ));
    }

    private getDndStyle(): ClassDictionary {
        const {isOver, canDrop} = this.props;
        console.log("isOver: %s, canDrop: %s", isOver, canDrop);
        
        return {
            ['itemIsOver']: isOver && canDrop,
            ['itemCanDrop']: canDrop,
        }
    }
}



class PlacedItemBox extends React.Component<IPlacedItem, any>{
    public render() {
        return (
            <div>{this.props.title}</div>
        );
    }
}