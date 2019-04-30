import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

export default class ProductDetails extends Component {
  static navigationOptions = {
    title: 'Detalhes do Produto',
    headerStyle: {
      backgroundColor: '#01a699',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  render() {
    const { navigation } = this.props;
    const produto = navigation.getParam('product', null);
    return (
      <View>
        <Text>{produto.nome}</Text>
        <Text>{produto.descricao}</Text>
        <Text>{produto.preco}</Text>
        <Image
          style={{ width: 100, height: 100 }}
          source={{ uri: produto.img }}
        />
      </View>
    );
  }
}
