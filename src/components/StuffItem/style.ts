import { StyleSheet, Dimensions } from 'react-native';

export const deviceWidth = Dimensions.get('window').width;
const styles: any = StyleSheet.create({
  container: {
    marginRight: 10,
    width: 100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    backgroundColor: '#fff',
  },
  bigBox: {
    width: 100,
    height: 100,
    backgroundColor: '#03a9f4',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    color: '#333'
  },
  desc: {
    width: 100,
    marginVertical: 5
  },
  txt: {
    fontSize: 14,
    color: '#333'
  },
  grey: {
    color: '#777'
  },
});

export default styles;
