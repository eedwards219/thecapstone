import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { AppParamList } from "./AppParamList";
import { AntDesign, Ionicons, EvilIcons } from "@expo/vector-icons";
import HomeStack from "./HomeStack";
// import { SearchStack } from "./SearchStack";
import Home from "../screens/home";

const Tabs = createBottomTabNavigator();

const AppTabs = () => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = "home";
            return <AntDesign name={"home"} size={size} color={color} />;
          } else if (route.name === "Profile") {
            return <EvilIcons name={"search"} size={size} color={color} />;
          } else if (route.name === "Resources") {
            return <EvilIcons name={"search"} size={size} color={color} />;
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        }
      })}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray"
      }}
    >
      <Tabs.Screen name="Home" component={HomeStack} />
      <Tabs.Screen name="Profile" component={ProfileStack} />
      <Tabs.Screen name="Resources" component={ResourcesStack} />
    </Tabs.Navigator>
  );
};
export default AppTabs;
