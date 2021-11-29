import { useEffect } from 'react';
import { Flex, Box } from '@chakra-ui/react';

export const Tooltip = ({ payload, active, callback }) => {
  if (!payload || !active) return null;
  const gene = payload[0].payload.gene;

  useEffect(() => {
    if (!!gene) {
      callback?.(gene);
    }
  }, [gene]);

  return (
    <Flex
      padding={4}
      minWidth={200}
      backgroundColor='tooltip'
      justifyContent='center'
      flexDirection='column'
    >
      {gene && <Box>{`Gene: ${gene}`}</Box>}
      <Box>{`Molecule: ${payload[0].payload.name}`}</Box>
      <Box>{`Count: ${payload[0].value}`}</Box>
      <Box>{`Range value: ${payload[0].payload.xAxis}`}</Box>
    </Flex>
  );
};

export default Tooltip;
