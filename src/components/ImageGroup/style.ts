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
  imageItem: {
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    height: 80,
    marginBottom: 5
  },
  img: {
    width: 120,
    height: 80,
    backgroundColor: '#2196f3'
  },
  titleBox: {
    flex: 1,
    backgroundColor: '#cddc39',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: 10,
    overflow: 'hidden'
  },
  titleTxt: {
    fontSize: 14,
    color: '#fff'
  }
});

export default styles;
