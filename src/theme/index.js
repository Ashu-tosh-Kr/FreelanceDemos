import { extendTheme } from '@chakra-ui/react';
import { styles } from './styles';

const overrides = {
  ...styles,
  components: {},
};

const theme = extendTheme(overrides);
export default theme;
