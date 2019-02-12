import { View } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

import ContentCard from '../UI/ContentCard/ContentCard';

const NoProfileDisclaimer = (props) => {
  const { warningText, navigation } = props;
  return (
    <View
      style={{
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        flex: 1,
      }}
    >
      <ContentCard
        body={warningText || 'Please Fill In Your Profile Info First 😄'}
        submitText="Fill Profile"
        onSubmit={() => navigation.navigate('MakeProfile')}
      />
    </View>
  );
};

NoProfileDisclaimer.propTypes = {
  navigation: PropTypes.shape({}).isRequired,
  warningText: PropTypes.string,
};

export default NoProfileDisclaimer;
