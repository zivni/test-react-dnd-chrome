import * as React  from 'react';

import {exchangeItemsCommand} from 'actions/actions';
import {PlacedItemContainer} from "./PlacedItemContainer"

export interface ItemPlacerListProps {
    items: IPlacedItem[];
    exchangeItems: exchangeItemsCommand;
}

export class ItemPlacerList extends React.Component<ItemPlacerListProps, any>{
    private isItemPlaced = (title):boolean => (
        this.props.items.some((item)=>item.title===title)
    )

    public render() {
        const {exchangeItems}=this.props;
        return (
            <div>
                {this.props.items.map((item,i) => {
                     return (
                        <div  key={item.id}>
                            <PlacedItemContainer item={item} exchangeItems={exchangeItems} isItemPlaced={this.isItemPlaced} />
                        </div>
                    );
                }) }
                </div>
        );
    }
}

