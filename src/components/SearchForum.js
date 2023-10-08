import React, { useState } from 'react'
import {Text, View, StyleSheet, TextInput, Pressable, TouchableOpacity } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons'; 

const SearchForum = ({ onSearch }) => {


  const [from , setFrom] = useState('');
  const [to, setTo ] = useState('');

  const [isDepartDatePickerVisible, setDepartDatePickerVisibility] = useState(false);
  const [isReturnDatePickerVisible, setReturnDatePickerVisibility] = useState(false);


  const [departDate, setDepartDate ] = useState(new Date());
  const [returnDate, setReturnDate ] = useState(new Date());


  const onSearchPress = () => {
    onSearch({ departDate , from , returnDate, to });  
  }


  const hideDatePicker = (stateToChange) => {
    if(stateToChange === "depart")  {
      setDepartDatePickerVisibility(false);
    }
    else {
      setReturnDatePickerVisibility(false);
    }
  };

  const handleDateConfirm = (date, stateToChange) => {
    if(stateToChange === "depart") {
      setDepartDate(date || new Date());
      hideDatePicker("depart");
    }
    else {
      setReturnDate(date || new Date());
      hideDatePicker("return");
    }
  };

  const handleReturnDateConfirm = (date) => {
    setReturnDate(date || new Date());
    hideDatePicker("return");
  };

  const onPressDatePicker = (stateToChange) => {
    if(stateToChange === "depart") {
      setDepartDatePickerVisibility(true);
    }
    else {
      setReturnDatePickerVisibility(true);
    }
  }



  return (
    <View style={styles.container}>
        <Text style={styles.title}>Search the best prices for your next trip</Text>
        <TextInput value={from} onChangeText={setFrom} style={styles.input} placeholder='From' />
        <TextInput value={to} onChangeText={setTo} style={styles.input} placeholder='To' />
       
        <DateTimePickerModal
          isVisible={isDepartDatePickerVisible}
          mode="date"
          onConfirm={(date) =>  handleDateConfirm(date, "depart") }
          onCancel={() => hideDatePicker("depart")}
          minimumDate={departDate}

        />
        <DateTimePickerModal
          isVisible={isReturnDatePickerVisible}
          mode="date"
          onConfirm={(date) => handleDateConfirm(date, "return")}
          onCancel={() => hideDatePicker("return")}
          minimumDate={returnDate}

        />
        <View style={styles.dateContainer}>
          <TouchableOpacity onPress={() => onPressDatePicker("depart")} style={styles.date}>
            <MaterialIcons name="date-range" size={20} color="black" />
            <Text>{departDate.toLocaleDateString() || 'No Date Selected!'}</Text>
          </TouchableOpacity>
          <View style={styles.planeIconContainer}>
            <Text>--</Text>
            <FontAwesome5 style={{marginTop: 2, marginHorizontal: 2 }}  name="plane" size={16} color="black" />
            <Text>--</Text>
          </View>
          <TouchableOpacity onPress={() => onPressDatePicker("return")} style={styles.date}>
            <MaterialIcons name="date-range" size={20} color="black" />
            <Text>{returnDate.toLocaleDateString() || 'No Date Selected!'}</Text>
          </TouchableOpacity>  
        
        </View>
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
    },

    planeIconContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },

    dateContainer : {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      marginVertical: 12
    },

    date: {

      backgroundColor: "#eeeeee",
      padding: 8,
      borderRadius: 5,
      shadowColor: "#000",
      flexDirection: 'row',
      gap: 5,
      alignItems: 'center',
      //shadows
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
      
      elevation: 3,

    }

});

export default SearchForum;
