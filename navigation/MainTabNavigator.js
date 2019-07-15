import React from 'react';
import {StyleSheet} from 'react-native';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import {Footer, FooterTab, Button, Icon} from 'native-base';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from "../screens/DetailsScreen";


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

const TabBar = ({navigation}) => {
    const navigate = tabName => () => navigation.navigate(tabName);
    return <Footer >
        <FooterTab>
            <Button active={navigation.state.index === 0}
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
    DetailsStack
}, {
    tabBarComponent: TabBar

});