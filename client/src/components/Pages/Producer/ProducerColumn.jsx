import React from 'react';
import PropTypes from 'prop-types';
import {
  Box, Text, Image, Badge, Flex,
} from '@chakra-ui/react';
import { MdOutlineGrade, MdGrade } from 'react-icons/md';
import { RiMoneyDollarCircleLine, RiMoneyDollarCircleFill } from 'react-icons/ri';
import { BsFillGeoAltFill } from 'react-icons/bs';

const Producer = ({
  producer: {
    rate, range, cost, benefits = ['Frete Grátis', 'Novo', '-50% OFF'],
  },
}) => {
  const generateProducerStats = (stats, activeElement, inativeElement) => {
    const array = [];
    for (let index = 0; index < Number(stats); index += 1) {
      array[index] = activeElement;
    }

    for (let index = Number(stats); index < 5; index += 1) {
      array[index] = inativeElement;
    }

    return array;
  };

  const generateProducerBenefitsColor = (benefit) => {
    switch (benefit) {
      case 'Novo':
        return 'linkedin';
      case 'Frete Grátis':
        return 'whatsapp';
      default:
        return 'red';
    }
  };
  const generateProducerBenefits = () => benefits.map((benefit) => (
    <Badge my={1} py={1} px={4} fontSize="0.8em" colorScheme={generateProducerBenefitsColor(benefit)} display="flex" alignItems="center" w="fit-content">
      {benefit}
    </Badge>
  ));

  return (
    <Box>
      <Image w="48" h="48" objectFit="cover" src="http://urupes.sp.gov.br/noticias/upload/postagens/836105552.jpg" />
      <Text pt={1} fontWeight={600}>Seu Zé</Text>
      <Flex fontSize="smaller" flexDirection="column">
        <Flex my={1} display="flex" alignItems="center" fontSize="large" color="var(--tertiary-color)">
          {generateProducerStats(rate, <MdGrade />, <MdOutlineGrade />)}
        </Flex>
        <Flex my={1} display="flex" alignItems="center" fontSize="larger" color="var(--primary-color)">
          {generateProducerStats(cost, <RiMoneyDollarCircleFill />, <RiMoneyDollarCircleLine />)}
        </Flex>
        <Flex my={1} fontSize="larger">
          <BsFillGeoAltFill />
          {range}
        </Flex>
        {generateProducerBenefits()}
      </Flex>
    </Box>
  );
};

Producer.propTypes = {
  producer: PropTypes.string.isRequired,
};

export default Producer;
