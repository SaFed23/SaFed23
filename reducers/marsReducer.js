export const MARS_REQUEST = 'MARS_REQUEST';
export const MARS_SUCCESS = 'MARS_SUCCESS';
export const MARS_FAILED = 'MARS_FAILED';

const initialState = {
    currentPage: 0,
    marsPictures: [],
    loading: false,
};

export function marsReducer(state = initialState, action) {
    switch (action.type) {
        case MARS_REQUEST:
            return {...state, ...action.payload};
        case MARS_SUCCESS:
            return {...state, ...action.payload};
        case MARS_FAILED:
            return {...state, ...action.payload};
        default:
            return {...state};
    }
}
