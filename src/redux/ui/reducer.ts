import * as actionTypes from './actions';

const initialState = {
    page: 1,
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.SET_PAGE:
            return {
                ...state,
                page: action.val,
            };
        default:
            return state;
    }
}
