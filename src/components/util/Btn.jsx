import { Button } from '@chakra-ui/button';

const Btn = ({ text, ...rest }) => {
  return (
    <Button fontSize="13px" h="2rem" w="6rem" borderRadius="full" {...rest}>
      {text}
    </Button>
  );
};

export default Btn;
