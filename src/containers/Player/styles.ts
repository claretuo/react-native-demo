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
  people: {
    width: deviceWidth * 0.9,
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  peopleContent: {
    width: 135
  },
  peopleBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden'
  },
  peopleItem: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: -6,
    overflow: 'hidden'
  },
  peopleNum: {
    fontSize: 16
  },
  step: {
    width: deviceWidth * 0.9,
    marginVertical: 5
  },
  stepTxt: {
    fontSize: 16,
    color: '#777'
  },
  stepDes: {
    width: deviceWidth * 0.9 - 28,
    marginLeft: 28,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    paddingVertical: 10
  },
  stepItem: {
    marginVertical: 5,
  },
  stepDesc: {
    fontSize: 16,
    color: '#333'
  },
});
export default styles;
