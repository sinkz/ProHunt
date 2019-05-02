import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import CustomRow from './CustomRow';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});


const CustomListview = ({ itemList, onPressNavigateDetails }) => (
    <View style={styles.container}>
        <FlatList
            data={itemList}
            renderItem={({ item }) =>
                <CustomRow value={item}
                    navigateDetails={onPressNavigateDetails} />
            }
        />
    </View>
);

export default CustomListview;