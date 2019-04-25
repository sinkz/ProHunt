import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput, PixelRatio, TouchableOpacity, Image } from 'react-native'
import ImagePicker from 'react-native-image-picker';
import PickImage from '../components/PickImage';

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
      
    render() {
        return (
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Nome"
                    maxLength={20}
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder="Descrição"
                    maxLength={20}
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder="Preço"
                    maxLength={20}
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur}
                />
                <PickImage/>

                <TouchableOpacity
                    style={styles.saveButton}>
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
