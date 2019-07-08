import React from 'react';
import {
  StatusBar,
  StyleSheet,
} from 'react-native';
import { Container, Header, Content, Card, FooterTab, Footer, Button, Icon, CardItem, Text, Body } from 'native-base';

export default class HomeScreen extends React.Component {

  render() {
    return (
        <Container>
          <Content padder>
            <Card>
              <CardItem header button onPress={() => alert("This is Card Header")}>
                <Text>NativeBase</Text>
              </CardItem>
              <CardItem button onPress={() => alert("This is Card Body")}>
                <Body>
                  <Text>
                    Click on any carditem
                  </Text>
                </Body>
              </CardItem>
              <CardItem footer button onPress={() => alert("This is Card Footer")}>
                <Text>GeekyAnts</Text>
              </CardItem>
            </Card>
          </Content>
          <Footer>
            <FooterTab>
              <Button title="" onPress={() => console.log("Hi")}>
                <Icon name="apps" />
              </Button>
              <Button>
                <Icon name="camera" />
              </Button>
              <Button active>
                <Icon active name="navigate" />
              </Button>
              <Button>
                <Icon name="person" />
              </Button>
            </FooterTab>
          </Footer>
        </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingTop: 30,
  },
});
