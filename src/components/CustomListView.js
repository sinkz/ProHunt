import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import CustomRow from './CustomRow';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});


const CustomListview = ({ itemList }) => (
    <View style={styles.container}>
        <FlatList
            data={itemList}
            renderItem={({ item }) =>
                <CustomRow
                    nome={item.nome}
                    descricao={item.descricao}
                    preco={item.preco} />
            }
        />
    </View>
);

export default CustomListview;