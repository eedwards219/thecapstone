import React from "react";
import { StyleSheet, Button, TextInput, View, Text } from "react-native";
import { globalStyles } from "../styles/global.js";
import { Formik } from "formik";
import * as yup from "yup";
import FlatButton from "../shared/button.js";

const passengerSchema = yup.object({
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

export default function passengerProfile({ addPassenger }) {
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{ name: "", phoneNumber: "", rating: "" }}
        validationSchema={passengerSchema}
        onSubmit={(values, actions) => {
          actions.resetForm();
          addPassenger(values);
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
              minHeight={60}
              placeholder="Review details"
              onChangeText={props.handleChange("phoneNumber")}
              onBlur={props.handleBlur("phoneNumber")}
              value={props.values.phoneNumber}
            />
            <Text style={globalStyles.errorText}>
              {props.touched.phoneNumber && props.errors.phoneNumber}
            </Text>

            <TextInput
              style={globalStyles.input}
              placeholder="Rating (1 - 5)"
              onChangeText={props.handleChange("rating")}
              onBlur={props.handleBlur("rating")}
              value={props.values.rating}
              keyboardType="numeric"
            />
            <Text style={globalStyles.errorText}>
              {props.touched.rating && props.errors.rating}
            </Text>

            <FlatButton onPress={props.handleSubmit} text="submit" />
          </View>
        )}
      </Formik>
    </View>
  );
}
