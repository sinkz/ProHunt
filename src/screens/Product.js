import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native'
import PickImage from '../components/PickImage';
import { db } from '../config/config';


let addItem = (nome, descricao, preco, img) => {
    db.ref('/products').push({
        nome,
        preco,
        descricao,
        img
    }).then((data) => {
        //success callback
        console.log('data ', data)
    }).catch((error) => {
        //error callback
        console.log('error ', error)
    });
};

export default class Product extends Component {
    static navigationOptions = {
        title: 'Cadastro de Produtos',
        headerStyle: {
            backgroundColor: '#01a699',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };

    state = {
        nome: '',
        descricao: '',
        preco: '',
        img: null
    }

    handleSubmit = () => {
        addItem(this.state.nome, this.state.descricao, this.state.preco, this.state.img);
        Alert.alert('Item saved successfully');
    };

    pickImage(value) {
        Alert.alert('Floating Button Clicked' + value.uri);
    }

    render() {
        return (
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Nome"
                    maxLength={20}
                    onChangeText={(text) => this.setState({ nome: text })}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder="Descrição"
                    maxLength={20}
                    onChangeText={(text) => this.setState({ descricao: text })}
                />
                <TextInput
                    keyboardType='numeric'
                    style={styles.textInput}
                    placeholder="Preço"
                    maxLength={20}
                    onChangeText={(text) => this.setState({ preco: text })}
                />
                <PickImage pick={this.pickImage} />

                <TouchableOpacity
                    style={styles.saveButton}
                    onPress={this.handleSubmit}>
                    <Text style={styles.saveButtonText}>Salvar</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    inputContainer: {
        padding: 15,
    },
    textInput: {
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
    },
    saveButton: {
        borderWidth: 1,
        borderColor: '#01a699',
        backgroundColor: '#01a699',
        padding: 15,
        marginTop: 15
    },
    saveButtonText: {
        color: '#FFFFFF',
        fontSize: 15,
        textAlign: 'center',
    }
});
