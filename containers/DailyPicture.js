import React from "react";
import DailyPictureView from '../components/DailyPictureView';
import {getPicture} from '../actions/pictureAction';
import {connect} from "react-redux";

function DailyPicture(props) {
    return <DailyPictureView
        picture={props.picture}
        getPicture={props.getPicture}
    />
}

const mapStateToProps = store => {
    return {
        picture: store.picture
    }
};

const mapHandlerToProps = dispatch => {
    return {
        getPicture: (picture) => dispatch(getPicture(picture)),
    }
};

export default connect(mapStateToProps, mapHandlerToProps) (DailyPicture);