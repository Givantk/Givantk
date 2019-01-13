import { View, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

import ServiceCard from '../../../commons/Service-Related-Components/ServiceCard/ServiceCard';
import services from '../../../../assets/data/fakeServices';

const ServicesIAskedFor = (props) => {
  const { navigation } = props;

  const renderItem = (service) => {
    if (Math.random() < 0.5) {
      return <ServiceCard service={service.item} navigation={navigation} />;
    }
    return null;
  };

  return (
    <View style={{ height: '100%' }}>
      <FlatList
        style={{ height: '100%' }}
        data={services}
        keyExtractor={(item) => item._id}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
      />
    </View>
  );
};

ServicesIAskedFor.propTypes = {
  navigation: PropTypes.shape({}),
};

export default ServicesIAskedFor;
