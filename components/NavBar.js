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
    Image,
    StyleSheet,
    TouchableOpacity
} from 'react-native';


class NavBar extends React.Component {
    componentDidMount(){
    }

    render() {
        return (
            <View style={styles.buttonsArea}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={!this.props.showPicture ? this.props.onPressPicture : () => {}}>
                    <Text style={styles.textButton}>Picture of day</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.props.showPicture || this.props.showMars ? this.props.onPressHome : () => {}}>
                    <Text style={styles.textButton}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={!this.props.showMars ? this.props.onPressMars : () => {}}>
                    <Text style={styles.textButton}>Picture of Mars</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#060317",
        height: 50,
    },
    headerText: {
        color: "#fff",
        fontSize: 20,
    },
    buttonsArea: {
        flexDirection: "row",
        justifyContent: 'space-between',
        backgroundColor: "#000000"
    },
    button: {
        backgroundColor: "#0900c8",
        borderRadius: 5,
        width: 120,
        height: 50,
        alignItems: "center",
        margin: 5
    },
    textButton: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
        marginTop: 10
    },
});


export default NavBar;
