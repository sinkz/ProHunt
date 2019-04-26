import React, { Component } from 'react';
import CustomListview from '../../src/components/CustomListView';
import { db } from '../config/config';

import {
  StyleSheet,
  View,
  Alert
} from 'react-native';
import FloatButton from '../components/FloatButton';
import { getFakeData } from '../services/FakeData';


let itemsRef = db.ref('/products');
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


  componentWillMount() {
    itemsRef.on('value', snapshot => {
      let data = snapshot.val();
      let items = Object.values(data);
      this.setState({ items })
    }, error => {
      console.log(error);
    })
  };

  render() {

    return (
      <View style={styles.container}>
        <CustomListview
          itemList={this.state.items} 
          onPressNavigateDetails={this.navigateDetails.bind(this)}/>
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
