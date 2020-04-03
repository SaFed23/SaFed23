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
    ImageBackground,
    Text,
    Image
} from 'react-native';
import {getPicture} from '../actions/pictureAction';


class Home extends React.Component {
    componentDidMount(){
        getPicture();
    }

    render() {
        if (!this.props.showMars && !this.props.showPicture) {
            return (
                <View>
                    <Text style={{fontSize: 30, fontWeight: "bold", marginLeft: "43%", borderRadius: 5}}>Hello</Text>
                    <Image
                        source={require('../image/robot.jpeg')}
                        style={{width: 425, height: 550, margin: "1%", borderRadius: 5}}/>
                </View>
            );
        }
        else {
            return (
                <Text/>
            );
        }
    }
}

export default Home;
