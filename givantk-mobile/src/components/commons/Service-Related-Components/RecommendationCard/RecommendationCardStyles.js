import { StyleSheet } from 'react-native';

import { colors, dimensions, fontTypes } from '../../../../assets/styles/base';

const styles = StyleSheet.create({
  recommenationCard: {
    borderWidth: 3,
    borderRadius: 10,
    alignSelf: 'center',
    borderColor: colors.primary,
    width: dimensions.fullWidth * 0.78,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: colors.tertiary,
    paddingVertical: 10,
    marginVertical: 20,
  },
  userName: {
    paddingTop:5,  
    color: colors.black,
    fontWeight: 'bold',
  },
  criteria: {
    color: colors.primary,
    fontWeight: 'normal',

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
  content: {
    marginTop:10,
    marginBottom:10,  
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
  headerRight: {
    flexDirection: 'column',
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
});

export default styles;
