import React, { Component } from 'react';
import { ExpoConfigView } from '@expo/samples';
import { Image, View, Text, Platform, ScrollView } from 'react-native';
import { Container, Header, Thumbnail, Button, Icon, Tabs, Tab, TabBarIcon, TabHeading } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'マイページ',
  };

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return (
      <Container>
        <ScrollView>
          <Grid>
            <Row style={{ height: 120, padding: 20 }}>
                <Col size={1}>
                  <Thumbnail large source={require('../assets/images/example3.jpg')}/>
                </Col>
                <Col size={3}>
                  <Row>
                    <Col>
                      <Row style={{justifyContent: 'space-around', height: 26}}><Text style={{fontSize:16,fontWeight: 'bold'}}>24</Text></Row>
                      <Row style={{justifyContent: 'space-around', height: 26}}><Text style={{fontSize:12, color: 'gray'}}>投稿</Text></Row>
                    </Col>
                    <Col>
                      <Row style={{justifyContent: 'space-around', height: 26}}><Text style={{fontSize:16,fontWeight: 'bold'}}>13</Text></Row>
                      <Row style={{justifyContent: 'space-around', height: 26}}><Text style={{fontSize:12, color: 'gray'}}>フォロワー</Text></Row>
                    </Col>
                    <Col>
                      <Row style={{justifyContent: 'space-around', height: 26}}><Text style={{fontSize:16,fontWeight: 'bold'}}>24</Text></Row>
                      <Row style={{justifyContent: 'space-around', height: 26}}><Text style={{fontSize:12, color: 'gray'}}>フォロー中</Text></Row>
                    </Col>
                  </Row>
                  <Row style={{justifyContent: 'space-around'}}>
                  <Button iconRight small bordered dark style={{marginTop: 10, padding: 10}}>
                    <Text style={{paddingTop:3,paddingRight: 6}}>プロフィールを編集する</Text>
                    <Icon ios='ios-contact' android="md-menu"/>
                  </Button>
                  </Row>
                </Col>
            </Row>
            <Row style={{ height: 60, paddingLeft: 20, paddingBottom: 20 }}>
              <Col>
                <Row style={{height: 26}}><Text style={{fontSize:16, fontWeight: 'bold'}}>ゾエ卍ゾエゾエ丸</Text></Row>
                <Row style={{height: 26}}><Text style={{fontSize:12}}>フリーランスエンジニアやってます卍</Text></Row>
              </Col>
            </Row>
            <Tabs locked tabBarUnderlineStyle={{height:0}}>
              <Tab heading={ <TabHeading><Icon name="camera" /></TabHeading>}>
                <Row style={{flexWrap: 'wrap', justifyContent: 'space-around'}}>
                  <Col style={{aspectRatio: 1, width: '33%'}}>
                      <Thumbnail square source={require('../assets/images/example1.jpg')} style={{flex: 1,width: null,height: null,resizeMode: 'cover'}}/>
                  </Col>
                  <Col style={{aspectRatio: 1, width: '33%'}}>
                      <Thumbnail square source={require('../assets/images/example2.jpg')} style={{flex: 1,width: null,height: null,resizeMode: 'cover'}}/>
                  </Col>
                  <Col style={{aspectRatio: 1, width: '33%'}}>
                      <Thumbnail square source={require('../assets/images/example3.jpg')} style={{flex: 1,width: null,height: null,resizeMode: 'cover'}}/>
                  </Col>
                  <Col style={{aspectRatio: 1, width: '33%'}}>
                      <Thumbnail square source={require('../assets/images/example4.jpg')} style={{flex: 1,width: null,height: null,resizeMode: 'cover'}}/>
                  </Col>
                  <Col style={{aspectRatio: 1, width: '33%'}}>
                      <Thumbnail square source={require('../assets/images/example5.jpg')} style={{flex: 1,width: null,height: null,resizeMode: 'cover'}}/>
                  </Col>
                  <Col style={{aspectRatio: 1, width: '33%'}}>
                      <Thumbnail square source={require('../assets/images/example6.jpg')} style={{flex: 1,width: null,height: null,resizeMode: 'cover'}}/>
                  </Col>
                  <Col style={{aspectRatio: 1, width: '33%'}}>
                      <Thumbnail square source={require('../assets/images/example6.jpg')} style={{flex: 1,width: null,height: null,resizeMode: 'cover'}}/>
                  </Col>
                  <Col style={{aspectRatio: 1, width: '33%'}}>
                      <Thumbnail square source={require('../assets/images/example6.jpg')} style={{flex: 1,width: null,height: null,resizeMode: 'cover'}}/>
                  </Col>
                  <Col style={{aspectRatio: 1, width: '33%'}}>
                      <Thumbnail square source={require('../assets/images/example6.jpg')} style={{flex: 1,width: null,height: null,resizeMode: 'cover'}}/>
                  </Col>
                  <Col style={{aspectRatio: 1, width: '33%'}}>
                      <Thumbnail square source={require('../assets/images/example6.jpg')} style={{flex: 1,width: null,height: null,resizeMode: 'cover'}}/>
                  </Col>
                  <Col style={{aspectRatio: 1, width: '33%'}}>
                      <Thumbnail square source={require('../assets/images/example6.jpg')} style={{flex: 1,width: null,height: null,resizeMode: 'cover'}}/>
                  </Col>
                  <Col style={{aspectRatio: 1, width: '33%'}}>
                      <Thumbnail square source={require('../assets/images/example6.jpg')} style={{flex: 1,width: null,height: null,resizeMode: 'cover'}}/>
                  </Col>
                  <Col style={{aspectRatio: 1, width: '33%'}}>
                      <Thumbnail square source={require('../assets/images/example1.jpg')} style={{flex: 1,width: null,height: null,resizeMode: 'cover'}}/>
                  </Col>
                  <Col style={{aspectRatio: 1, width: '33%'}}>
                      <Thumbnail square source={require('../assets/images/example2.jpg')} style={{flex: 1,width: null,height: null,resizeMode: 'cover'}}/>
                  </Col>
                  <Col style={{aspectRatio: 1, width: '33%'}}>
                      <Thumbnail square source={require('../assets/images/example3.jpg')} style={{flex: 1,width: null,height: null,resizeMode: 'cover'}}/>
                  </Col>
                  <Col style={{aspectRatio: 1, width: '33%'}}>
                      <Thumbnail square source={require('../assets/images/example4.jpg')} style={{flex: 1,width: null,height: null,resizeMode: 'cover'}}/>
                  </Col>
                </Row>
              </Tab>
              <Tab heading={ <TabHeading><Icon name="list" /></TabHeading>}>
              </Tab>
              <Tab heading={ <TabHeading><Icon name="apps" /></TabHeading>}>
              </Tab>
            </Tabs>
          </Grid>
        </ScrollView>
      </Container>
    );
  }
}
