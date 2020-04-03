import {PICTURE_FAILED, PICTURE_REQUEST, PICTURE_SUCCESS} from '../reducers/pictureReducer';
import {API_KEY, loadState} from '../store/store';

export function getPicture(picture) {
    return dispatch => {
        if (picture.picture === "") {
            dispatch({
                type: PICTURE_REQUEST,
                payload: {
                    loading: true,
                }
            });
            fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
                .then(res => {
                    return res.json()
                })
                .then(data => {
                    dispatch({
                        type: PICTURE_SUCCESS,
                        payload: {
                            picture: data.url,
                            description: data.explanation,
                            loading: false,
                        }
                    });
                })
                .catch(err => {
                    loadState()
                        .then(res => {
                            const store = JSON.parse(res);
                            dispatch({
                                type: PICTURE_FAILED,
                                payload: {
                                    ...store.picture,
                                    loading:false
                                },
                            });
                        })
                        .catch(err => alert("I NEED YOUR INTERNET!!!!!"));
                })
            }
    }
}
