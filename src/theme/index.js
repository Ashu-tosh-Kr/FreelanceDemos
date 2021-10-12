import { extendTheme } from '@chakra-ui/react';
import { styles } from './styles';

const overrides = {
  ...styles,
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  components: {},
};

const theme = extendTheme(overrides);
export default theme;
