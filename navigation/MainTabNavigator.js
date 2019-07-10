import React from 'react';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import {Platform, StatusBar, StyleSheet} from 'react-native';
import {Header, Footer, FooterTab, Button, Icon} from 'native-base';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from "../screens/DetailsScreen";

const styles = StyleSheet.create({
    header: {
        marginTop: StatusBar.currentHeight,
    }
});

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
    return <Footer>
        <FooterTab>
            <Button active={navigation.state.index === 0}
                    onPress={() => navigation.navigate("Home")}>
                <Icon name="home"/>
            </Button>
            <Button active={navigation.state.index === 1}
                    onPress={() => navigation.navigate("Details")}>
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