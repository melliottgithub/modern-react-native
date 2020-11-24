import React from "react";
import { Text, StyleSheet, Button, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const HomeScreen = ({ navigation }) => {
  const name = "Michael";
  return (
    <View>
      <Text style={styles.text}>Hi {name}!</Text>
      <Button
        onPress={() => navigation.navigate("Components")}
        title="Go to Components Demo"
      />
      <Button title="Go to list" onPress={() => navigation.navigate("List")} />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
  },
  listText: {
    fontSize: 25,
  },
});

export default HomeScreen;
