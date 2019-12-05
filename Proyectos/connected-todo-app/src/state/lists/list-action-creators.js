import uuidv4 from "../../utils/uuidv4";

export const ACTIONS = {
    CREATE: 'CREATE',
    CHANGE_NAME: 'CHANGE_NAME'
}

export function changeListName(id, newName) {
    return {
        type: ACTIONS.CHANGE_NAME,
        payload: {
            id,
            newName
        }
    };
}

export function createNewList(name) {
    return {
        type: ACTIONS.CREATE,
        payload: { id: uuidv4(), name }
    }
}