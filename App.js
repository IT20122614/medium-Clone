import * as React from "react";
import { Text, View } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomePage from "./Components/HomePage";
import ProfilePage from "./Components/Profile/ProfilePage";
import BookMark from "./Components/Bookmark/BookMark";
import ExplorePage from "./Components/Explore/ExplorePage";
const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === "Home") {
              return (
                <Ionicons
                  name={focused ? "ios-home" : "ios-home"}
                  size={size}
                  color={color}
                />
              );
            } else if (route.name === "Explore") {
              return (
                <Ionicons
                  name={focused ? "search" : "search"}
                  size={size}
                  color={color}
                />
              );
            } else if (route.name === "Your lists") {
              return (
                <Ionicons
                  name={focused ? "bookmarks-outline" : "bookmarks-outline"}
                  size={size}
                  color={color}
                />
              );
            } else if (route.name === "profile") {
              return (
                <MaterialCommunityIcons
                  name="face-man-profile"
                  size={size}
                  color={color}
                />
              );
            }
          },
          tabBarInactiveTintColor: "gray",
          tabBarActiveTintColor: "black",
        })}
      >
        <Tab.Screen name="Home" component={HomePage} />
        <Tab.Screen name="Explore" component={ExplorePage} />
        <Tab.Screen name="Your lists" component={BookMark} />
        <Tab.Screen name="profile" component={ProfilePage} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
