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
            console.log('%c[Middleware] Dispatching', 'color: #ff4000', action);
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
