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
import { keyframes } from '@emotion/react';
import Div100vh from 'react-div-100vh';

import { Tooltip as CustomTooltip } from './Tooltip';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import useRnaApi from '../api/hooks/useRnaApi';
import getFormattedData, { getAnnotations, getTicks } from './utils';
import { Loader } from './Loader';

const Wrapper = styled(Box)`
  ${({ theme }) => `
    width: 100%;
    height: 100%;
    max-width: calc(100vw - ${theme.space.xxl});
    max-height: calc(100% - ${theme.space.xxl});
    padding: ${theme.space.md} ${theme.space.md} ${theme.space.xxxl};

    @media (max-width: 650px) {
      padding-bottom: ${theme.space.md};
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
    padding: 0 ${theme.space.md};
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

const AnnotationContainer = styled(Box)`
  overflow: hidden;
`;

const slide = keyframes`
  0% {
    transform: translate3d(-100%, 0, 0);
    opacity: 0;
  }
  100% {
    transform: translate3d(0%, 0, 0);
    opacity: 1;
  }
`;

const Annotation = styled(Flex)`
  padding: ${({ theme }) => theme.space.sm} 0;
  width: 10rem;
  border-bottom: 2px solid cornflowerblue;
  align-items: center;
  justify-content: center;
  animation: ${slide} 500ms ease-in;
  transition: background 500ms ease-in-out;
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
    <Flex>
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
              <AnnotationContainer key={id}>
                <Annotation
                  background={
                    gene === annotation
                      ? theme.colors.annotationBk
                      : 'transparent'
                  }
                >
                  {annotation}
                </Annotation>
              </AnnotationContainer>
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
