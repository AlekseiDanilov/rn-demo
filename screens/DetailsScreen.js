import React from 'react';
import {
    StatusBar,
    StyleSheet,
} from 'react-native';
import {Container, Content, Card, CardItem, Text} from 'native-base';


export default class DetailsScreen extends React.Component {

    render() {
        return (
            <Container style={styles.container}>
                <Content padder>
                    <Card>
                        <CardItem>
                            <Text>Details</Text>
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
