import { View, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

import ServiceCard from '../../../commons/Service-Related-Components/ServiceCard/ServiceCard';
import services from '../../../../assets/data/fakeServices';

const ServicesIAppliedFor = (props) => {
  const { navigation } = props;

  const renderItem = (service) => {
    if (Math.random() < 0.5) {
      return <ServiceCard service={service.item} navigation={navigation} />;
    }
    return null;
  };

  return (
    <FlatList
      style={{ height: '100%' }}
      data={services}
      keyExtractor={(item) => item._id}
      showsVerticalScrollIndicator={false}
      renderItem={renderItem}
    />
  );
};

ServicesIAppliedFor.propTypes = {
  navigation: PropTypes.shape({}),
};

export default ServicesIAppliedFor;
