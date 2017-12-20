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
  icon: {
    width: 20,
    height: 20
  },
});
export default styles;
