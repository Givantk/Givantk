import { Icon } from "native-base";
import { View, Button, FlatList } from "react-native";
import React from "react";

import ServiceCard from "../../../components/commons/Service-Related-Components/ServiceCard/ServiceCard";
import services from "../../../assets/data/fakeServices";
import styles from "./FeaturedScreenStyles";

export default class FeaturedScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    tabBarLabel: "FEATURED",
    tabBarIcon: ({ tintColor }) => (
      <Icon type="FontAwesome" name="star-o" style={{ color: tintColor }} />
    )
  });

  navigateToServiceScreen = () => {
    this.props.navigation.navigate("Service");
  };

  render() {
    return (
      <View style={styles.container}>
        <Button
          title="Search"
          onPress={() => this.props.navigation.navigate("SearchResults")}
        />

        <FlatList
          style={styles.servicesListContainer}
          data={services}
          keyExtractor={item => item._id}
          renderItem={service => (
            <ServiceCard
              service={service.item}
              navigateToServiceScreen={this.navigateToServiceScreen}
            />
          )}
        />
      </View>
    );
  }
}
