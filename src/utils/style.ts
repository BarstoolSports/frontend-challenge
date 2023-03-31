import { css } from '@emotion/react';

export const truncateWithEllipsis = css`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const truncateMultiLineWithEllipsis = (lines: number) => css`
  ${truncateWithEllipsis};
  @supports (-webkit-line-clamp: ${lines}) {
    -webkit-box-orient: vertical;
    -webkit-line-clamp: ${lines};
    display: -webkit-box;
    white-space: initial;
  }
`;
