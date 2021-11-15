import React from 'react';
import {
  Grid, GridItem, Button, Input, Flex, Text, Image, Badge,
} from '@chakra-ui/react';

const ProductsList = () => (
  <Grid templateColumns="repeat(4, 1fr)" gap={4}>
    <GridItem w="60" h="72" maxW="60" maxH="72" boxShadow="xl">
      <Badge w="fit-content" fontSize="0.8em" colorScheme="red" display="flex" alignItems="center">
        {`${-50.00}%`}
      </Badge>
      <Image
        src="https://img.freepik.com/fotos-gratis/folha-de-salada-alface-isolada-no-branco-com-tracado-de-recorte_9635-3076.jpg?size=626&ext=jpg"
      />
      <Flex flexDirection="column" justify="center" textAlign="center">
        <Text maxH="50px" overflowY="auto">
          Alface
        </Text>
        <Text>
          20,00
        </Text>
        <Flex p={4}>
          <Button colorScheme="whatsapp" borderRadius="8px 0 0 8px">-</Button>
          <Input borderRadius={0} value={0} textAlign="center" />
          <Button colorScheme="whatsapp" borderRadius="0 8px 8px 0">+</Button>
        </Flex>
      </Flex>
    </GridItem>
    <GridItem w="60" h="72" maxW="60" maxH="72" boxShadow="xl">
      <Badge w="fit-content" fontSize="0.8em" colorScheme="red" display="flex" alignItems="center">
        {`${-50.00}%`}
      </Badge>
      <Image
        src="https://img.freepik.com/fotos-gratis/folha-de-salada-alface-isolada-no-branco-com-tracado-de-recorte_9635-3076.jpg?size=626&ext=jpg"
      />
      <Flex flexDirection="column" justify="center" textAlign="center">
        <Text maxH="50px" overflowY="auto">
          Alface
        </Text>
        <Text>
          20,00
        </Text>
        <Flex p={4}>
          <Button colorScheme="whatsapp" borderRadius="8px 0 0 8px">-</Button>
          <Input borderRadius={0} value={0} textAlign="center" />
          <Button colorScheme="whatsapp" borderRadius="0 8px 8px 0">+</Button>
        </Flex>
      </Flex>
    </GridItem>
    <GridItem w="60" h="72" maxW="60" maxH="72" boxShadow="xl">
      <Badge w="fit-content" fontSize="0.8em" colorScheme="red" display="flex" alignItems="center">
        {`${-50.00}%`}
      </Badge>
      <Image
        src="https://img.freepik.com/fotos-gratis/folha-de-salada-alface-isolada-no-branco-com-tracado-de-recorte_9635-3076.jpg?size=626&ext=jpg"
      />
      <Flex flexDirection="column" justify="center" textAlign="center">
        <Text maxH="50px" overflowY="auto">
          Alface
        </Text>
        <Text>
          20,00
        </Text>
        <Flex p={4}>
          <Button colorScheme="whatsapp" borderRadius="8px 0 0 8px">-</Button>
          <Input borderRadius={0} value={0} textAlign="center" />
          <Button colorScheme="whatsapp" borderRadius="0 8px 8px 0">+</Button>
        </Flex>
      </Flex>
    </GridItem>
    <GridItem w="60" h="72" maxW="60" maxH="72" boxShadow="xl">
      <Badge w="fit-content" fontSize="0.8em" colorScheme="red" display="flex" alignItems="center">
        {`${-50.00}%`}
      </Badge>
      <Image
        src="https://img.freepik.com/fotos-gratis/folha-de-salada-alface-isolada-no-branco-com-tracado-de-recorte_9635-3076.jpg?size=626&ext=jpg"
      />
      <Flex flexDirection="column" justify="center" textAlign="center">
        <Text maxH="50px" overflowY="auto">
          Alface
        </Text>
        <Text>
          20,00
        </Text>
        <Flex p={4}>
          <Button colorScheme="whatsapp" borderRadius="8px 0 0 8px">-</Button>
          <Input borderRadius={0} value={0} textAlign="center" />
          <Button colorScheme="whatsapp" borderRadius="0 8px 8px 0">+</Button>
        </Flex>
      </Flex>
    </GridItem>
    <GridItem w="60" h="72" maxW="60" maxH="72" boxShadow="xl">
      <Badge w="fit-content" fontSize="0.8em" colorScheme="red" display="flex" alignItems="center">
        {`${-50.00}%`}
      </Badge>
      <Image
        src="https://img.freepik.com/fotos-gratis/folha-de-salada-alface-isolada-no-branco-com-tracado-de-recorte_9635-3076.jpg?size=626&ext=jpg"
      />
      <Flex flexDirection="column" justify="center" textAlign="center">
        <Text maxH="50px" overflowY="auto">
          Alface
        </Text>
        <Text>
          20,00
        </Text>
        <Flex p={4}>
          <Button colorScheme="whatsapp" borderRadius="8px 0 0 8px">-</Button>
          <Input borderRadius={0} value={0} textAlign="center" />
          <Button colorScheme="whatsapp" borderRadius="0 8px 8px 0">+</Button>
        </Flex>
      </Flex>
    </GridItem>
    <GridItem w="60" h="72" maxW="60" maxH="72" boxShadow="xl">
      <Badge w="fit-content" fontSize="0.8em" colorScheme="red" display="flex" alignItems="center">
        {`${-50.00}%`}
      </Badge>
      <Image
        src="https://img.freepik.com/fotos-gratis/folha-de-salada-alface-isolada-no-branco-com-tracado-de-recorte_9635-3076.jpg?size=626&ext=jpg"
      />
      <Flex flexDirection="column" justify="center" textAlign="center">
        <Text maxH="50px" overflowY="auto">
          Alface
        </Text>
        <Text>
          20,00
        </Text>
        <Flex p={4}>
          <Button colorScheme="whatsapp" borderRadius="8px 0 0 8px">-</Button>
          <Input borderRadius={0} value={0} textAlign="center" />
          <Button colorScheme="whatsapp" borderRadius="0 8px 8px 0">+</Button>
        </Flex>
      </Flex>
    </GridItem>
  </Grid>
);

export default ProductsList;
