import React, { Component } from 'react';
import { View, Text } from 'react-native';

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
        const product = navigation.getParam('product', null);
        return (
            <View>
                <Text>{product.nome}</Text>
                <Text>{product.descricao}</Text>
                <Text>{product.preco}</Text>
            </View>
        );
    }
}
