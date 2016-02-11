import { createAction, Action } from 'redux-actions';

import * as ActionTypes from "constants/actionTypes";

export type exchangeItemsCommand = (index1: string, index2: string) => void;
export type addComponentaItemCommand = () => void;

export const exchangeItems: exchangeItemsCommand = createAction<IExchangeItemsPayload>(
    ActionTypes.EXCHANGE_ITEMS,
    (index1:string , index2: string) => {
        return {
            sourceId: index1,
            targetId : index2, 
        };
    }
)

export const addComponentaItem: addComponentaItemCommand = createAction<IComponentaPayload>(
    ActionTypes.ADD_COMPONENTA_ITEM,
    () => null
)