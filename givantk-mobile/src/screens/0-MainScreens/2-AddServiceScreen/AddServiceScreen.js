import { Icon, Label, Picker, Textarea, Button } from 'native-base';
import { View, Text } from 'react-native';
import React from 'react';

import { colors, dimensions } from '../../../assets/styles/base';
import DefaultTextInput from '../../../components/commons/UI/DefaultTextInput/DefaultTextInput';
import servicesCategories from '../../../assets/data/servicesCategories';
import styles from './AddServiceScreenStyles';

export default class AddServiceScreen extends React.Component {
  static navigationOptions = () => ({
    tabBarLabel: 'ADD SERVICE',
    tabBarIcon: ({ tintColor }) => (
      <Icon
        type="EvilIcons"
        name="plus"
        style={[styles.tabBarIcon, { color: tintColor }]}
      />
    ),
  });

  state = {
    selectedCategory: '',
  };

  onSelectCategory = (selectedCategory) => {
    this.setState(() => ({
      selectedCategory,
    }));
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <Text style={styles.text}>Service Name </Text>
          <View style={styles.inputContainer}>
            <DefaultTextInput placeholder="Title" style={styles.input} />
          </View>
        </View>

        <View style={styles.row}>
          <Text style={styles.text}>Category Selection </Text>
          <View
            style={[
              styles.inputContainer,
              styles.categorySelectionInputContainer,
            ]}
          >
            <View
              style={{
                backgroundColor: colors.trueWhite,
                borderRadius: 5,
                borderColor: colors.primary,
                borderWidth: 1,
              }}
            >
              <Picker
                style={{
                  color: colors.gray01,
                }}
                selectedValue={this.state.selectedCategory}
                onValueChange={this.onSelectCategory}
              >
                <Picker.Item label="Category" value="" />
                {servicesCategories.map((category) => (
                  <Picker.Item
                    label={category}
                    value={category}
                    key={category}
                  />
                ))}
              </Picker>
            </View>
          </View>
        </View>

        <View style={styles.left}>
          <Label style={styles.text}>Description </Label>
        </View>
        <View style={{ width: dimensions.fullWidth * 0.88 }}>
          <Textarea
            style={{
              backgroundColor: colors.trueWhite,
              borderRadius: 10,
              borderWidth: 1,
              borderColor: colors.primary,
              height: 170,
              marginTop: 10,
              marginBottom: 20,
              padding: 10,
            }}
          />
        </View>

        <View style={styles.row}>
          <Text style={styles.text}>Do you have a specific budget? </Text>
          <View style={styles.inputContainer}>
            <DefaultTextInput placeholder="EGP" style={styles.input} />
          </View>
        </View>

        <View style={styles.row}>
          <Button
            style={{
              width: 100,
              justifyContent: 'center',
              borderRadius: 20,
              backgroundColor: colors.secondary,
            }}
          >
            <Text
              style={{
                color: colors.trueWhite,
                fontWeight: 'bold',
                fontSize: 20,
              }}
            >
              ADD
            </Text>
          </Button>
        </View>
      </View>
    );
  }
}
