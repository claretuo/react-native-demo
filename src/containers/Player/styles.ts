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
  scrollContainer: {
  },
  paddingContainer: {
    width: deviceWidth * 0.9,
    alignSelf: 'center'
  },
  icon: {
    width: 20,
    height: 20
  },
  titleBox: {
    width: deviceWidth,
    marginTop: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  titleTxt: {
    fontSize: 20
  }
});
export default styles;
