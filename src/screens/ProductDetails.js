import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

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
      <View style={styles.container}>
        <View style={styles.container_text}>
          <Text style={styles.nome}>{produto.nome}</Text>
          <Text style={styles.descricao}>{produto.descricao}</Text>
          <Text style={styles.preco}>R$: {produto.preco}</Text>
        </View>
        <Image
          style={styles.imagem}
          source={{ uri: produto.img }}
        />
      </View >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginLeft: 16,
    marginRight: 16,
    marginTop: 30,
    marginBottom: 150,
    borderRadius: 5,
    backgroundColor: '#FFF',
    elevation: 2,
    
  },
  imagem: {
    height: 200,
    width: 200,
    marginTop: 20,
    justifyContent: 'center',
    alignSelf: 'center',

  },
  container_text: {
    marginLeft: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nome: {
    fontSize: 16,
    color: '#000',
  },
  preco: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'green',
    textAlign: 'right'
  },
  descricao: {
    marginTop: 5,
    fontSize: 14,
    fontStyle: 'italic',
  },
});
