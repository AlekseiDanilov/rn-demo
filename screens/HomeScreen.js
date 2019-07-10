import React from 'react';
import {
    StatusBar,
    StyleSheet,
} from 'react-native';
import {Container, Header, Content, Card, FooterTab, Footer, Button, Icon, CardItem, Text, Body,} from 'native-base/';


export default class HomeScreen extends React.Component {

    render() {
        return (
            <Container style={styles.container}>
                <Content padder>
                    <Card>
                        <CardItem button>
                            <Text>Home</Text>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight
    },
    contentContainer: {
        paddingTop: 30,
    },
});
