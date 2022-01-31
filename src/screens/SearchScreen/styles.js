import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    margin: 20,
  },
  places: {
    textInput: {
      borderRadius: 10,

      borderWidth: 1,
      borderColor: colors.grey,
    },
    poweredContainer: {
      display: 'none',
    },
    separator: {
      backgroundColor: colors.grey,
    },
  },
});

export default styles;
