import React, { useState } from "react";
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
import { EvilIcons, MaterialIcons } from "@expo/vector-icons";

export default function BookMark() {
  return (
    <View style={styles.mainView}>
      <Pressable style={styles.button}>
        <Text style={styles.text}>New list</Text>
      </Pressable>
      <View style={styles.cardStyle}>
        <View style={styles.TextCard}>
          <Text style={styles.cardText}>
            Create a list to easily curate and share stories
          </Text>
        </View>
        <EvilIcons
          style={styles.closeBtnCard}
          name="close"
          size={24}
          color="white"
        />
        <Pressable style={styles.buttonStartList}>
          <Text style={styles.textStartList}>Start a list</Text>
        </Pressable>
        <MaterialIcons
          style={styles.listBookmark}
          name="bookmarks"
          size={24}
          color="white"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardStyle: {
    paddingBottom: 40,
    paddingRight: 10,
    backgroundColor: "green",
    margin: 20,
    borderRadius: 4,
    paddingTop: 10,
    paddingLeft: 10,
  },
  listBookmark: {
    marginTop: -35,
    marginLeft: 290,
  },
  cardText: {
    color: "white",
    fontSize: 18,
  },
  TextCard: {
    width: 280,
  },
  closeBtnCard: {
    marginTop: -40,
    marginLeft: 290,
  },
  mainView: {
    paddingBottom: 100,
    backgroundColor: "white",
  },
  buttonStartList: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 40,
    elevation: 3,
    backgroundColor: "black",
    width: 140,
    height: 40,
    marginLeft: 8,
    marginTop: 60,
  },
  textStartList: {
    fontSize: 14,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 40,
    elevation: 3,
    backgroundColor: "green",
    width: 100,
    height: 40,
    marginLeft: 280,
    marginTop: -0,
  },
  text: {
    fontSize: 14,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
