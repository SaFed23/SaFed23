/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
    View,
    Text,
    Image
} from 'react-native';
import AnimatedLoader from 'react-native-animated-loader';


class DailyPictureView extends React.Component {

    componentDidMount(){
        this.props.getPicture(this.props.picture);
    }

    render() {
        return (
            <>
                <AnimatedLoader
                    visible={this.props.picture.loading}/>
                {this.props.picture.picture ? (
                    <View style={{alignItems: "center"}}>
                        <Image
                            style={{width: 400, height: 400, margin: "1%", borderRadius: 5}}
                            source={{uri: this.props.picture.picture}}
                        />
                        <Text style={{fontWeight: "bold", margin: "2%"}}>{this.props.picture.description}</Text>
                    </View>
                ) : <Text/>}
            </>
        );
    }
}


export default DailyPictureView;
