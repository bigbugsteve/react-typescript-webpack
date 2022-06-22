import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import thunk from 'redux-thunk';
import uiReducer from './ui/reducer';

const reducer = combineReducers({
    form: reduxFormReducer,
    ui: uiReducer,
});

const logger = (store) => {
    return (next) => {
        return (action) => {
            if (action.type === '@@redux-form/CHANGE') {
                console.log('%c[Middleware] Dispatching %c@change', 'color: #0060E3', 'color: #00B80E', action);
            }
            if (action.type === '@@redux-form/BLUR') {
                console.log('%c[Middleware] Dispatching %c@blur', 'color: #0060E3', 'color: #DE7506', action);
            }
            if (action.type === '@@redux-form/UPDATE_SYNC_ERRORS') {
                console.log('%c[Middleware] Dispatching %c@error', 'color: #0060E3', 'color: #DE0606', action);
            }
            const result = next(action);
            console.log('%c[Middleware] next state', 'color: #4d9900', store.getState());
            return result;
        };
    };
};

const composeEnhancers = (window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose) || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(logger, thunk)));
// const store = createStore(reducer);
export default store;
