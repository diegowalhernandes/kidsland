import { styled } from "@stitches/react";

export const SlideContainer = styled('div', {
    display: 'flex',
  });
  
  export const SlideItem = styled('div', {
    display: 'none',
    variants: {
      active: {
        true: {
          display: 'block',
        },
      },
    },
  });