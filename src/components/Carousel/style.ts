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
    borderBottomColor: '#e4e4e4',
    height: 200,
    position: 'relative'
  },
  carouselItem: {
    width: deviceWidth,
    height: 200,
    position: 'relative'
  },
  mainImg: {
    width: deviceWidth,
    height: 200,
    backgroundColor: '#03a9f4',
  },
  titleBox: {
    position: 'absolute',
    left: 10,
    top: 10,
    backgroundColor: 'transparent'
  },
  titleTxt: {
    fontSize: 18,
    color: '#ffc107'
  },
  dotContainer: {
    position: 'absolute',
    left: 0,
    bottom: 10,
    width: deviceWidth,
    height: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    backgroundColor: 'transparent'
  },
  dotItem: {
    width: 10,
    height: 10,
    marginHorizontal: 10,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#9e9e9e',
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    borderRadius: 10
  },
  active: {
    backgroundColor: 'rgba(205, 220, 57, 0.8)'
  }
});

export default styles;
