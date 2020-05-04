import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  textbox: {
    position: 'absolute',
    width: 293,
    height: 73,
    left: 51,
    top: 350,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'grey',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    position: 'absolute',
    top: 109,
  },

  buttonContainer: {
    position: 'absolute',
    width: 293,
    height: 73,
    left: 51,
    top: 479,
    backgroundColor: '#03a5fc',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#000000',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
