import { StyleSheet, Dimensions } from 'react-native';

export const deviceWidth = Dimensions.get('window').width;
export const deviceHeight = Dimensions.get('window').height;

const styles: any = StyleSheet.create({
  container: {
    width: deviceWidth,
    height: deviceHeight,
    paddingTop: 20,
    paddingBottom: 100,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  icon: {
    width: 20,
    height: 20
  },
  scrollContainer: {
  },
  carouselContainer: {
    width: deviceWidth,
    height: 200,
    marginBottom: 10
  },
  listContainer: {
    width: deviceWidth,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexWrap: 'wrap'
  },
  listItem: {
    width: (deviceWidth - 10) / 2,
    height: 100,
    marginBottom: 10,
    backgroundColor: '#03a9f4',
    position: 'relative',
  },
  listImg: {
    width: (deviceWidth - 10) / 2,
    height: 100,
  },
  titleBox: {
    position: 'absolute',
    left: 0,
    top: 0,
    height: 100,
    width: (deviceWidth - 10) / 2,
    backgroundColor: 'rgba(0, 0, 0, 0.4)'
  },
  titleTxt: {
    lineHeight: 100,
    fontSize: 16,
    color: '#fff',
    textAlign: 'center'
  }
});
export default styles;
