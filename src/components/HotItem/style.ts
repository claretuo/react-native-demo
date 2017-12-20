import { StyleSheet, Dimensions } from 'react-native';

export const deviceWidth = Dimensions.get('window').width;
const styles: any = StyleSheet.create({
  container: {
    width: deviceWidth * 0.4,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#fff',
    marginBottom: 20
  },
  img: {
    height: 100,
    width: deviceWidth * 0.4,
    backgroundColor: '#bcbcbc'
  },
  title: {
    marginVertical: 5
  },
  titleTxt: {
    fontSize: 14,
    color: '#333'
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10
  },
  contentItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  contentImg: {
    width: 20,
    height: 20,
    marginRight: 5
  }
});

export default styles;
