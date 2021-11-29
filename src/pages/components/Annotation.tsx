import { Flex, Box, WithCSSVar } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

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

const Anno = styled(Flex)`
  padding: ${({ theme }) => theme.space.sm} 0;
  width: 10rem;
  border-bottom: 2px solid cornflowerblue;
  align-items: center;
  justify-content: center;
  animation: ${slide} 500ms ease-in;
  transition: background 500ms ease-in-out;
`;

interface AnnotationProps {
  annotation: string;
  gene: string;
  theme: WithCSSVar<any>; //@TODO: type this correctly
}

export const Annotation = ({ annotation, gene, theme }: AnnotationProps) => (
  <AnnotationContainer>
    <Anno
      background={
        gene === annotation ? theme.colors.annotationBk : 'transparent'
      }
    >
      {annotation}
    </Anno>
  </AnnotationContainer>
);

export default Annotation;
