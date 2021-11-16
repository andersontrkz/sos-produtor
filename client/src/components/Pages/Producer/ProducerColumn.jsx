import React from 'react';
import PropTypes from 'prop-types';
import {
  Box, Text, Image, Badge, Flex,
} from '@chakra-ui/react';

const Producer = ({ producer: { rate, range, cost } }) => (
  <Box>
    <Image w="48" h="48" objectFit="cover" src="http://urupes.sp.gov.br/noticias/upload/postagens/836105552.jpg" />
    <Text pt={1} fontWeight={600}>Seu Zé</Text>
    <Flex fontSize="smaller" flexDirection="column">
      <Text my={1}>
        ⭐
        {rate}
      </Text>
      <Text my={1}>
        💰
        {cost}
      </Text>
      <Text my={1}>
        📍
        {range}
      </Text>
      <Badge my={1} py={1} px={4} fontSize="0.8em" colorScheme="facebook" display="flex" alignItems="center" w="fit-content">
        Frete Grátis
      </Badge>
    </Flex>
  </Box>
);

Producer.propTypes = {
  producer: PropTypes.string.isRequired,
};

export default Producer;
