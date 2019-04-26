import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const CustomRow = ({value, navigateDetails}) => (
    <TouchableOpacity onPress={() => navigateDetails(value)}>
        <View style={styles.container}>
            {/* <Image source={{ uri: image_url }} style={styles.photo} /> */}
            <View style={styles.container_text}>
                <Text style={styles.nome}>
                    {value.nome}
                </Text>
                <Text style={styles.descricao}>
                    {value.descricao}
                </Text>
                <Text style={styles.price}>
                    R$: {value.preco}
                </Text>
            </View>
        </View>
    </TouchableOpacity>
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
        marginTop: 5,
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