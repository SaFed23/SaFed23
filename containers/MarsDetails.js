import React from "react";
import MarsDetailsView from '../components/MarsDetailsView';

function MarsDetails(props) {
    return <MarsDetailsView
        marsPicture={props.navigation.state.params.marsPicture}/>
}

export default MarsDetails;