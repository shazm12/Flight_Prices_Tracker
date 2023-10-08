import { StatusBar } from "expo-status-bar";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import SearchForum from "./src/components/SearchForum";
import { LinearGradient } from "expo-linear-gradient";
import dummyData from "./assets/data.json";
import FlightOptionItem from "./src/components/FlightOptionItem";
import { useState } from "react";

export default function App() {
  const [items, setItems] = useState([]);

  const onSearch = (data) => {

    setItems(dummyData);

  }


  return (
    <LinearGradient colors={["white", "#E0EFFF"]} style={styles.container}>
      <SafeAreaView>
        <SearchForum onSearch={onSearch} />
      </SafeAreaView>
      
      <FlatList
        data={items}
        renderItem={({ item }) => <FlightOptionItem flight={item} />}
        showsHorizontalScrollIndicator={false}
      />

    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
