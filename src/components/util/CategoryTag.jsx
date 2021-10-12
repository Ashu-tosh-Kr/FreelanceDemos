import { Tag, TagLabel } from '@chakra-ui/tag';

const CategoryTag = ({ name, ...rest }) => {
  return (
    <Tag
      size={'sm'}
      key={'sm'}
      borderRadius="full"
      variant="solid"
      bgColor="purple.light"
      {...rest}
    >
      <TagLabel fontSize="0.7rem" color="white">
        {name}
      </TagLabel>
    </Tag>
  );
};

export default CategoryTag;
