import React from "react";
import {connect} from "react-redux";
import MarsPicturesView from '../components/MarsPicturesView';
import {getMarsPictures} from '../actions/marsAction';

function MarsPictures(props) {
    return <MarsPicturesView
        mars={props.mars}
        getMarsPictures={props.getMarsPictures}
        navigation={props.navigation}
    />
}

const mapStateToProps = store => {
    return {
        mars: store.mars
    }
};

const mapHandlerToProps = dispatch => {
    return {
        getMarsPictures: (mars, currentPage) => dispatch(getMarsPictures(mars, currentPage)),
    }
};

export default connect(mapStateToProps, mapHandlerToProps) (MarsPictures);