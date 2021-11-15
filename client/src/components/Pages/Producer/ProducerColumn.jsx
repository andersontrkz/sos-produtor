import React from 'react';
import {
  Box, Text, Image, Badge, Flex,
} from '@chakra-ui/react';

const Producer = () => (
  <Box>
    <Image w="48" h="48" objectFit="cover" src="http://urupes.sp.gov.br/noticias/upload/postagens/836105552.jpg" />
    <Text pt={1} fontWeight={600}>Seu Zé</Text>
    <Flex fontSize="smaller" flexDirection="column">
      <Text my={1}>⭐ 4,5 (57)</Text>
      <Text my={1}>💰💰💰</Text>
      <Text my={1}>📍 4,2 Km</Text>
      <Badge my={1} py={1} px={4} fontSize="0.8em" colorScheme="facebook" display="flex" alignItems="center" w="fit-content">
        Frete Grátis
      </Badge>
    </Flex>
  </Box>
);

export default Producer;
