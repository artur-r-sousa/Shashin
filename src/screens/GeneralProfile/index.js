import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import Post from '../Post/index.js'

export default function GeneralProfile() {
    return (
      <View style={styles.container}>
          <View style={styles.title}>
              <Text style={{fontSize: 30}}>Shashin</Text>
          </View>  

          <View style={{ flexDirection: 'row'}}>
              <Image
                source={require('../../../assets/default.png')}
                style={{
                  height: 100,
                  width: 100
                }}
              />

              <View>
                <Text> User Name </Text>
                <Text> User age, example: 20 </Text>
                <Text> a brief description which may include anything </Text>
                <Text> other links 1</Text>
                <Text> other links 2</Text>
                <Text> other links 3</Text>
              </View>
          </View>

          <View style={{paddingVertical: 20, paddingHorizontal: 10, paddingLeft: 25}}>
            <Text>_______________________________________________________________</Text>
          </View>
              
          

          <View style={{flexDirection: 'row'}}>
              <Post></Post>

          </View>
          <View style={{flexDirection: 'row'}}>
              <Post></Post>

          </View>
          <View style={{flexDirection: 'row'}}>
              <Post></Post>

          </View>
          <View style={{flexDirection: 'row'}}>
              <Post></Post>

          </View>

          <View style={{flexDirection: 'row'}}>
              <Post></Post>

          </View>

        <StatusBar style="auto" />

      </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      marginTop: 50
    },

    title: {
        marginVertical: 15,
        alignItems: 'center'
    },

    avatar: {
      borderRadius: 5,
      alignItems: 'flex-start',
      
    }  
});
  