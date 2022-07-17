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
import ProfileBlogs from "./ProfileBlogs";

export default function ProfilePage() {
  const [user, setUser] = useState({
    name: "Madushan S.H.K",
    followers: 3,
    following: 3,
    img: "",
  });
  return (
    <View style={styles.mainContainer}>
      <Image
        style={styles.userLogo}
        source={require("../../assets/Madushan.jpeg")}
      />
      <Text style={styles.uName}>{user.name}</Text>
      <Text style={styles.followersDetails}>{user.followers}</Text>
      <Text style={styles.followers}>followers</Text>
      <Text style={styles.followingDetails}>{user.followers}</Text>
      <Text style={styles.following}>following</Text>

      {/* <Button style={styles.viewStats} color="black" title="View Stats" /> */}
      <Pressable style={styles.button}>
        <Text style={styles.text}>View Stats</Text>
      </Pressable>
      <Pressable style={styles.button2}>
        <Text style={styles.text2}>Edit your Profile</Text>
      </Pressable>
      <ProfileBlogs />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "white",
    paddingBottom: 100,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 40,
    elevation: 3,
    backgroundColor: "black",
    width: 160,
    height: 40,
    marginLeft: 40,
    marginTop: 100,
  },
  text: {
    fontSize: 14,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  button2: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 40,
    elevation: 3,
    backgroundColor: "white",
    width: 160,
    height: 40,
    marginLeft: 210,
    marginTop: -40,
    borderWidth: 1,
    borderColor: "grey",
  },
  text2: {
    fontSize: 14,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "grey",
  },
  UserStats: {
    width: 100,
    position: "absolute",
    top: 100,
    left: 130,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 80,
    color: "white",
  },
  userLogo: {
    width: 74,
    height: 74,
    position: "absolute",
    top: 20,
    left: 40,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 40,
  },
  viewStats: {
    width: 94,
    height: 94,
    position: "absolute",
    top: 20,
    left: 200,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 40,
  },
  uName: {
    position: "absolute",
    top: 20,
    left: 130,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 24,
    fontWeight: "bold",
  },
  followersDetails: {
    position: "absolute",
    top: 60,
    left: 130,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 16,
    color: "grey",
  },
  followers: {
    position: "absolute",
    top: 60,
    left: 145,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 16,
    color: "grey",
  },
  followingDetails: {
    position: "absolute",
    top: 60,
    left: 230,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 16,
    color: "grey",
  },
  following: {
    position: "absolute",
    top: 60,
    left: 245,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 16,
    color: "grey",
  },
});
