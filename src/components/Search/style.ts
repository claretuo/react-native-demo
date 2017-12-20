import { StyleSheet, Dimensions } from 'react-native';

export const deviceWidth = Dimensions.get('window').width;
const styles: any = StyleSheet.create({
  box: {
    width: deviceWidth,
    backgroundColor: '#fff',
    paddingVertical: 10,
    alignSelf: 'center',
    shadowOffset: {
      width: 1,
      height: 0.5,
    },
    shadowColor: '#55ACEE',
    shadowOpacity: 0.5,
    shadowRadius: 1
  },
  container: {
    alignSelf: 'center',
    width: deviceWidth * 0.9,
    justifyContent: 'center',
    alignItems: 'center',
    height: 34,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#ccc',
    borderRadius: 40,
    flexDirection: 'row'
  },
  inputContainer: {
    flex: 1,
    height: 28
  },
  input: {
    flex: 1,
    height: 28,
    fontSize: 15,
    backgroundColor: '#fff',
    marginLeft: 17,
    marginRight: 17
  },
  searchIcon: {
    height: 13,
    width: 13,
    marginLeft: 15
  }
});

export default styles;
