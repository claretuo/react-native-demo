import { StyleSheet, Dimensions } from 'react-native';

export const deviceWidth = Dimensions.get('window').width;
export const deviceHeight = Dimensions.get('window').height;

const styles: any = StyleSheet.create({
  container: {
    width: deviceWidth,
    height: deviceHeight,
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
  messageContainter: {
    width: deviceWidth,
    height: 50,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderStyle: 'solid',
    borderBottomWidth: 10,
    borderBottomColor: '#e4e4e4',
  },
  msg: {
    fontSize: 16,
    color: '#333',
  },
  dnaContainer: {
    width: deviceWidth,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 20
  }
});
export default styles;
