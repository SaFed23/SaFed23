/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import store from './store/store';
import React from 'react';
import Navigator from './components/Navigation';

AppRegistry.registerComponent(appName, () => {
    return () => <Provider store={store}>
        <Navigator/>
    </Provider>
});
