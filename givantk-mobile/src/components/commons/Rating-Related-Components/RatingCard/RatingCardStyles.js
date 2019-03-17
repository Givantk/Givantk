import { StyleSheet } from 'react-native';

import { colors, dimensions, fontTypes } from '../../../../assets/styles/base';

const styles = StyleSheet.create({
  serviceCard: {
    borderWidth: 3,
    borderRadius: 10,
    alignSelf: 'center',
    borderColor: colors.primary,
    width: dimensions.fullWidth * 0.88,
    height: 220,
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
    marginBottom:0
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: colors.secondary,
  },
  headerCenter: {
    marginTop:0,  
    justifyContent: 'center',
    alignItems: 'center',
  },
  reviewHeader: {
    color: colors.black,
    textAlign:'center'
  },
  reviewer: {
    color: colors.primary,
    paddingLeft:10,
    paddingTop:7
  },
  content: {
    backgroundColor: colors.white,
    height: '40%',
    width: '98%',
    alignSelf: 'center',
    alignItems: 'center',
  },
  descriptionText: {
    color: colors.black,
    padding: 10,
    fontFamily: fontTypes.main,
  },

});

export default styles;
