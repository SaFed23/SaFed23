import {PICTURE_FAILED, PICTURE_REQUEST, PICTURE_SUCCESS} from '../reducers/pictureReducer';
import {API_KEY, loadState} from '../store/store';
import {MARS_FAILED, MARS_REQUEST, MARS_SUCCESS} from '../reducers/marsReducer';

export function getMarsPictures(mars, newPage) {
    return dispatch => {
        if (mars.currentPage !== newPage) {
            dispatch({
                type: MARS_REQUEST,
                payload: {
                    loading: true,
                }
            });
            fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=${newPage}&api_key=${API_KEY}`)
                .then(res => {
                    return res.json()
                })
                .then(data => {
                    dispatch({
                        type: MARS_SUCCESS,
                        payload: {
                            currentPage: newPage,
                            marsPictures: data,
                            loading: false,
                        }
                    });
                })
                .catch(err => {
                    loadState()
                        .then(res => {
                            const store = JSON.parse(res);
                            console.log("err", store.mars);
                            dispatch({
                                type: MARS_FAILED,
                                payload: {
                                    ...store.mars,
                                    loading:false
                                },
                            });
                        })
                        .catch(err => alert("I NEED YOUR INTERNET!!!!!"));
                })
        }
    }
}

