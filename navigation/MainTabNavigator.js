import React from 'react';
import {StyleSheet} from 'react-native';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import {Footer, FooterTab, Button, Icon} from 'native-base';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from "../screens/DetailsScreen";
import RequestListScreen from "../screens/RequestListScreen";
import RequestScreen from "../screens/RequestScreen";


const HomeStack = createStackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            header: null
        }
    }
});

const DetailsStack = createStackNavigator({
    Details: {
        screen: DetailsScreen,
        navigationOptions: {
            header: null
        }
    }
});

const RequestListStack = createStackNavigator({
    RequestList: {
        screen: RequestListScreen,
        navigationOptions: {
            header: null
        }
    }
});

const RequestStack = createStackNavigator({
    Request: {
        screen: RequestScreen,
        navigationOptions: {
            header: null
        }
    }
});

const TabBar = ({navigation}) => {
    const navigate = tabName => () => navigation.navigate(tabName);
    return <Footer >
        <FooterTab>
            <Button active={[0, 2, 3].includes(navigation.state.index)}
                    title=""
                    onPress={navigate("Home")}>
                <Icon name="home"/>
            </Button>
            <Button active={navigation.state.index === 1}
                    title=""
                    onPress={navigate("Details")}>
                <Icon name="notifications"/>
            </Button>
        </FooterTab>
    </Footer>;
};


export default createBottomTabNavigator({
    HomeStack,
    DetailsStack,
    RequestListStack,
    RequestStack
}, {
    tabBarComponent: TabBar

});