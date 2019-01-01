import { Icon, Label, Picker, Textarea, Button } from 'native-base';
import { View, Text } from 'react-native';
import React from 'react';

import { dimensions } from '../../../assets/styles/base';
import DefaultTextInput from '../../../components/commons/UI/DefaultTextInput/DefaultTextInput';
import servicesCategories from '../../../assets/data/servicesCategories';
import styles from './AddServiceScreenStyles';
import AvoidKeyboard from '../../../components/commons/UI/AvoidKeyboard/AvoidKeyboard';

export default class AddServiceScreen extends React.Component {
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
    selectedCategory: '',
  };

  onSelectCategory = (selectedCategory) => {
    this.setState(() => ({
      selectedCategory,
    }));
  };

  onAddService = () => {
    alert('Add service pressed');
  };

  render() {
    const { selectedCategory } = this.state;
    return (
      <AvoidKeyboard bottomPadding={80}>
        <View style={styles.container}>
          <View style={styles.row}>
            <Text style={styles.text}>Service Name </Text>
            <View style={styles.inputContainer}>
              <DefaultTextInput placeholder="Title" style={styles.input} />
            </View>
          </View>

          <View style={styles.row}>
            <Text style={styles.text}>Category Selection </Text>
            <View style={styles.categorySelectionInputContainer}>
              <Picker
                style={styles.categoryInput}
                selectedValue={selectedCategory}
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

          <View style={styles.left}>
            <Label style={styles.text}>Description </Label>
          </View>
          <View style={{ width: dimensions.fullWidth * 0.88 }}>
            <Textarea style={styles.textarea} />
          </View>

          <View style={styles.row}>
            <Text style={styles.text}>Do you have a specific budget? </Text>
            <View style={[styles.inputContainer, styles.budgetInputContainer]}>
              <DefaultTextInput
                keyboardType="numeric"
                maxLength={4}
                placeholder="EGP"
                style={styles.input}
              />
            </View>
          </View>

          <View style={styles.row}>
            <Button style={styles.addButton} onPress={this.onAddService}>
              <Text style={styles.addButtonText}>ADD</Text>
            </Button>
          </View>
        </View>
      </AvoidKeyboard>
    );
  }
}
