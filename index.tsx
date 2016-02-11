import * as React  from 'react';
import * as ReactDOM  from 'react-dom';
import * as Immutable from 'immutable';

import { Provider } from 'react-redux';
import {configureStore} from './store/configureStore';
import {App} from './app';
import * as ItemActions from 'actions/actions';

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
            "04": {
                title: "e",
            },
            "05": {
                title: "f",
            },
            "06": {
                title: "g",
            },
            "07": {
                title: "h",
            },
            "08": {
                title: "i",
            }
            
        }
    })
};

const store = configureStore(initialStore);

const addItemsActions = ItemActions.addComponentaItem();
for (var j = 0; j < 10; j++) {
    store.dispatch(addItemsActions)
}

ReactDOM.render(
    <Provider store={store}>
        <App />
        </Provider>
    , rootElement
)
