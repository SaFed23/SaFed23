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
import AnimatedLoader from 'react-native-animated-loader';
import {API_KEY} from '../store/store';


class MarsPicturesView extends React.Component {

    componentDidMount(){
        this.props.getMarsPictures(this.props.mars, 1);
    }

    prevPage = () => {
        if (this.props.mars.currentPage > 1) {
            this.props.getMarsPictures(this.props.mars, this.props.mars.currentPage - 1);
        }
    };

    nextPage = () => {
        if (this.props.mars.marsPictures.photos.length === 25) {
            this.props.getMarsPictures(this.props.mars, this.props.mars.currentPage + 1);
        }
    };

    render() {
        return (
            <View>
                <AnimatedLoader
                    visible={this.props.mars.loading}
                />
                <View style={styles.groupButtons}>
                    <TouchableOpacity style={styles.button} onPress={this.prevPage}>
                        <Text style={styles.textButton}>Prev</Text>
                    </TouchableOpacity>
                    <View style={{width: 100, height: 100}}>
                        <Text style={styles.pageText}>{this.props.mars.currentPage}</Text>
                    </View>
                    <TouchableOpacity style={styles.button} onPress={this.nextPage}>
                        <Text style={styles.textButton}>Next</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.pictures}>
                    {this.props.mars.marsPictures.photos ? this.props.mars.marsPictures.photos.map(value => {
                        return <TouchableOpacity
                            key={value.id}
                            style={{width: 195, height: 195, margin: "1%"}}
                            onPress={() => this.props.navigation.navigate('Details', {
                                'marsPicture': value,
                            })}>
                                <Image
                                      style={{width: 195, height: 195, margin: "1%", borderRadius: 5}}
                                      source={{uri: value.img_src}}/>
                        </TouchableOpacity>
                    }) : <Text/>}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    pictures: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between"
    },
    groupButtons: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "space-between"
    },
    button: {
        width: 100,
        height: 50,
        backgroundColor: 'steelblue',
        borderRadius: 5,
        margin: 5
    },
    textButton: {
        color: "#fff",
        fontSize: 20,
        marginTop: 9,
        marginLeft: 25,
    },
    pageText: {
        fontSize: 35,
        marginTop: 3,
        marginLeft: 40,
    }
});


export default MarsPicturesView;
