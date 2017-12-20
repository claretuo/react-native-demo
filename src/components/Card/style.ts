import { StyleSheet, Dimensions } from 'react-native';

export const deviceWidth = Dimensions.get('window').width;
const styles: any = StyleSheet.create({
  container: {
    width: deviceWidth,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#fff',
    borderStyle: 'solid',
    borderBottomWidth: 10,
    borderBottomColor: '#e4e4e4'
  },
  header: {
    alignSelf: 'center',
    width: deviceWidth * 0.9,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleTxt: {
    color: '#909090'
  },
  extra: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end'
  },
  extraContent: {
  },
  flexItem: {
    flex: 1
  },
  content: {
    alignSelf: 'center',
    width: deviceWidth,
    justifyContent: 'center',
    alignItems: 'flex-start',
  }
});

export default styles;
