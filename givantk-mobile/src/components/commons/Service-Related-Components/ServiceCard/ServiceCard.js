import { Icon } from "native-base";
import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import PropTypes from "prop-types";
import React, { Component } from "react";

import styles from "./ServiceCardStyles";

export default class Service extends Component {
  render() {
    return (
      <TouchableWithoutFeedback onPress={this.props.navigateToServiceScreen}>
        <View style={styles.serviceCard}>
          <View style={styles.header}>
            <Image
              source={{
                uri: this.props.service.poster.imageURL
              }}
              style={styles.userImage}
            />
            <View style={styles.headerRight}>
              <Text style={styles.userName}>
                {this.props.service.poster.name}
              </Text>
              <Text style={styles.serviceTitle}>
                {this.props.service.title}
              </Text>
            </View>
          </View>

          <View style={styles.content}>
            <Text style={styles.descriptionText}>
              {this.props.service.description}
            </Text>
          </View>

          <View style={styles.footer}>
            <Text style={styles.cost}>{this.props.service.cost}</Text>
            <View style={styles.footerLeft}>
              <Icon type="EvilIcons" name="envelope" style={styles.shareIcon} />
              <Icon type="Feather" name="star" style={styles.favoriteIcon} />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

Service.propTypes = {
  navigateToServiceScreen: PropTypes.func,
  service: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    poster: PropTypes.shape({
      name: PropTypes.string,
      imageURL: PropTypes.string
    })
  })
};
