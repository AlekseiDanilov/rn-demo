import React from 'react';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import {Platform, StatusBar, StyleSheet} from 'react-native';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import {Header} from "native-base";

const styles = StyleSheet.create({
    header: {
        marginTop: StatusBar.currentHeight,
    }
});

const HomeStack = createStackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            header: () => <Header style={styles.header}/>
        }
    }
});


export default createBottomTabNavigator({
    Home: {
        screen: HomeStack,
        navigationOptions: {
            tabBarVisible: false
        }
    }
});