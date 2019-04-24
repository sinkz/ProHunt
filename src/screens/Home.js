import React, { Component } from 'react';
import CustomListview from '../../src/components/CustomListView';

import {
  Platform,
  StyleSheet,
  Text,
  View,
  Alert
} from 'react-native';
import FloatButton from '../components/FloatButton';
import { getFakeData } from '../services/FakeData';

export default class Home extends Component {
  static navigationOptions = {
    title: 'Home',
    headerStyle: {
      backgroundColor: '#01a699',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  clickHandler = () => {
    this.props.navigation.navigate('Products')
  };


  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <CustomListview
          itemList={getFakeData()}
        />
        <FloatButton onPress={this.clickHandler.bind(this)} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCFCFC',
  }
});
