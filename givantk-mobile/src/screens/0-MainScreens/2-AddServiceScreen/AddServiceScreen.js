import { connect } from 'react-redux';
import { Icon, Label, Textarea, Button } from 'native-base';
import { View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

import CheckBox from 'react-native-check-box';
import { dimensions, colors } from '../../../assets/styles/base';
import * as ProfileActions from '../../../store/actions/profileActions';
import * as ServiceActions from '../../../store/actions/serviceActions';
import AvoidKeyboard from '../../../components/commons/UI/AvoidKeyboard/AvoidKeyboard';
import Loading from '../../../components/commons/UI/Loading/Loading';
import MainButton from '../../../components/commons/UI/MainButton/MainButton';
import NoProfileDisclaimer from '../../../components/commons/NoProfileDisclaimer/NoProfileDisclaimer';
import Picker from '../../../components/commons/UI/Picker/Picker';
import QuickNotification from '../../../components/commons/UI/QuickNotification/QuickNotification';
import servicesNatures from '../../../assets/data/servicesNatures';
import servicesTypes from '../../../assets/data/servicesTypes';
import currencies from '../../../assets/data/Currencies';
import styles from './AddServiceScreenStyles';
import TextInput from '../../../components/commons/UI/TextInput/TextInput';
import { ImagePicker } from 'expo';

class AddServiceScreen extends React.Component {
  static navigationOptions = () => ({
    tabBarLabel: 'Add Service',
    tabBarIcon: ({ tintColor }) => (
      <Icon
        type="Ionicons"
        name="md-add-circle"
        style={[styles.tabBarIcon, { color: tintColor }]}
      />
    ),
  });

  state = {
    name: '',
    description: '',
    type: '',
    nature: '',
    paid: false,
    free: false,
    moneyPoints: 0,
    givantkPoints: 0,
    optionalPicture: null,
    isAnonymous: false,
  };

  pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
    });

    const { uri } = result;

    if (!result.cancelled) {
      this.setState({ optionalPicture: uri });
    }
  };

  onChangeValue = (name, value) => {
    if (name === 'nature' && value.label === 'Paid') {
      this.setState({
        [name]: value,
        paid: true,
        free: false,
      });
    } else if (name === 'nature' && value.label === 'Free') {
      this.setState({
        [name]: value,
        free: true,
        paid: false,
      });
    } else if (name === 'moneyPoints' || name === 'givantkPoints') {
      this.setState({
        [name]: parseInt(value),
      });
    } else {
      this.setState({
        [name]: value,
      });
    }
  };

  onAddService = () => {
    const {
      createService,
      getAllServices,
      getCurrentUserProfile,
      navigation,
    } = this.props;
    const {
      name,
      type,
      nature,
      description,
      moneyPoints,
      paid,
      free,
      givantkPoints,
      isAnonymous,
    } = this.state;
    const service = {
      name,
      description,
      type: type.value,
      nature: nature.value,
      moneyPoints: moneyPoints,
      givantkPoints: givantkPoints,
      paid,
      free,
      isAnonymous,
    };
    const callback = () => {
      QuickNotification('Service posted successfully');
      getAllServices();
      getCurrentUserProfile();
      navigation.replace('Tab');
    };
    createService(service, callback);
  };

  render() {
    const {
      type,
      nature,
      currency,
      paid,
      free,
      optionalPicture,
      isAnonymous,
    } = this.state;
    const {
      errors,
      createServiceLoading,
      currentUserProfile,
      getCurrentProfileLoading,
      currentUserHasProfile,
      navigation,
    } = this.props;

    if (!currentUserProfile && getCurrentProfileLoading) return <Loading />;

    if (!currentUserHasProfile)
      return <NoProfileDisclaimer navigation={navigation} />;

    return (
      <View style={styles.container}>
        <AvoidKeyboard bottomPadding={120}>
          <View style={styles.topInputsContainer}>
            <TextInput
              title="Service Name"
              placeholder="Type the service name"
              error={errors.name}
              name="name"
              onChange={this.onChangeValue}
            />

            <Picker
              title="Service Type"
              placeholder="Pick a type"
              style={styles.picker}
              name="type"
              onChange={this.onChangeValue}
              options={servicesTypes}
              value={type}
              error={errors.type}
            />

            <Picker
              title="Service Nature"
              placeholder="Pick a nature"
              style={styles.picker}
              name="nature"
              onChange={this.onChangeValue}
              options={servicesNatures}
              value={nature}
              error={errors.nature}
            />
            {paid && (
              <View>
                <Picker
                  title="Pick Currency"
                  placeholder="Pick Currency"
                  style={styles.picker}
                  name="currency"
                  onChange={this.onChangeValue}
                  options={currencies}
                  value={currency}
                />
                <TextInput
                  title="Amount you wanna pay "
                  keyboardType="numeric"
                  maxLength={10}
                  placeholder="Amount in numbers"
                  name="moneyPoints"
                  onChange={this.onChangeValue}
                />
                <Text style={styles.error}>{errors.money}</Text>
              </View>
            )}

            {free && (
              <View>
                <TextInput
                  title="Points you want to give"
                  keyboardType="numeric"
                  maxLength={10}
                  placeholder="Amount in numbers"
                  name="givantkPoints"
                  onChange={this.onChangeValue}
                />
                <Text style={styles.error}>{errors.givantkPoints}</Text>
              </View>
            )}
          </View>

          <Text style={styles.label}>Add photo (optional)</Text>
          <Button style={styles.uploadButton} onPress={this.pickImage}>
            <Text style={styles.uploadButtonText}>Pick from gallery </Text>
          </Button>
          <View style={styles.attachementView}>
            {optionalPicture && (
              <Text
                style={{
                  marginTop: 6,
                  color: colors.primary,
                  fontWeight: '400',
                }}
              >
                Image Attachement is added
              </Text>
            )}
            {optionalPicture && (
              <Image style={styles.image} source={{ uri: optionalPicture }} />
            )}
          </View>

          <View style={styles.left}>
            <Label style={styles.text}>Description </Label>
          </View>
          <View style={{ width: dimensions.fullWidth * 0.88 }}>
            <Textarea
              placeholder="Service Description"
              style={[
                styles.textarea,
                errors.description ? styles.warningInput : {},
              ]}
              onChangeText={(v) => this.onChangeValue('description', v)}
            />
            <Text style={styles.error}>{errors.description}</Text>
          </View>

          {type.value==="KE" && (
            <CheckBox
              style={{ marginBottom: 10 }}
              onClick={() => {
                this.setState({
                  isAnonymous: !isAnonymous,
                });
              }}
              isChecked={isAnonymous}
              rightText={'Hide your identity'}
              rightTextStyle={styles.checkBoxLabel}
              checkedCheckBoxColor={colors.primary.toString()}
            />
          )}

          <View style={styles.row}>
            <MainButton
              onPress={this.onAddService}
              loading={createServiceLoading}
              big
            >
              ADD
            </MainButton>
          </View>
        </AvoidKeyboard>
      </View>
    );
  }
}

AddServiceScreen.propTypes = {
  navigation: PropTypes.shape({}),
  createService: PropTypes.func,
  getAllServices: PropTypes.func,
  getCurrentUserProfile: PropTypes.func,
  errors: PropTypes.shape({}),
  createServiceLoading: PropTypes.bool,
  currentUserProfile: PropTypes.shape({}),
  getCurrentProfileLoading: PropTypes.bool,
  currentUserHasProfile: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  errors: state.errors,
  createServiceLoading: state.service.createServiceLoading,
  currentUserProfile: state.profile.currentUserProfile,
  getCurrentProfileLoading: state.profile.getCurrentProfileLoading,
  currentUserHasProfile: state.profile.currentUserHasProfile,
});

const mapDispatchToProps = {
  createService: ServiceActions.createService,
  getAllServices: ServiceActions.getAllServices,
  getCurrentUserProfile: ProfileActions.getCurrentUserProfile,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddServiceScreen);
