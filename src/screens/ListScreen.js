import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Friend #1", age: 27 },
    { name: "Friend #2", age: 21 },
    { name: "Friend #3", age: 32 },
    { name: "Friend #4", age: 44 },
    { name: "Friend #5", age: 28 },
    { name: "Friend #6", age: 19 },
    { name: "Friend #7", age: 64 },
    { name: "Friend #8", age: 33 },
    { name: "Friend #9", age: 52 },
  ];
  return (
    <FlatList
      //horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={({ name }) => name}
      data={friends}
      renderItem={({ item }) => {
        return (
          <View>
            <Text>List Screen</Text>
            <Text style={styles.textStyle}>
              {item.name} - Age {item.age}
            </Text>
          </View>
        );
      }}
    ></FlatList>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 5,
  },
});

export default ListScreen;
