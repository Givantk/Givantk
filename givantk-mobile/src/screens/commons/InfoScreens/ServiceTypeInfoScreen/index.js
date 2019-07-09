import { View, Text, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import styles from './styles';

export default class ServiceTypeInfoScreen extends Component {
  static navigationOptions = () => ({
    headerTitle: 'أنواع الخدمات',
  });

  render() {
    return (
      <ScrollView>
        <View style={styles.wrapper}>
          <Text style={styles.title}>أنواع الخدمات</Text>
          <Text style={styles.content}>هناك أربعة أنواع من الخدمات:</Text>
          <Text style={styles.content}>
            <Text style={[styles.content, { fontWeight: 'bold' }]}>
              تبادل المعلومات 🤓 {'\n \n'}
            </Text>{' '}
            عندما تريد أن تسأل عن معلومة تريد معرفتها من الآخرين،ولا تتضمن
            التعامل معهم على أرض الواقع يمكنك اختيار هذا النوع من الخدمات، وكما
            يمكنك طلبه وأنت تخفى هويتك
          </Text>
          <Text style={styles.content}>
            <Text style={[styles.content, { fontWeight: 'bold' }]}>
              خدمات على أرض الواقع 📅 {'\n \n'}
            </Text>{' '}
            إذا اردت ان تتواصل مع شخص على أرض الواقع ليساعدك فى خدمات مثل نقل
            شىء أو شراء شىء لك.{' '}
          </Text>
          <Text style={styles.content}>
            <Text style={[styles.content, { fontWeight: 'bold' }]}>
              تواصل مع المجتمع 🛰️ {'\n \n'}
            </Text>{' '}
            لو كنت تريد التواصل مع شخص بعينه، على سبيل المثال تريد إنشاء مشروع
            جديد، وتحتاج إلى التواصل مع شخص يتمتع بالخبرة التقنية اللازمة،عندها
            يمكنك اختيار هذا النوع من الخدمات، واختيار مواصفات هذا الشخص
          </Text>
          <Text style={styles.content}>
            <Text style={[styles.content, { fontWeight: 'bold' }]}>
              أخرى 🙋‍♂️ {'\n'}
            </Text>{' '}
           يمكنك اختيار هذا النوع إذا لم تجد أى نوع من الخدمات يوافق ما تريد
          </Text>
          <Text style={styles.signature}>Givantk Team</Text>
        </View>
      </ScrollView>
    );
  }
}

ServiceTypeInfoScreen.propTypes = {
  navigation: PropTypes.shape({}),
};
