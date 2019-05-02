import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import FloatButton from '../components/FloatButton';
import FirebaseService from '../services/FirebaseService';
import SwipeList from '../components/SwipeList';

export default class Home extends Component {
  constructor() {
    super();
    console.ignoredYellowBox = [
      'Setting a timer'
    ];
  }
  
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

  deleteProduct = async ({ product_id }) => {
    console.log(product_id);
    console.log("Chamouu");
    await FirebaseService.deleteProduct(product_id);
  };


  componentDidMount() {
    FirebaseService.getProducts(items => {
      console.log("OPA: " + items)
      this.setState({ items })
    });

  };

  render() {
    return (
      <View style={styles.container}>
        <SwipeList
          itemList={this.state.items}
          onPressNavigateDetails={(e) => this.navigateDetails(e)}
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
