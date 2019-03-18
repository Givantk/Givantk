import { StyleSheet } from 'react-native';

import { colors, dimensions, fontTypes } from '../../../../assets/styles/base';

const styles = StyleSheet.create({
  serviceCard: {
    borderWidth: 3,
    borderRadius: 10,
    alignSelf: 'center',
    borderColor: colors.primary,
    width: dimensions.fullWidth * 0.88,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: colors.tertiary,
    paddingVertical: 10,
    marginVertical: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: colors.secondary,
  },
  headerCenter: {
    marginTop: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  reviewHeader: {
    marginTop: -7,
    color: colors.black,
    textAlign: 'center',
    marginBottom: 15,
    fontWeight:'500'
  },
  reviewer: {
    color: colors.primary,
    paddingLeft: 10,
    paddingTop: 7,
  },
  content: {
    backgroundColor: colors.white,
    width: '98%',
    alignSelf: 'center',
    alignItems: 'center',
    paddingBottom: 15,
  },
  writtenReview:{
    marginTop:10,
    fontStyle:'italic'
  },
});

export default styles;
