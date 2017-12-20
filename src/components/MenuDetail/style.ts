import { StyleSheet, Dimensions } from 'react-native';

export const deviceWidth = Dimensions.get('window').width;
const styles: any = StyleSheet.create({
  container: {
    width: deviceWidth,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderStyle: 'solid',
    borderBottomWidth: 10,
    borderBottomColor: '#e4e4e4',
    position: 'relative'
  },
  title: {
    width: deviceWidth,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: deviceWidth * 0.05
  },
  titleTxt: {
    lineHeight: 60,
    color: '#333',
    fontSize: 18
  },
  list: {
    width: deviceWidth,
    paddingHorizontal: deviceWidth * 0.05,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingBottom: 20
  },
  listText: {
    lineHeight: 20,
    color: '#333',
    fontSize: 14
  }
});

export default styles;
