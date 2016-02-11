/// <reference path="./interfaces.d.ts" />

import * as React  from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { DragDropContext } from 'react-dnd';
var HTML5Backend = require('react-dnd-html5-backend');

import * as itemPlacerActions from 'actions/actions';
import {ItemPlacerList} from 'ui/itemPlacer/ItemPlacerList';

function getItems(state) {
    return state.channel.get("placedItems").map((v, k) => v.merge({ id: k }))
        .toList()
        .sortBy(i=>i.get("id"))
        .toJS();
}

const mapStateToProps = (state) => ({
    items: getItems(state)
});

const mapDispatch = (dispatch) => {
    return {
        itemActions: bindActionCreators(itemPlacerActions, dispatch)
    };
}


@DragDropContext(HTML5Backend)
@connect(mapStateToProps, mapDispatch)
export class App extends React.Component<any, {}>{
    public render() {
        var x: ISearchItem;
        const {items, itemActions} = this.props;
        return (
            <div>
                <ItemPlacerList items={items} {...itemActions}></ItemPlacerList>
                </div>
        );
    }
}
