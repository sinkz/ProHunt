import React, { Component } from 'react';
import CustomListview from '../../src/components/CustomListView';
import { db } from '../config/config';

import {
  StyleSheet,
  View,
} from 'react-native';
import FloatButton from '../components/FloatButton';
import { getFakeData } from '../services/FakeData';
import FirebaseService from '../services/FirebaseService';
import SwipeList from '../components/SwipeList';

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

  state = {
    items: []
  };

  clickHandler = () => {
    this.props.navigation.navigate('Products')
  };

  navigateDetails = (product) => {
    this.props.navigation.navigate('ProductDetails', {
      product: product,
    });
  };

  deleteProduct = (key) => {
    console.log(key);
    console.log("Chamouu");
  };


  componentDidMount() {
    FirebaseService.getProducts(items => {
      this.setState({ items })
    });

  };

  render() {

    return (
      <View style={styles.container}>
        <SwipeList
          itemList={this.state.items}
          onPressNavigateDetails={this.navigateDetails.bind(this)}
          onPressDeleteProduct={this.deleteProduct.bind(this)} />
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
