import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    fontSize: 32,
  },
  product: {
    display: 'flex', 
    flexDirection: 'row',
    alignItems: 'center',
    margin: 5,
  },
  name: {
    fontSize: 16,
    marginLeft: 10
  },
  expiration: {
    marginLeft: 'auto',
    marginRight: 10,
    fontSize: 16,
    textAlign: 'center'
  }
});