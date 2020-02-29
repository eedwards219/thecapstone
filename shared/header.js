import React from "react";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function Header({ title, navigation }) {
  const openMenu = () => {
    navigation.openDrawer();
  };

  return (
    <ImageBackground
      // source={require("../assets/game_bg.png")}
      style={styles.header}
    >
      {/* <MaterialIcons
        name="menu"
        size={28}
        onPress={openMenu}
        style={styles.icon}
      /> */}
      <View style={styles.headerTitle}>
        <Text style={styles.headerText}>{title}</Text>
        <Image
          source={require("../assets/green-tick-png-8.png")}
          style={styles.headerImage}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    // textAlign: "center",
    padding: 20
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#333",
    letterSpacing: 1,
    textAlign: "center"
  },
  icon: {
    position: "absolute",
    left: 16
  },
  headerTitle: {
    flexDirection: "row",
    padding: 20
  },
  headerImage: {
    width: 26,
    height: 26,
    marginHorizontal: 10
  }
});
