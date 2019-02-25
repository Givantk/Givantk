import { connect } from "react-redux";
import { View } from "react-native";
import PropTypes from "prop-types";
import React, { Component } from "react";

import Loading from "../../../components/commons/UI/Loading/Loading";
import NoProfileDisclaimer from "../../../components/commons/NoProfileDisclaimer/NoProfileDisclaimer";
import ServicesList from "../../../components/commons/Service-Related-Components/ServicesList/ServicesList";

class BookmarkedServicesScreen extends Component {
  static navigationOptions = () => ({
    headerTitle: "You bookmarked"
  });

  render() {
    const {
      navigation,
      getCurrentProfileLoading,
      currentUserHasProfile
    } = this.props;
    const { currentUserProfile } = navigation.state.params;

    if (getCurrentProfileLoading) return <Loading />;

    if (!currentUserHasProfile)
      return <NoProfileDisclaimer navigation={navigation} />;

    return (
      <View>
        <ServicesList
          services={currentUserProfile.services_bookmarked}
          navigation={navigation}
        />
      </View>
    );
  }
}

BookmarkedServicesScreen.propTypes = {
  navigation: PropTypes.shape({}),
  getCurrentProfileLoading: PropTypes.bool,
  currentUserHasProfile: PropTypes.bool
};

const mapStateToProps = state => ({
  getCurrentProfileLoading: state.profile.getCurrentProfileLoading,
  currentUserHasProfile: state.profile.currentUserHasProfile
});

export default connect(mapStateToProps)(BookmarkedServicesScreen);
