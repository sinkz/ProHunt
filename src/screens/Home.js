import React, { PureComponent } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import FloatButton from '../components/FloatButton';
import FirebaseService from '../services/FirebaseService';
import SwipeList from '../components/SwipeList';

class Home extends PureComponent {
  constructor() {
    super();
    console.ignoredYellowBox = [
      'Setting a timer'
    ];
  }
  
  static navigationOptions = {
    title: 'Home',
  };

  state = {
    items: [],
    isLoading: true
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
    await FirebaseService.deleteProduct(product_id);
  };


  componentDidMount() {
    FirebaseService.getProducts(items => {
      this.setState({ items, isLoading: false})
    });

  };

  render() {
    return (
      <View style={styles.container}>
        <SwipeList
          isLoading={this.state.isLoading}
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

export default Home;