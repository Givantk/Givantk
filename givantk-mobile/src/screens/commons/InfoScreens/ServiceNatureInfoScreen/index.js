import { View, Text, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import styles from './styles';

export default class ServiceNatureInfoScreen extends Component {
  static navigationOptions = () => ({
    headerTitle: 'طبيعة الخدمات',
  });

  render() {
    return (
      <ScrollView>
        <View style={styles.wrapper}>
          <Text style={styles.title}>طبيعة الخدمات</Text>
          <Text style={styles.content}>
            <Text style={[styles.content, { fontWeight: 'bold' }]}>
              طبيعة الخدمة
            </Text>{' '}
            توضح ما إذا كانت الخدمة{' '}
            <Text style={[styles.content, { fontWeight: 'bold' }]}>
              مجانية ✨
            </Text>{' '}
            أو{' '}
            <Text style={[styles.content, { fontWeight: 'bold' }]}>
              مدفوعة 💰
            </Text>
            تطبيقنا الآن يدعم الخدمات المجانية، اما الخدمات المدفوعة سواء كاش أو
            باستخدام فودافون كاش فهى يتم الاتفاق عليها ودفعها بواسطة المستخدمين
            وليس للتطبيق فى الفترة الحالية علاقة باستلامها أو تحويلها.
          </Text>
          <Text style={styles.content}>
            لو قمت باختيار طبيعة الخدمة كخدمة مجانية{' '}
            <Text style={[styles.content, { fontWeight: 'bold' }]}>
              سوف تتعامل مع شىء يسمى نقاط جيفانتك المجانية{' '}
            </Text>
            عندما تقوم بالتسجيل فى التطبيق، سوف تأخذ 100 نقطة، يمكنك أن تطلب بهم
            خدمات مجانية
          </Text>
          <Text style={styles.content}>
            <Text style={[styles.content, { fontWeight: 'bold' }]}>
              تلك النقاط
            </Text>{' '}
            يمكنك استبدالها فى المستقبل بجوائز، وخصومات من محلات كبرى، لذا حاول
            تجميع ما يمكنك منها عن طريق مساعدة الآخرين فى خدماتهم المجانية
          </Text>
          <Text style={styles.signature}>Givantk Team</Text>
        </View>
      </ScrollView>
    );
  }
}

ServiceNatureInfoScreen.propTypes = {
  navigation: PropTypes.shape({}),
};
