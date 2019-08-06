import React from 'react';
import {StatusBar, StyleSheet,} from 'react-native';
import {Accordion, Left, Body, Container, Content, Text} from 'native-base';
import {getStatusBarHeight} from 'react-native-status-bar-height';

const dataArray = [
    {
        title: "Зарегистрировано",
        date: "06.08.2019 21:45",
        content: "Ваше заявление зарегистрировано в ведомственной системе, регистрационный номер 00569-19/ГГЭ-01271"
    },
    {
        title: "Отправлено на проверку документов",
        date: "06.08.2019 20:46",
        content: "Заявление отправлено на проверку документов"
    },
    {
        title: "Ожидание поступления платежа",
        date: "06.08.2019 15:25",
        content: "Необходимо внести оплату по проекту 00545-19/ГГЭ-01554"
    }
];

export default class DetailsScreen extends React.Component {
    render() {
        return (
          <Container style={styles.container}>
              <Content padder>
                  <Body>
                      <Text>Уведомления</Text>
                  </Body>
                  <Accordion dataArray={dataArray}
                             expanded={0}
                             expandedIcon="notifications"/>
              </Content>
          </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: getStatusBarHeight()
    },
    contentContainer: {
        paddingTop: 30,
    },
});
