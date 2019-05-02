import { db } from '../config/config';
import RNFetchBlob from 'react-native-fetch-blob'
import { Platform } from 'react-native'

// Prepare Blob support
const Blob = RNFetchBlob.polyfill.Blob
const fs = RNFetchBlob.fs
window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest
window.Blob = Blob

export default class FirebaseService {
    static addProduct = async ({ nome, preco, descricao, img, product_id }) => {
        try {
            let query = await db.database().ref('/products').push({
                nome,
                preco,
                descricao,
                img,
                product_id
            });
            return query;
        } catch (erro) {
            console.log("Erro ao salvar produto: " + erro);
        }
    }

    static getProducts = (callback) => {
        let query = db.database().ref('/products').on('value', snapshot => {
            if (snapshot.exists()) {
                let data = snapshot.val();
                let items = Object.values(data);
                callback(items);
            }else{
                callback("");
                console.log("Não existe");
            }
        }, error => {
            console.log(error);
        });
   
        return query;
    }

    static deleteProduct = async (product_id) => {
        let querySnapshot = await db.database().ref('/products').orderByChild("product_id").equalTo(product_id).once("value");
        console.log(await querySnapshot.val());
        console.log(querySnapshot.getRef());
        querySnapshot.forEach((doc) => {
            doc.getRef().remove().then(() => {
                console.log("Removido!");
            })
        });
    }

    static uploadImage = async (img, mime = 'application/octet-stream') => {
        const uploadUri = Platform.OS === 'ios' ? img.replace('file://', '') : img
        let uploadBlob = null
        try {
            const imageRef = await db.storage().ref('Images').child(Math.random().toString(36).substring(7) + '_image.png');
            let data = await fs.readFile(uploadUri, 'base64');
            let blob = await Blob.build(data, { type: `${mime};BASE64` });
            uploadBlob = blob
            await imageRef.put(blob, { contentType: mime });
            await uploadBlob.close();
            let url = await imageRef.getDownloadURL();
            return url;
        } catch (error) {
            console.log("Erro ao fazer upload da imagem: " + error);
        }
    }
}
