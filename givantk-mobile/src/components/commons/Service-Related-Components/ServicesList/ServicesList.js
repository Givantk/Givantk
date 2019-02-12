import { Text, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

import ServiceCard from '../ServiceCard/ServiceCard';
import Loading from '../../UI/Loading/Loading';

const ServicesList = (props) => {
  const { navigation, services, loading } = props;

  const renderItem = (service) => (
    <ServiceCard service={service.item} navigation={navigation} />
  );

  if (loading) return <Loading />;
  if (services.length === 0) return <Text>No services yet</Text>;

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

ServicesList.propTypes = {
  navigation: PropTypes.shape({}),
  services: PropTypes.arrayOf(PropTypes.shape({})),
  loading: PropTypes.bool,
};

export default ServicesList;
