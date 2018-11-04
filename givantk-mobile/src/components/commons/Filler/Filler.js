import { View } from "react-native";
import React, { Component } from "react";

//expects props: thickness (number)

export default class Filler extends Component {
  render() {
    return (
      <View
        style={{
          width: "100%",
          height: this.props.thickness,
          backgroundColor: "transparent"
        }}
      />
    );
  }
}
