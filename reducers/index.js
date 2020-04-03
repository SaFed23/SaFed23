import {combineReducers} from "redux";
import {pictureReducer} from './pictureReducer';
import {marsReducer} from './marsReducer';

export const rootReducer = combineReducers({
    picture: pictureReducer,
    mars: marsReducer,
});
