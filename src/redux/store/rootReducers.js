//import todos los reducer
import itemMenuReducer from './itemMenuReducer';

//Para combinar los reducer
import { combineReducers } from 'redux';

const rootReducers = combineReducers({
    //los reducer key: value
    items: itemMenuReducer
});

export default rootReducers;