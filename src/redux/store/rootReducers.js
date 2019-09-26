//import todos los reducer
import itemMenuReducer from './itemMenuReducer';
import menuReducer from './menuReducer';

//Para combinar los reducer
import { combineReducers } from 'redux';

const rootReducers = combineReducers({
    //los reducer key: value
    items: itemMenuReducer,
    menu: menuReducer
});

export default rootReducers;