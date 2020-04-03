import {StackNavigator} from "react-navigation";
import App from './App';
import MarsDetails from '../containers/MarsDetails';

const Navigator = StackNavigator(
    {
        Home: {
            screen: App,
            navigationOptions: {
                title: 'Home',
            }
        },
        Details: {
            screen: MarsDetails,
            navigationOptions: {
                title: 'Details',
            }
        }
    },
    {
        initialRouteName: 'Home',
        headerMode: 'none',
    }
);

export default Navigator;