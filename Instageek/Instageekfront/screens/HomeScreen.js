import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native-web';
import Header from '../components/home/Header';
import Post from '../components/home/Post';

const HomeScreen = () => {
  return(
    <SafeAreaView style={styles.container}>
      <Header/>
      <ScrollView>
        <Post/>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container : {
        backgroundColor: 'white',
        flex: 1,
    }
})

export default HomeScreen;