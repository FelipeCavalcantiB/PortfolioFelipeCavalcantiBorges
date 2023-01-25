import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const Header = () => {
  return(
    <View style={styles.container}>
        <TouchableOpacity>
            <Image style={styles.logo} source = {require('../../assets/logoC.png')}/>
        </TouchableOpacity>

        <View style={styles.iconsContainer}>
            <TouchableOpacity>
                <Image style = {styles.icons} source = {require('../../assets/add.png')}/>
            </TouchableOpacity>

            <TouchableOpacity>
                <Image style = {styles.icons} source = {require('../../assets/like@3x.png')}/>
            </TouchableOpacity>

            <TouchableOpacity>
                <Image style = {styles.icons} source = {require('../../assets/more@3x.png')}/>
            </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginHorizontal: 500,
    },

    logo: {
        width: 200,
        height: 50,
        resizeMode: 'contain',
    },

    icons: {
        width: 30,
        height: 30,
        resizeMode: 'contain',
    },

    iconsContainer: {
        flexDirection: 'row'
    }
})

export default Header;