import React, { useState } from 'react'
import {Text, View, StyleSheet, TextInput, Pressable } from 'react-native';

const SearchForum = () => {


  const [from , setFrom] = useState('');
  const [to, setTo ] = useState('');

  const onSearchPress = () => {
    console.log("Searching for");
  }


  return (
    <View style={styles.container}>
        <Text style={styles.title}>Search the best prices for your next trip</Text>
        <TextInput value={from} onChangeText={setFrom} style={styles.input} placeholder='From' />
        <TextInput value={to} onChangeText={setTo} style={styles.input} placeholder='To' />
        <Pressable style={styles.searchBtn} onPress={onSearchPress}>
          <Text>Search</Text>
        </Pressable>
    </View>
  )
}


const styles = StyleSheet.create({
    container : {
        marginTop: 50,
        marginHorizontal: 10,
        backgroundColor: "white",
        padding: 10,
        borderRadius: 10,
        // Shadows
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,

        elevation: 14,
    },

    title: {
      alignSelf: 'center',
      fontWeight: 'bold',
      fontSize: 16,
      marginVertical: 15
    },

    input: {
      borderWidth: 1,
      borderColor: 'gainsboro',
      padding: 10,
      marginVertical: 5,
      borderRadius: 5
    },

    searchBtn: {
      alignSelf: 'center',
      padding: 10,
    }

});

export default SearchForum;
