import { StatusBar } from "expo-status-bar";
import { Alert, FlatList, SafeAreaView, StyleSheet, Text, View, ActivityIndicator } from "react-native";
import SearchForum from "./src/components/SearchForum";
import { LinearGradient } from "expo-linear-gradient";
import FlightOptionItem from "./src/components/FlightOptionItem";
import { useEffect, useState } from "react";
import { searchFlights, getAirportsData } from "./src/service/api";

export default function App() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [airportsData, setAirportsData] = useState([]);
  const [ fromLocation, setFromLocation ] = useState('');
  const [toLocation, setToLocation ] = useState('');

  const onSearch = async (data) => {
    setLoading(true);
    setItems([]);
    setFromLocation(data.from);
    setToLocation(data.to);
    const response = await searchFlights(data);
    if (response.error) {
      Alert.alert(response.error);
    } else {
      setItems(response.data);
    }
    setLoading(false);
  };

  const getAndSetAirportsDataFromAPI = async () => {
    const response = await getAirportsData();
    if (response.error) {
      Alert.alert("There is some problem connecting to server!");
      return;
    }
    setAirportsData(response.data?.data);
  };

  useEffect(() => {
    getAndSetAirportsDataFromAPI();
  }, []);

  if (airportsData.length === 0 ) {
    return (
      <SafeAreaView style={{ flex: 1, flexDirection: 'column', justifyContent: "center", alignContent: "center" }}>
        <ActivityIndicator />
        <Text style={{ alignSelf: 'center' , fontSize: 20, fontWeight: "bold" }}>Loading App...</Text>
      </SafeAreaView>
    );
  }

  return (
    <LinearGradient colors={["white", "#E0EFFF"]} style={styles.container}>
      <SafeAreaView>
        <SearchForum onSearch={onSearch} airportsData={airportsData} />
      </SafeAreaView>

      {loading && (
        <View style={{ flexDirection: "row", marginTop: 60, gap: 5,  padding: 10, justifyContent: 'center', alignContent: 'center' }}>
          <ActivityIndicator />
          <Text> Searching for the best prices...</Text>
        </View>
      )}

      <FlatList
        data={items}
        style={{ marginVertical: 8}}
        renderItem={({ item }) => <FlightOptionItem flight={item} from={fromLocation} to={toLocation} />}
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
