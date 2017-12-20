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
  imgBox: {
    width: 240,
    height: 160,
    position: 'relative'
  },
  img: {
    width: 240,
    height: 160,
  },
  playIcon: {
    width: 64,
    height: 64,
    position: 'absolute',
    top: 48,
    left: 88
  },
  contentBox: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  menuItem: {
    paddingHorizontal: 10,
    marginVertical: 10
  },
  text: {
    fontSize: 14,
    color: '#777'
  },
  active: {
    fontSize: 16,
    color: '#333'
  },
});

export default styles;
