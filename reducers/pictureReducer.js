export const PICTURE_REQUEST = 'PICTURE_REQUEST';
export const PICTURE_SUCCESS = 'PICTURE_SUCCESS';
export const PICTURE_FAILED = 'PICTURE_FAILED';

const initialState = {
    picture: "",
    description: "",
    loading: false,
};

export function pictureReducer(state = initialState, action) {
    switch (action.type) {
        case PICTURE_REQUEST:
            return {...state, ...action.payload};
        case PICTURE_SUCCESS:
            return {...state, ...action.payload};
        case PICTURE_FAILED:
            return {...state, ...action.payload};
        default:
            return {...state};
    }
}
