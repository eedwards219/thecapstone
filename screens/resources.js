import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { globalStyles } from "../styles/global";
import { Card, ListItem, Button, Icon } from "react-native-elements";

export default function Resources() {
  return (
    <View style={globalStyles.container}>
      <Card title="Registered?" image={require("../assets/background.png")}>
        <Text style={{ marginBottom: 10 }}>
          If you're unsure if you're registered to vote, use this link to check:
        </Text>
        <Button
          icon={<Icon name="code" color="#ffffff" />}
          buttonStyle={{
            borderRadius: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0
          }}
          title="Check registration on vote.org"
          onPress={() =>
            Linking.openURL("https://www.vote.org/am-i-registered-to-vote")
          }
        />
      </Card>
      <Card title="Registered?" image={require("../assets/background.png")}>
        <Text style={{ marginBottom: 10 }}>
          If you're unsure if you're registered to vote, use this link to check:
        </Text>
        <Button
          icon={<Icon name="code" color="#ffffff" />}
          buttonStyle={{
            borderRadius: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0
          }}
          title="Check registration on vote.org"
          onPress={() =>
            Linking.openURL("https://www.vote.org/am-i-registered-to-vote")
          }
        />
      </Card>
      <Card title="Registered?" image={require("../assets/background.png")}>
        <Text style={{ marginBottom: 10 }}>
          If you're unsure if you're registered to vote, use this link to check:
        </Text>
        <Button
          icon={<Icon name="code" color="#ffffff" />}
          buttonStyle={{
            borderRadius: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0
          }}
          title="Check registration on vote.org"
          onPress={() =>
            Linking.openURL("https://www.vote.org/am-i-registered-to-vote")
          }
        />
      </Card>
    </View>
  );
}
