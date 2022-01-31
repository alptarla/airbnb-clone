import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
    marginBottom: 10,
  },
  bedroomsText: {
    color: 'grey',
    fontWeight: 'bold',
  },
  description: {
    fontSize: 18,
    lineHeight: 22,
    marginVertical: 10,
  },
  priceText: {
    fontSize: 18,
    marginVertical: 10,
  },
  oldPrice: {
    fontWeight: 'bold',
    color: colors.grey,
    textDecorationLine: 'line-through',
  },
  newPrice: {
    fontWeight: 'bold',
  },
  totalPrice: {
    fontSize: 18,
    color: colors.grey,
    textDecorationLine: 'underline',
  },
});

export default styles;
