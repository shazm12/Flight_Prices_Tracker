import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import SearchForum from './src/components/SearchForum';
export default function App() {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <SearchForum />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
