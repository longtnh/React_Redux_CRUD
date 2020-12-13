import { combineReducers } from 'redux';
import userReducer from './user.reducer';
import inputReducer from './input.reducer';
import sampleApiReducer from './api.reducer';

const rootReducer = combineReducers({
    user : userReducer,
    input : inputReducer,
    sampleApi: sampleApiReducer
});

export default rootReducer
