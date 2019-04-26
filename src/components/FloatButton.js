import React, { Component } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class FloatButton extends Component {
  render() {
    return (
      <View >
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => this.props.onPress()}
          style={styles.TouchableOpacityStyle}>
          <Icon name="plus" size={18} color="#fff" />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  TouchableOpacityStyle: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    position: 'absolute',
    bottom: 10,
    right: 10,
    height: 60,
    backgroundColor: '#01a699',
    borderRadius: 100,
  }
});
