import React, { Component }  from 'react';
import { Platform, View, Text,Modal,Button,StyleSheet, TouchableWithoutFeedback,SafeAreaView  } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import NoticeScreen from '../screens/NoticeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import MypageScreen from '../screens/MypageScreen';
import LinksScreen from '../screens/LinksScreen';
import PostScreen from '../screens/PostScreen';

import { Container, Header, Content } from 'native-base';

import { Icon } from 'expo';

function Label({name, focused}) {
  return <Text style={{textAlign: 'center', fontSize: 12, color: focused ? '#FF0000' : '#a9a9a9'}}>{name}</Text>;
}

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: (props) => (<Label name='ホーム' {...props}/>),
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-home' : 'md-home'}
    />
  ),
};

const MypageStack = createStackNavigator({
  Settings: MypageScreen,
});

MypageStack.navigationOptions = {
  tabBarLabel: (props) => (<Label name='マイページ' {...props}/>),
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-person' : 'md-person'}
    />
  ),
};

const NoticeStack = createStackNavigator({
  Settings: NoticeScreen,
});

NoticeStack.navigationOptions = {
  tabBarLabel: (props) => (<Label name='お知らせ' {...props}/>),
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-notifications' : 'md-notifications'}
    />
  ),
};

const LinksStack = createStackNavigator({
  Settings: LinksScreen,
});

LinksStack.navigationOptions = {
  tabBarLabel: (props) => (<Label name='クリップ' {...props}/>),
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
};


const PostStack = createStackNavigator({
  Capture: {
    screen: (props) => <PostScreen title="Capture" {...props} />,
    navigationOptions: ({ navigation }) => ({
      headerTitle: '投稿',
      headerLeft: (
          <Icon.Ionicons
            name={Platform.OS === 'ios' ? 'ios-close' : 'md-close'}
            size={50}
            style={{paddingLeft:20,paddingRight:20}}
            color="black"
            onPress={() => navigation.goBack(null)}
          />
      ),
    }),
  },
})

PostStack.navigationOptions = {
  tabBarLabel: <View/>,
  tabBarIcon: ({ focused }) => (
    <Icon.Ionicons
      focused={focused}
      size={82}
      style={{marginTop: -20}}
      name={Platform.OS === 'ios' ? 'ios-add-circle' : 'md-link'}
      color="red"
    />
  )
};

const Tabs = createBottomTabNavigator({
  HomeStack,
  NoticeStack,
  PostStack,
  LinksStack,
  MypageStack,
},{
  defaultNavigationOptions: ({ navigation }) => ({
      tabBarOnPress: ({ navigation, defaultHandler }) => {
        if(navigation.state.routeName === 'PostStack'){
            navigation.navigate('CaptureModal');
            return;
        }
        defaultHandler()
      },
  }),
});

const RootStack = createStackNavigator({
  Tabs: {
    screen: Tabs,
  },
  CaptureModal: {
    screen: PostStack,
    navigationOptions: {
      gesturesEnabled: false,
    },
  },
}, {
  headerMode: 'none',
  mode: 'modal',
});

export default RootStack;
