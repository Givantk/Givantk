import { StyleSheet } from 'react-native';
import {colors} from '../../../assets/styles/base' 

export default (styles = StyleSheet.create({
  mainWrapper: {
    flexDirection: 'row',
    marginRight: '5%',
  },

  image: {
    width: 50,
    height: 50,
    marginRight: 10,
    marginLeft: 10,
    borderRadius:25,
  },

  replyImage: {
    width: 20,
    height: 20,
    marginRight: 10,
    marginLeft: 70, //10 3alshmal+50 elsora 2lly 3alshmal+10
  },

  wrapper: {
    flex: -1,
    height: 'auto',
    backgroundColor:colors.tertiary ,
    borderRadius: 15,
    borderWidth: 2,
    borderColor:colors.gray01,
  },

  content: {
    padding: 6,
    paddingTop: 1,

  },
  commentOwner: {
    padding: 6,
    paddingBottom: 0,
    fontWeight: 'bold',
  },
  commentFooter: {
    flexDirection: 'row',
    marginLeft: 80,
    marginBottom: 19, //between each post

  },
  replyFooter:{
    flexDirection: 'row',
    marginLeft: 110,
    marginBottom: 19, //between each post

  },
  footerElement: {
    marginRight: 14,
    
  },
  footerElementLiked:{
    marginRight:10,
    color:'#2F8DFD'
  }
}));
