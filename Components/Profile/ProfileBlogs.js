import React, { useState } from "react";
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Item from "../Item";

export default function ProfileBlogs() {
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

  return (
    <View style={styles.profileBlog}>
      <FlatList data={items} renderItem={({ item }) => <Item item={item} />} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  profileBlog: {
    marginTop: 20,
  },
  title: {
    fontSize: 32,
  },
});
