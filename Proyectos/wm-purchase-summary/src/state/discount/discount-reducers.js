import { DISCOUNT_ENABLED, CALC_TOTAL } from "./discount-actions-creator";
import initialState from "./discount-initial-state";

export default (state = initialState, action) => {
    switch (action.type) {
        case DISCOUNT_ENABLED: {
          return {
            ...state,
            total: action.payload
          };
        }
        case CALC_TOTAL: {
          return {
            ...state,
            total: action.payload
          };
        }
        default:
          return state;
      }
}

