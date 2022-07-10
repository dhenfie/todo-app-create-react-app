import { createContext } from 'react';

/** @type {{items: [{ id: string, name: string }], appName: string}} initialState */
const initialState = {
    items: [],
    appName: "Todo App"
};

const reduce = (state, action) => {
    if (action.type === 'PUSH') {
        console.log(state.items);
        return {
            items: [...state.items, action.payload],
            appName: state.appName
        };
    }

    if (action.type === 'EDIT') {
        /** @type {Array<{id: string, name: string}>} */
        const prevState = state.items;
        const currentItem = action.payload;
        const getIndexFromState = state.items.findIndex((value) => value.id == currentItem[0].id);
        prevState.splice(getIndexFromState, 1, currentItem[0]);
        return {
            items: prevState,
            appName: state.appName
        };
    }

    if (action.type === 'SET_TITLE') {
        return {
            items: [...state.items],
            appName: action.payload
        };
    }
};

const AppContext = createContext();
export { AppContext, initialState, reduce };