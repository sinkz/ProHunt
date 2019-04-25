
import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput, PixelRatio, TouchableOpacity, Image } from 'react-native'
import ImagePicker from 'react-native-image-picker';

export default class PickImage extends Component {
    state = {
        avatarSource: null,
    };

    constructor(props) {
        super(props);
        this.selectPhotoTapped = this.selectPhotoTapped.bind(this);
    };

    selectPhotoTapped() {
        const options = {
            title: 'Selecione uma imagem',
            quality: 1.0,
            maxWidth: 500,
            maxHeight: 500,
            storageOptions: {
                skipBackup: true,
            },
        };
        ImagePicker.showImagePicker(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled photo picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                let source = { uri: response.uri };
                this.setState({
                    avatarSource: source,
                });
            }
        });
    }
    render() {
        return (
            <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)} style={styles.container}>
                <View
                    style={[
                        styles.avatar,
                        styles.avatarContainer,
                    ]}>
                    {this.state.avatarSource === null ?
                        (<Text>Imagem</Text>)
                        :
                        (<Image style={styles.avatar} source={this.state.avatarSource} />)
                    }
                </View>
            </TouchableOpacity>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    avatarContainer: {
        borderColor: 'gray',
        borderWidth: 1 / PixelRatio.get(),
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
    },
    avatar: {
        borderRadius: 75,
        width: 150,
        height: 150,
    },
});