import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState } from "react";

const AiportCodeInput = ({ placeholder, value, setValue, airportsData }) => {
  const [showText, setShowText] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleSearch = (text) => {
    setValue(text);
    setShowText(text);
    if (text == "" || text == null) {
      setSuggestions([]);
      return;
    }
    let filteredAirports = airportsData.filter((airport) =>
      airport?.city?.toLowerCase().includes(text?.toLowerCase())  ||
      airport?.state?.toLowerCase().includes(text?.toLowerCase()) ||
      airport?.name?.toLowerCase().includes(text?.toLowerCase()) 
    );

    if (filteredAirports == null || filteredAirports.length == 0) {
      let filteredAirportsByCode = airportsData.filter((airport) =>
        airport?.code?.toLowerCase().includes(text?.toLowerCase())
      );
      if (filteredAirportsByCode == null) return;
      setSuggestions(filteredAirportsByCode);
      return;
    }

    setSuggestions(filteredAirports);
  };

  const handleAirportSelect = (airport) => {
    setShowText(`${airport.name} - ${airport.code}`);
    setValue(airport.code);
    setSuggestions([]);
  };

  return (
    <View style={{ marginVertical:  2 }}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={handleSearch}
        value={showText}
      />
      <FlatList
        data={suggestions}
        style={{
          transform: [{ scale : suggestions.length > 0 ?  1: 0 }],
          borderWidth: 1,
          padding: 8,
        }}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => item.code + "-" + index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            key={item.name + "-" + item.code}
            style={{ borderBottomColor: "black", marginVertical: 8 }}
            onPress={() => handleAirportSelect(item)}
          >
            <Text>
              {item.name} - {item.code}
            </Text>
            <View
              style={{ width: "100%", height: 1, marginTop: 8, borderRadius: 25, backgroundColor: "#121212" }}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    padding: 8,
    marginVertical: 4,
    borderWidth: 1,
    borderColor: "gainsboro",
  },
});

export default AiportCodeInput;
