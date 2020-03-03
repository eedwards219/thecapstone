import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Modal,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  ImageBackground
} from "react-native";
import { globalStyles } from "../styles/global";
import { MaterialIcons } from "@expo/vector-icons";
// import Card from "../shared/card";
import ReviewForm from "./reviewForm";
import { fetchAllDrivers } from "../store/drivers/actions";
import { fetchAllPassengers } from "../store/passengers/actions";
import { fetchAllRides } from "../store/rides/actions";
import { connect } from "react-redux";
import { ListItem, Button, Icon } from "react-native-elements";
import Card from "../shared/card";
import DriverForm from "./driverForm";
import PassengerForm from "./passengerForm";
import FlatButton from "../shared/button.js";

function SignIn(props) {
  useEffect(() => {
    props.fetchAllRides();
    props.fetchAllDrivers();
    props.fetchAllPassengers();
  }, []);

  const [drivers, setDrivers] = useState(drivers);
  const [passengers, setPassengers] = useState(passengers);
  const [driverModalOpen, setDriverModalOpen] = useState(false);
  const [passengerModalOpen, setPassengerModalOpen] = useState(false);

  const addDriver = driver => {
    driver.key = Math.random().toString();
    setDrivers(currentDriver => {
      return [driver, ...currentDriver];
    });
    setDrivers(currentDriver);
  };
  const addPassenger = passenger => {
    passenger.key = Math.random().toString();
    setPassengers(currentPassenger => {
      return [passenger, ...currentPassenger];
    });
    setPassengers(currentPassenger);
  };
  // console.log("drivers", props.drivers);

  return (
    <View style={globalStyles.container}>
      <Modal visible={driverModalOpen} animationType="slide">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.modalContent}>
            <MaterialIcons
              name="close"
              size={24}
              style={{ ...styles.modalToggle, ...styles.modalClose }}
              onPress={() => setDriverModalOpen(false)}
            />
            <DriverForm addDriver={addDriver} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      <Modal visible={passengerModalOpen} animationType="slide">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.modalContent}>
            <MaterialIcons
              name="close"
              size={24}
              style={{ ...styles.modalToggle, ...styles.modalClose }}
              onPress={() => setPassengerModalOpen(false)}
            />
            <PassengerForm addPassenger={addPassenger} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      {/* <MaterialIcons
        name="add"
        size={24}
        style={styles.modalToggle}
        onPress={() => setModalOpen(true)}
      /> */}

      {/* <Card title="CARD WITH DIVIDER" style={globalStyles.container}> */}
      <View style={globalStyles.container}>
        <Card>
          <FlatButton
            text="I Want to be a Driver"
            style={globalStyles.button}
            onPress={() => setDriverModalOpen(true)}
          ></FlatButton>
          <FlatButton
            text="I need a Ride"
            style={globalStyles.button}
            onPress={() => setPassengerModalOpen(true)}
          ></FlatButton>
        </Card>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  modalToggle: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#f2f2f2",
    padding: 10,
    borderRadius: 10,
    alignSelf: "center"
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0
  },
  modalContent: {
    flex: 1
  }
});
const mapStateToProps = state => {
  return {
    drivers: state.drivers.all.filter(driver => driver.id)
  };
};
export default connect(mapStateToProps, {
  fetchAllRides,
  fetchAllDrivers,
  fetchAllPassengers
})(SignIn);

{
  /* <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => props.navigation.push("ReviewDetails")}
          >
            <Card>
              <Text style={globalStyles.titleText}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      /> */
}
