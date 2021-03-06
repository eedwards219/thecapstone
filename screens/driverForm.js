import React, { useState } from "react";
import { StyleSheet, Button, TextInput, View, Text } from "react-native";
import { globalStyles } from "../styles/global.js";
import { Formik } from "formik";
import * as yup from "yup";
import FlatButton from "../shared/button.js";
import { addDriver } from "../store/drivers/actions";

const driverSchema = yup.object({
  name: yup
    .string()
    .required()
    .min(3),
  phoneNumber: yup
    .string()
    .required()
    .min(10),
  rating: yup
    .string()
    .required()
    .test("is-num-1-5", "Rating must be a number 1 - 5", val => {
      return parseInt(val) < 6 && parseInt(val) > 0;
    })
});
// handleSubmit = e => {
//   e.preventDefault();
//   console.log("adddriver", this.state);
//   addDriver({
//     name: state.name,
//     email: state.email,
//     phoneNumber: state.phoneNumber,
//     vehicle: state.vehicle
//   });
// };

export default function driverForm({ addDriver }) {
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{ name: "", phoneNumber: "", rating: "" }}
        validationSchema={driverSchema}
        onSubmit={(values, actions) => {
          actions.resetForm();
          addDriver(values);
        }}
      >
        {props => (
          <View>
            <TextInput
              style={globalStyles.input}
              placeholder="Your Name"
              onChangeText={props.handleChange("name")}
              onBlur={props.handleBlur("name")}
              value={props.values.name}
            />
            {/* only if the left value is a valid string, will the right value be displayed */}
            <Text style={globalStyles.errorText}>
              {props.touched.name && props.errors.name}
            </Text>
            <TextInput
              style={globalStyles.input}
              minheight={60}
              placeholder="Your Email Address"
              onChangeText={props.handleChange("email")}
              onBlur={props.handleBlur("email")}
              value={props.values.email}
            />
            <TextInput
              style={globalStyles.input}
              minheight={60}
              placeholder="Your Phone Number"
              onChangeText={props.handleChange("phoneNumber")}
              onBlur={props.handleBlur("phoneNumber")}
              value={props.values.phoneNumber}
            />
            <Text style={globalStyles.errorText}>
              {props.touched.phoneNumber && props.errors.phoneNumber}
            </Text>

            <TextInput
              style={globalStyles.input}
              placeholder="Your Vehicle"
              onChangeText={props.handleChange("vehicle")}
              onBlur={props.handleBlur("vehicle")}
              value={props.values.vehicle}
              keyboardType="numeric"
            />
            <Text style={globalStyles.errorText}>
              {props.touched.vehicle && props.errors.vehicle}
            </Text>

            <FlatButton
              text="submit"
              onPress={() => navigation.navigate("DriverDashboard")}
            />
          </View>
        )}
      </Formik>
    </View>
  );
}

// onSubmit={onSubmit}
