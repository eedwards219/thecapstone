import React, { useState } from "react";
import { StyleSheet, Button, TextInput, View, Text } from "react-native";
import { globalStyles } from "../styles/global.js";
import { Formik } from "formik";
import * as yup from "yup";
import FlatButton from "../shared/button.js";
import { CheckBox } from "react-native-elements";
import { addPassengers } from "../store/passengers/actions";
import { connect } from "react-redux";

const passengerSchema = yup.object({
  name: yup
    .string()
    .required()
    .min(3),
  phoneNumber: yup
    .string()
    .required()
    .min(10),
  email: yup
    .string()
    .required()
    .min(3)
});
function PassengerForm({ addPassenger }) {
  const [checkboxChecked, setcheckboxChecked] = useState(false);

  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{
          name: "",
          phoneNumber: "",
          email: "",
          setcheckboxChecked: "false"
        }}
        validationSchema={passengerSchema}
        onSubmit={(values, actions) => {
          console.log("values", values);

          actions.resetForm();
          addPassengers(values);
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
              placeholder="Phone Number"
              onChangeText={props.handleChange("phoneNumber")}
              onBlur={props.handleBlur("phoneNumber")}
              value={props.values.phoneNumber}
              keyboard="numeric"
            />
            <Text style={globalStyles.errorText}>
              {props.touched.phoneNumber && props.errors.phoneNumber}
            </Text>

            <TextInput
              style={globalStyles.input}
              placeholder="Email Address"
              onChangeText={props.handleChange("email")}
              onBlur={props.handleBlur("email")}
              value={props.values.email}
            />
            <CheckBox
              style={globalStyles.input}
              center
              title="I Am Registered to Vote"
              checked={checkboxChecked}
              onPress={() => setcheckboxChecked(true)}
            />
            <Text style={globalStyles.errorText}>
              {props.touched.rating && props.errors.rating}
            </Text>

            <FlatButton text="submit" type="submit" />
          </View>
        )}
      </Formik>
    </View>
  );
}
export default connect(null, {
  addPassengers
})(PassengerForm);
