import React from 'react';
import {
    StatusBar,
    StyleSheet,
} from 'react-native';
import {
    Container,
    Content,
    Item,
    Icon,
    Input,
    List,
    ListItem,
    Body,
    Text
} from 'native-base';


const requests = [
    {
        number: "2019/03/07-001",
        objectName: "Полигон твердых бытовых отходов в г.Боброве Бобровского Муниципального района Воронежской области"
    },
    {
        number: "2018/03/07-002",
        objectName: "Полигон жидких бытовых отходов в г.Боброве Бобровского Муниципального района Воронежской области"
    },
    {
        number: "2017/03/07-003",
        objectName: "Полигон мягких бытовых отходов в г.Боброве Бобровского Муниципального района Воронежской области"
    },
    {
        number: "2018/03/07-004",
        objectName: "Полигон зеленых бытовых отходов в г.Боброве Бобровского Муниципального района Воронежской области"
    },
    {
        number: "2019/03/07-005",
        objectName: "Полигон круглых бытовых отходов в г.Боброве Бобровского Муниципального района Воронежской области"
    },
];

const RequestItem = ({request}) => {
    return <ListItem key={request.number}>
        <Body>
            <Text>{request.number}</Text>
            <Text note numberOfLines={2}>{request.objectName}</Text>
        </Body>
    </ListItem>
};


export default class RequestListScreen extends React.Component {

    state = {
        filter: ""
    };

    handleSearch = value => {
        this.setState({
            filter: value
        })
    };

    filteredRequests = () => {
        const {filter} = this.state;
        return requests.filter(r => {
            return (r.number + r.objectName).includes(filter);
        });
    };


    render() {
        return (
            <Container style={styles.container}>
                <Content padder>
                    <Item>
                        <Icon style={{color: "#bd9a7a"}} active name='search'/>
                        <Input onChangeText={this.handleSearch} placeholder='Поиск'/>
                    </Item>
                    <List>{
                        this.filteredRequests().map(r => <RequestItem request={r} key={r.number}/>)
                    }</List>
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
