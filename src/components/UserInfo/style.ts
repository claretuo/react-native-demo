import { StyleSheet, Dimensions } from 'react-native';

export const deviceWidth = Dimensions.get('window').width;
const styles: any = StyleSheet.create({
  container: {
    width: deviceWidth,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#996666',
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderStyle: 'solid',
    borderBottomWidth: 10,
    borderBottomColor: '#e4e4e4',
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#fff'
  },
  descContent: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  basic: {
    width: deviceWidth - 180,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    borderBottomColor: '#fff',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    paddingBottom: 20,
  },
  userName: {
    flex: 1,
  },
  nameTxt: {
    fontSize: 22,
    color: '#fff',
    fontWeight: 'bold'
  },
  maiSite: {
    flex: 1,
  },
  siteTxt: {
    textAlign: 'right',
    fontSize: 16,
    color: '#fff'
  },
  others: {
    width: deviceWidth - 140,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    paddingTop: 20
  },
  item: {
    marginRight: 10
  },
  txt: {
    fontSize: 14,
    color: '#fff'
  },
});

export default styles;
