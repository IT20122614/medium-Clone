import React from "react";
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import {
  Feather,
  Foundation,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

export default function Item({ item }) {
  return (
    <TouchableOpacity style={styles.item}>
      <View>
        <Image style={styles.authorLogo} source={{ uri: item.imageUrl }} />
        <Text style={styles.author}>{item.authorName}</Text>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.date}>{item.date}</Text>
        <Image style={styles.tinyLogo} source={{ uri: item.imageUrl }} />
        <Text style={styles.selected}>Selected for you</Text>
        <Feather
          style={styles.more}
          name="more-vertical"
          size={20}
          color="grey"
        />

        <MaterialCommunityIcons
          style={styles.bookMarks}
          name="bookmark-plus-outline"
          size={24}
          color="grey"
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 15,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: "white",
    borderBottomWidth: 4,
    borderColor: "#eee",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  author: {
    fontSize: 15,
    marginBottom: 8,
    marginLeft: 25,
  },
  date: {
    fontSize: 12,
    marginBottom: 8,
  },
  tinyLogo: {
    width: 75,
    height: 75,
    position: "absolute",
    top: 0,
    left: 270,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  authorLogo: {
    width: 18,
    height: 18,
    position: "absolute",
    top: 1,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 40,
  },
  more: {
    position: "absolute",
    top: 90,
    left: 270,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  bookMarks: {
    position: "absolute",
    top: 90,
    left: 310,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  selected: {
    fontSize: 10,
    marginBottom: 10,
    color: "grey",
  },
});
