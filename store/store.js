import {createStore, applyMiddleware} from "redux";
import {rootReducer} from "../reducers";
import thunk from "redux-thunk";
import RNFS from "react-native-fs";

export const API_KEY = "2ucJc0HjdQQprWkab2FPqhqFulzKqStCNLPSfavk";

const path = RNFS.DocumentDirectoryPath + '/store.json';

const saveState = (state) => {
    if(state.mars.marsPictures.length === 0 && state.picture.description !== "") {
        RNFS.readFile(path, 'utf8')
            .then(res => {
                let store = JSON.parse(res);
                store.picture = state.picture;
                RNFS.writeFile(path, JSON.stringify(store), 'utf8');
            })
            .catch(err => {
                RNFS.writeFile(path, JSON.stringify(state), 'utf8');
            });
    } else if(state.mars.marsPictures.length !== 0 && state.picture.description === "") {
        RNFS.readFile(path, 'utf8')
            .then(res => {
                let store = JSON.parse(res);
                store.mars = state.mars;
                RNFS.writeFile(path, JSON.stringify(store), 'utf8');
            })
            .catch(err => {
                RNFS.writeFile(path, JSON.stringify(state), 'utf8');
            });
    } else if(state.mars.marsPictures.length !== 0 && state.picture.description !== "") {
        RNFS.writeFile(path, JSON.stringify(state), 'utf8');
    }
};

export const loadState = async () => {
    return await RNFS.readFile(path, 'utf8');
};

// const oldState = loadState();
const store = createStore(rootReducer, undefined, applyMiddleware(thunk));

store.subscribe(() => {
    saveState(store.getState());
});

export default store;
