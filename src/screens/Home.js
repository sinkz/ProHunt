import React, { PureComponent } from 'react';
import {
  StyleSheet,
  View,
  YellowBox
} from 'react-native';
import FloatButton from '../components/FloatButton';
import FirebaseService from '../services/FirebaseService';
import SwipeList from '../components/SwipeList';

class Home extends PureComponent {
  constructor() {
    super();
    YellowBox.ignoreWarnings(['Setting a timer']);
    YellowBox.ignoreWarnings(['Warning: componentWill'])
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
          onPressNavigateDetails={(product) => this.navigateDetails(product)}
          onPressDeleteProduct={(product) => this.deleteProduct(product)} />
        <FloatButton onPressFloatButton={this.clickHandler.bind(this)} />
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