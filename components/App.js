/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
   SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import NavBar from './NavBar';
import Home from './Home';
import DailyPicture from '../containers/DailyPicture';
import MarsPictures from '../containers/MarsPictures';

class App extends React.Component {

    state = {
        showPicture: false,
        showMars: false,
    };

    onPressPicture = () => {
        this.setState({
            showPicture: true,
            showMars: false,
        });
    };

    onPressHome = () => {
        this.setState({
            showPicture: false,
            showMars: false,
        });
    };

    onPressMars = () => {
        this.setState({
            showPicture: false,
            showMars: true,
        });
    };

    render() {
        return (
            <>
                <StatusBar barStyle="dark-content"/>
                <SafeAreaView>
                    <ScrollView
                      contentInsetAdjustmentBehavior="automatic">
                  <View style={styles.header}>
                      <Text style={styles.headerText}>Welcome to space!</Text>
                      <Image
                             style={{width: 40, height: 40, margin: "1%", borderRadius: 5}}
                             source={require('../image/nasa.png')}
                      />
              </View>
                <NavBar
                    showPicture={this.state.showPicture}
                    showMars={this.state.showMars}
                    onPressPicture={this.onPressPicture}
                    onPressHome={this.onPressHome}
                    onPressMars={this.onPressMars}
                />
                {!this.state.showPicture && !this.state.showMars ? (
                    <Home
                        showPicture={this.state.showPicture}
                        showMars={this.state.showMars}
                    />) : <Text/>}

                {this.state.showPicture ? (
                    <DailyPicture/>) : <Text/>}

                    {this.state.showMars ? (
                        <MarsPictures
                            navigation={this.props.navigation}
                        />) : <Text/>}
            </ScrollView>
          </SafeAreaView>
        </>
    );
  }
}


const styles = StyleSheet.create({
  header: {
      backgroundColor: "#060317",
      height: 50,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center"
  },
  headerText: {
    color: "#fff",
    fontSize: 20,
  },
  buttonsArea: {
    flexDirection: "row",
    justifyContent: 'space-between',
    backgroundColor: "#900cff"
  },
  button: {
    backgroundColor: "#0900c8",
    borderRadius: 5,
    width: 120,
    height: 25,
    alignItems: "center"
  },
  textButton: {
    color: "#fff",
    fontSize: 15,
  },



  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
