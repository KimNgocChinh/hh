import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export default function App() {
  return (
    <View style={styles.container}>

      
        <Text
        style={{
          backgroundColor: "blue",
          width: 100,
          textAlign: "center",
          paddingTop: 30,
          height: 80,
        }}
      >
        Square 1
      </Text>
      <Text
        style={{
          backgroundColor: "pink",
          width: 100,
          textAlign: "center",
          paddingTop: 30,
          height: 90,
        }}
      >
        Square 2
      </Text>
      <Text
        style={{
          backgroundColor: "green",
          width: 100,
          textAlign: "center",
          paddingTop: 30,
          height: 90,
        }}
      >
        Square 3
      </Text>

      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: 'space-around',
    flexDirection: 'row',

    
  },

   
});
