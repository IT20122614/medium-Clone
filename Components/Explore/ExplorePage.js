import React, { useState, useEffect } from "react";
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Button,
  Pressable,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { EvilIcons } from "@expo/vector-icons";
import Item from "../Item";

export default function ExplorePage() {
  const [search, setSearch] = useState("");
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    function getBlogs() {
      axios
        .get("http://10.0.2.2:8081/blogs/")
        .then((result) => {
          console.log(result.data);
          setItems(result.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    getBlogs();
  }, []);

  const searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource
      // Update FilteredDataSource
      const newData = masterDataSource.filter(function (item) {
        const itemData = item.title
          ? item.title.toUpperCase()
          : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };

  const ItemView = ({ item }) => {
    return (
      // Flat List Item
      <Text style={styles.itemStyle} onPress={() => getItem(item)}>
        {item.id}
        {"."}
        {item.title.toUpperCase()}
      </Text>
    );
  };

  const ItemSeparatorView = () => {
    return (
      // Flat List Item Separator
      <View
        style={{
          height: 0.5,
          width: "100%",
          backgroundColor: "#C8C8C8",
        }}
      />
    );
  };

  const getItem = (item) => {
    // Function for click on an item
    alert("Id : " + item.id + " Title : " + item.title);
  };
  return (
    <View style={styles.mainView}>
      <TextInput
        style={styles.searchBarStyles}
        onChangeText={(text) => searchFilterFunction(text)}
        placeholder="Search Medium"
      />
      <View>
        <EvilIcons
          style={styles.searchIcon}
          name="search"
          size={24}
          color="black"
        />
      </View>
      <FlatList
        style={styles.searchContent}
        data={items}
        renderItem={({ item }) => <Item item={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    paddingBottom: 100,
    backgroundColor: "white",
  },
  searchIcon: {
    marginTop: -28,
    marginLeft: 30,
  },
  itemStyle: {
    padding: 10,
  },
  searchContent: {
    marginBottom: 40,
    marginTop: 40,
  },
  searchBarStyles: {
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: "gainsboro",
    borderRadius: 10,
    paddingLeft: 40,
    height: 40,
  },
});
