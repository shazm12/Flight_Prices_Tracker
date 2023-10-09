import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import currency from "currency.js";
const FlightOptionItem = ({ flight, from , to }) => {
  return (
    <View style={styles.container}>
      <View style={styles.routes}>
        <View style={styles.route}>
            <View style={styles.timeContainer}>
              <View>
                <Text style={styles.time}>{flight.from.departAt}</Text>
                <Text  style={styles.location}>{from}</Text>
              </View>
              <Ionicons name="airplane" size={16} color="gray" />
              <View>
                <Text style={styles.time}>{flight.from.arriveAt}</Text>
                <Text  style={styles.location}>{to}</Text>
             </View>   
          </View>
          <Text style={styles.airline}>{flight.from.airline}</Text>
        </View>

        <View style={styles.route}>
          <View style={styles.timeContainer}>
              <View>
                <Text style={styles.time}>{flight.to.departAt}</Text>
                <Text  style={styles.location}>{to}</Text>
              </View>
              <Ionicons name="airplane" size={16} color="gray" />
              <View>
                <Text style={styles.time}>{flight.to.arriveAt}</Text>
                <Text  style={styles.location}>{from}</Text>
             </View>   
          </View>
          <Text style={styles.airline}>{flight.to.airline}</Text>
        </View>
      </View>

      <Text style={styles.price}>
        {currency(Number(flight.price.substring(1)) * 87.69, {
          symbol: "₹",
          precision: 0,
          separator: ",",
        }).format()}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    marginVertical: 5,
    marginHorizontal: 10,
    padding: 15,
    borderRadius: 10,
  },
  routes: {
    flex: 1,
    borderRightWidth: 1,
    borderColor: "gainsboro",
    gap: 10,
    paddingRight: 10,
  },
  route: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  timeContainer: {
    flexDirection: "row",
    gap: 5,
  },
  time: {
    fontWeight: "bold",
    fontSize: 16,
    color: "dimgray",
  },
  location: {
    fontSize: 12,
    color: "dimgray",
  },
  airline: {
    color: "gray",
  },
  price: {
    width: 75,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default FlightOptionItem;
