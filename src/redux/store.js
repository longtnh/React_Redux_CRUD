import { applyMiddleware, createStore, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from './reducers/index.reducer'

const configureStore = (preloadedState = {}) => {
    const middleware = [thunkMiddleware];
    const middlewareEnhancer = composeWithDevTools(
      applyMiddleware(...middleware)
    );
    const enhancers = [middlewareEnhancer];
    const composedEnhancers = compose(...enhancers);
    const store = createStore(rootReducer, preloadedState, composedEnhancers);
    return store;
  };
  
  export const store = configureStore();