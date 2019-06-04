import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
export default class CardImage extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Card>
            <CardItem cardBody>
              <Image source={require('../assets/images/example1.jpg')} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="ios-heart-empty" style={{color: 'black'}}/>
                  <Text style={{color: 'black'}}>12</Text>
                </Button>
                <Button transparent>
                  <Icon active name="ios-text" style={{color: 'grey'}}/>
                  <Text style={{color: 'black'}}>4</Text>
                </Button>
                <Text>1分前</Text>
              </Left>
              <Body>

              </Body>
              <Right>
                <Button style={{height: 52,width: 52,borderRadius:26,backgroundColor:'lightgrey'}}>
                  <Icon active name="heart"/>
                </Button>
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
