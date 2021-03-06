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
  tabBox: {
    width: 120,
    height: 40,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden'
  },
  tabItem: {
    width: 40
  },
  tabTxt: {
    fontSize: 14,
    color: '#333',
    textAlign: 'center'
  },
  tabBar: {
    position: 'absolute',
    left: 0,
    bottom: 2,
    backgroundColor: '#4caf50',
    width: 40,
    height: 2
  },
  hotContainer: {
    width: deviceWidth,
    paddingVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap'
  }
});
export default styles;
