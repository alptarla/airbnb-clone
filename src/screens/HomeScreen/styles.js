import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  backgroundImage: {
    width: '100%',
    resizeMode: 'cover',
    height: 600,
  },
  backgroundContent: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    paddingLeft: 20,
  },
  contentTitle: {
    width: '60%',
    color: colors.white,
    fontSize: 86,
    fontWeight: 'bold',
    marginBottom: 20,
    lineHeight: 85,
  },
  contentButton: {
    width: '60%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  topButton: {
    position: 'absolute',
    top: 60,
    zIndex: 100,
    width: Dimensions.get('screen').width - 40,
    height: 50,
    marginHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
  },
  searchIcon: {
    marginRight: 5,
    color: colors.primary,
  },
  postList: {
    marginTop: 20,
  },
  postListTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginHorizontal: 20,
  },
});

export default styles;
