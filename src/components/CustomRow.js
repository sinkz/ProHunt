import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const CustomRow = ({ nome, descricao, preco }) => (
    <View style={styles.container}>
        {/* <Image source={{ uri: image_url }} style={styles.photo} /> */}
        <View style={styles.container_text}>
            <Text style={styles.nome}>
                {nome}
            </Text>
            <Text style={styles.descricao}>
                {descricao}
            </Text>
            <Text style={styles.price}>
                R$: {preco}
            </Text>
            
        </View>
    </View>
);


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        marginLeft: 16,
        marginRight: 16,
        marginTop: 8,
        marginBottom: 8,
        borderRadius: 5,
        backgroundColor: '#FFF',
        elevation: 2,
    },
    nome: {
        fontSize: 16,
        color: '#000',
    },
    container_text: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 12,
        justifyContent: 'center',
    },
    descricao: {
        fontSize: 14,
        fontStyle: 'italic',
    },
    price: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'green',
        textAlign: 'right'
    }
});

export default CustomRow;