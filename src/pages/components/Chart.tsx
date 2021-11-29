import { useState } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { Flex, Box, useTheme, Alert } from '@chakra-ui/react';
import styled from '@emotion/styled';
import Div100vh from 'react-div-100vh';

import { Tooltip as CustomTooltip } from './Tooltip';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Loader } from './Loader';
import { Annotation } from './Annotation';
import useRnaApi from '../api/hooks/useRnaApi';
import getFormattedData, { getAnnotations, getTicks } from './utils';

const Wrapper = styled(Box)`
  ${({ theme }) => `
    width: 100%;
    height: 100%;
    max-width: calc(100vw - ${theme.space.xxl});
    max-height: calc(100% - ${theme.space.xxl});
    padding: ${theme.space.md} ${theme.space.md} ${theme.space.xxxl} 0;

    @media (max-width: 650px) {
      padding-bottom: 0;
    }
  `}
`;

const YColumn = styled(Div100vh)`
  ${({ theme }) => `
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${theme.space.xxl};
    box-shadow: 4px 0px 3px -2px ${theme.colors.boxShadow};

    @media (max-width: 650px) {
      width: ${theme.space.lg};
    }
  `}
`;

const ChartColumn = styled(Div100vh)`
  display: flex;
  flex: 2 1 0;
  flex-direction: column;
`;

const XRow = styled(Flex)`
  ${({ theme }) => `
    padding: ${theme.space.md};
    height: ${theme.space.xxl};
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 -4px 3px -2px ${theme.colors.boxShadow};

    @media (max-width: 650px) {
      height: ${theme.space.lg};
    }
  `}
`;

const Count = styled(Box)`
  transform: rotate(-90deg);
`;

const Annotations = styled(Flex)`
  justify-content: space-around;

  @media (max-width: 650px) {
    display: none;
  }
`;

const RnaChart = () => {
  const [gene, setGene] = useState<string>('');
  const { data, isLoading, error } = useRnaApi();
  const formattedData = getFormattedData(data);
  const tickData = getTicks(data);
  const annotations = getAnnotations(data);
  const theme = useTheme();

  const handleGeneCallback = (gene: string) => {
    setGene(gene);
  };

  if (isLoading) {
    return (
      <Flex
        justifyContent='center'
        alignItems='center'
        height='100vh'
        width='100vw'
      >
        <Loader />
      </Flex>
    );
  }

  if (error) {
    return (
      <Alert
        margin={2}
        width='auto'
        justifyContent='center'
        maxWidth={650}
        marginLeft='auto'
        marginRight='auto'
      >
        Oops. There was a problem loading this page. Please try again.
      </Alert>
    );
  }

  return (
    <Flex as='section'>
      <YColumn>
        <Count>Count</Count>
      </YColumn>
      <ChartColumn>
        <Wrapper>
          <ResponsiveContainer>
            <AreaChart data={formattedData}>
              <XAxis
                dataKey='xAxis'
                type='number'
                ticks={tickData?.ticks}
                domain={[0, tickData?.maxTick]}
              />
              <YAxis />
              <Tooltip
                content={
                  <CustomTooltip
                    callback={handleGeneCallback}
                    payload={undefined}
                    active={undefined}
                  />
                }
              />
              <Area
                type='monotone'
                dataKey='count'
                stroke={theme.colors.lavender}
                fill={theme.colors.lavender}
              />
            </AreaChart>
          </ResponsiveContainer>
          <Annotations>
            {annotations?.map(({ id, annotation }) => (
              <Annotation
                key={id}
                annotation={annotation}
                gene={gene}
                theme={theme}
              />
            ))}
          </Annotations>
        </Wrapper>
        <XRow>
          <Box>Range</Box>
          <ColorModeSwitcher />
        </XRow>
      </ChartColumn>
    </Flex>
  );
};

export default RnaChart;
