import React, { Component } from 'react';
import { InputAccessoryView,ScrollView } from 'react-native';
import { Container, Header, Icon, Text, Form, Textarea, Button} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
export default class PostScreen extends Component {
  render() {
    const inputAccessoryViewID = "uniqueID";
    return (
      <Container style={{backgroundColor: 'whitesmoke'}}>
        <ScrollView keyboardDismissMode="interactive">
          <Grid style={{padding: 20, justifyContent: 'flex-start'}}>
            <Row style={{alignItems: 'center'}}>
              <Col style={{width: 30}}>
                <Icon ios='ios-camera' android="md-camera" style={{fontSize: 30, color: 'black', marginRight: 4}}/>
              </Col>
              <Col>
                <Text style={{fontSize: 16}}>画像を追加</Text>
              </Col>
            </Row>
            <Row style={{justifyContent: 'space-between', maxHeight: 100}}>
              <Col style={{ backgroundColor: 'white', width: '20%', aspectRatio: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Icon ios='ios-add' android="md-menu" style={{fontSize: 40, color: 'red'}}/>
              </Col>
              <Col style={{ backgroundColor: 'lightgray', width: '20%', aspectRatio: 1 }}></Col>
              <Col style={{ backgroundColor: 'lightgray', width: '20%', aspectRatio: 1 }}></Col>
              <Col style={{ backgroundColor: 'lightgray', width: '20%', aspectRatio: 1 }}></Col>
            </Row>
            <Row style={{alignItems: 'center',  marginTop: 20}}>
              <Col style={{width: 30}}>
                <Icon ios='ios-create' android="md-create" style={{fontSize: 30, color: 'black', marginRight: 4}}/>
              </Col>
              <Col>
                <Text style={{fontSize: 16}}>本文を追加</Text>
              </Col>
            </Row>
            <Row style={{justifyContent: 'space-between'}}>
              <Col>
                <Form>
                  <Textarea rowSpan={5} bordered placeholder="キャプションを書く"/>
                </Form>
              </Col>
            </Row>
            <Row>
              <Col>
                <Row style={{marginTop: 20}}>
                  <Col>
                    <Button full>
                      <Text>投稿する</Text>
                    </Button>
                  </Col>
                </Row>
                <Row style={{marginTop: 20}}>
                  <Col>
                    <Button full bordered>
                      <Text>下書きに保存</Text>
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Grid>
        </ScrollView>
      </Container>
    );
  }
}
