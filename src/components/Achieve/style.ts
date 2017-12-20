import { StyleSheet, Dimensions } from 'react-native';

export const deviceWidth = Dimensions.get('window').width;
const styles: any = StyleSheet.create({
  container: {
    alignSelf: 'center',
    width: deviceWidth,
    paddingHorizontal: deviceWidth * 0.05,
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderStyle: 'solid',
    borderBottomWidth: 10,
    borderBottomColor: '#e4e4e4'
  },
  flexItem: {
    flex: 1
  },
  title: {
    marginTop: 16,
    marginBottom: 30
  },
  titleTxt: {
    color: '#686868'
  },
  rankTxt: {
    textAlign: 'center',
    color: '#9d9d9d'
  },
  achiveContent: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  activeInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  mainTxt: {
    textAlign: 'right',
    color: '#666',
    fontSize: 30
  },
  tip: {
    paddingLeft: 10,
    color: '#9d9d9d'
  },
  content: {
    marginTop: 10,
    marginBottom: 20
  },
  contentTxt: {
    color: '#a1a1a1'
  }
});

export default styles;
