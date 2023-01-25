import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Post = () => {
    const [Lugar, setLugar] = useState();
    const [Hashtag, setHashtag] = useState();
    const [Descricao, setDescricao] = useState();
    const [Imagem, setImagem] = useState();

    const buscaDados = async () => {
        await axios.get('http://localhost:1337/posts').then(response =>{
            console.log(response.data)
            setLugar(response.data[0].place)
            setHashtag(response.data[0].hashtags)
            setDescricao(response.data[0].description)
            setImagem(response.data[0].image[0].url)
        })
    }

    buscaDados()

  return(
    <View style={{marginBottom: 30}}>
        <View style = {styles.postH}>
            <View>
                <Text>{Lugar}</Text>
                <Image style ={styles.logo} source={{uri: `http://localhost:1337${Imagem}`}}/>
                <Text>{Descricao}</Text>
                <Text>{Hashtag}</Text>
            </View>
        </View>
    </View>
);
}

const styles = StyleSheet.create({
    postH: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginLeft: 500,
    },

    logo: {
        width: 1000,
        height: 500,
        resizeMode: 'contain',
    }
})

export default Post;