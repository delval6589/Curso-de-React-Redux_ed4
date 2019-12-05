import { PICKED_ELEMENTS } from "./cart-actions-creator";
import initialState from "./cart-initial-state";

export default (state = initialState, action) => {
    switch (action.type) {
        case PICKED_ELEMENTS: {
          return {
            ...state,
            ...action.payload
          };
        }
        default:
          return state;
      }
}