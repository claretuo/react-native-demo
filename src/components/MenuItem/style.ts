import { StyleSheet, Dimensions } from 'react-native';

export const deviceWidth = Dimensions.get('window').width;
const styles: any = StyleSheet.create({
  container: {
    width: deviceWidth,
    backgroundColor: '#9a6767',
    borderStyle: 'solid',
    borderBottomWidth: 10,
    borderBottomColor: '#fff',
    overflow: 'hidden',
    paddingVertical: 20
  },
  menuItem: {
    width: deviceWidth,
  },
  header: {
    width: deviceWidth,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  title: {
    alignSelf: 'flex-start',
    width: 200,
    marginLeft: 10,
    marginVertical: 10
  },
  mainTxt: {
    color: '#e4e4e4',
    fontSize: 15
  },
  description: {
    width: deviceWidth,
    marginTop: 10
  },
  num: {
    fontSize: 13,
    color: '#d4d4d4',
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 20
  },
  processContainer: {
    width: deviceWidth,
    height: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#03a9f4',
    borderRadius: 12
  },
  processBar: {
    height: 8,
    backgroundColor: '#e91e63',
    marginHorizontal: 2,
    borderRadius: 8
  },
  image: {
    marginLeft: 10
  },
  imgItem: {
    height: 100,
    width: 150
  }
});

export default styles;
