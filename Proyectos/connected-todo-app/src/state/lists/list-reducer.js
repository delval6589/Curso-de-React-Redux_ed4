import initialState from "./list-initial-state";
import { ACTIONS } from "./list-action-creators";

export default (state = initialState, action) => {
    if (action.type === ACTIONS.CREATE) {
        return [ 
            ...state, 
            { 
                id: action.payload.id, 
                name: action.payload.name 
            } 
        ]
    }

    if (action.type === ACTIONS.CHANGE_NAME) {
        const lists = [...state];
        const list = lists.find(({ id }) => id === action.payload.id);
        
        list.name = action.payload.newName;
        return lists;
    }

    return state;
}