import React, { PureComponent } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native'
import PickImage from './../components/PickImage';
import FirebaseService from '../services/FirebaseService';

let addItem = async (produto) => {
    try {
        await FirebaseService.addProduct(produto);
    } catch (err) {
        console.log("Erro ao salvar produto" + err);
    }
};

let uploadImage = async ({ img }) => {
    console.log(img);
    if (img) {
        try {
            return await FirebaseService.uploadImage(img);
        } catch (err) {
            console.log("Erro ao salvar imagem" + err);
        }
    }
};

export default class Product extends PureComponent {

    static navigationOptions = {
        title: 'Cadastro de Produtos'
    };

    state = {
        produto: {
            product_id: Math.random().toString(36).substring(7),
            nome: '',
            descricao: '',
            preco: '',
            img: ''
        },
        isLoading: false
    }

    handleSubmit = async () => {
        this.setState({ isLoading: true })

        let url = await uploadImage(this.state.produto);
        this.handleImage(url);
        await addItem(this.state.produto);

        this.setState({ isLoading: false })
        this.props.navigation.navigate('Home')
    };

    pickImage = (value) => {
        this.handleImage(value.uri)
    }

    handleImage = (url) => {
        if (!url)
            url = 'http://www.sparkawards.com/wp-content/uploads/2011/05/Product_Lg_Type.jpg';

        this.setState(prevState => ({
            produto: {
                ...prevState.produto,
                img: url
            }
        }));
    }

    render() {
        return (
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Nome"
                    maxLength={20}
                    onChangeText={(text) => this.setState(prevState => ({
                        produto: {
                            ...prevState.produto,
                            nome: text
                        }
                    }))}

                />
                <TextInput
                    style={styles.textInput}
                    placeholder="Descrição"
                    maxLength={20}
                    onChangeText={(text) => this.setState(prevState => ({
                        produto: {
                            ...prevState.produto,
                            descricao: text
                        }
                    }))}
                />
                <TextInput
                    keyboardType='numeric'
                    style={styles.textInput}
                    placeholder="Preço"
                    maxLength={20}
                    onChangeText={(text) => this.setState(prevState => ({
                        produto: {
                            ...prevState.produto,
                            preco: text
                        }
                    }))}
                />
                <PickImage pick={(e) => this.pickImage(e)} />

                <TouchableOpacity
                    style={styles.saveButton}
                    onPress={this.handleSubmit}>
                    <Text style={styles.saveButtonText}>Salvar</Text>
                </TouchableOpacity>
                {this.state.isLoading &&
                    <View >
                        <ActivityIndicator size='large' />
                    </View>
                }
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
