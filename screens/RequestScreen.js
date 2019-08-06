import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {Body, Card, CardItem, Container, Content, Text, Icon, Right} from 'native-base';
import {withNavigation} from 'react-navigation';
import {getStatusBarHeight} from 'react-native-status-bar-height';


export default withNavigation(class RequestScreen extends React.Component {

  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <Card style={{flex: 0}}>
            <CardItem>
              <Body>
                <Text style={{fontWeight: 'bold'}}>2017/03/07-003</Text>
                <Text>Ремонт Спасской башни</Text>
                <Text note>06.08.2019</Text>
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={require("../assets/images/spasskaya.png")} style={{height: 200, width: 200}}/>
              </Body>
            </CardItem>
            <CardItem>
              <Icon active name="hammer" type="Ionicons" style={{color: "#bd9a7a"}} />
              <Text>Устранение замечаний экспертов</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text style={{fontWeight: 'bold'}}>Замечания:</Text>
                <Text note numberOfLines={5}>
                  По объектам, которые достраивает ООО «ДСК-5», есть ряд нареканий. В частности, это касается некоторых домов по улицам Оснабрюкская, Хромова, где есть отставания по кирпичной кладке, электропроводке, отделочным, сантехническим работам, монтажу и наладке лифтового оборудования.
                  В настоящее время продолжаются работы на семи  оставшихся объектах, четыре из которых планируется сдать в текущем году. Участникам долевого строительства оказывается необходимая консультационная и методическая помощь.
                </Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: getStatusBarHeight()
  },
  contentContainer: {
    paddingTop: 30,
  },
});
