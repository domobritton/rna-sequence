import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      lavender: string;
      tooltip: string;
      annotationBk: string;
      boxShadow: string;
    };
    space: {
      xxxl: string;
      xxl: string;
      xl: string;
      lg: string;
      md: string;
      sm: string;
    };
  }
}
