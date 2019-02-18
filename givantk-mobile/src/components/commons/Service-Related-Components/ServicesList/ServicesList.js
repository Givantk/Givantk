import { FlatList } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

import Announcement from '../../UI/Announcement/Announcement';
import Loading from '../../UI/Loading/Loading';
import ServiceCard from '../ServiceCard/ServiceCard';

const ServicesList = (props) => {
  const { navigation, services, loading } = props;

  const renderItem = (service) => (
    <ServiceCard service={service.item} navigation={navigation} />
  );

  if (loading) return <Loading />;
  if (services.length === 0) return <Announcement text="No services yet" />;

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

ServicesList.defaultProps = {
  services: [],
  loading: false,
};

ServicesList.propTypes = {
  navigation: PropTypes.shape({}),
  services: PropTypes.arrayOf(PropTypes.shape({})),
  loading: PropTypes.bool,
};

export default ServicesList;
