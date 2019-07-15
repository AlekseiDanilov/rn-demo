import React from 'react';
import {
    StatusBar,
    StyleSheet,
} from 'react-native';
import {
    Container,
    List,
    ListItem,
    Left,
    Icon,
    Body,
    Right,
    Text
} from 'native-base';
import {withNavigation} from 'react-navigation';

const GroupListItem = withNavigation(({iconName, title, count, navigation}) => {
    return <ListItem onPress={() => navigation.navigate("Details")} icon>
        <Left>
            <Icon style={styles.groupListItemIcon} name={iconName}/>
        </Left>
        <Body>
            <Text>{title}</Text>
        </Body>
        <Right>
            <Text>{count}</Text>
            <Icon name="arrow-forward"/>
        </Right>
    </ListItem>;
});

export default class HomeScreen extends React.Component {

    render() {
        return (
            <Container style={styles.container}>
                <List>
                    <GroupListItem iconName="create" title="Формирование" count="100"/>
                    <GroupListItem iconName="briefcase" title="Проверка документов" count="100"/>
                    <GroupListItem iconName="paper" title="Оформление договора" count="100"/>
                    <GroupListItem iconName="checkmark" title="Исполнение" count="100"/>
                    <GroupListItem iconName="star" title="Результат" count="100"/>
                </List>
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
    groupListItemIcon: {
        color: "#bd9a7a"
    }
});
