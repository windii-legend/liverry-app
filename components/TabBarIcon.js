import React from 'react';
import { Icon } from 'expo';

import Colors from '../constants/Colors';

export default class TabBarIcon extends React.Component {
  render() {
    const style = {
      marginBottom: -2
    }
    return (
      <Icon.Ionicons
        name={this.props.name}
        size={this.props.size ? this.props.size: 26}
        style={this.props.style ? this.props.style: style }
        color={this.props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
      />
    );
  }
}
