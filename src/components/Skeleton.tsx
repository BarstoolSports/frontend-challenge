// Taken from MUI Skeleton:
// https://github.com/mui/material-ui/blob/master/packages/mui-material/src/Skeleton/Skeleton.js

import { keyframes } from '@emotion/css';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { colors, Typography } from '@mui/joy';
import { ReactNode } from 'react';

const waveKeyframe = keyframes`
  0% {
    transform: translateX(-100%);
  }
  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }
  100% {
    transform: translateX(100%);
  }
`;

const waveAnimation = css`
  position: relative;
  overflow: hidden;
  mask-image: -webkit-radial-gradient(white, black);
  /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
  -webkit-mask-image: -webkit-radial-gradient(white, black);
  &::after {
    animation: ${waveKeyframe} 1.6s linear 0.5s infinite;
    background: linear-gradient(90deg, transparent, ${colors.grey[100]}, transparent);
    bottom: 0;
    content: '';
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transform: translateX(-100%); /* Avoid flash during server-side hydration */
  }
`;

const StyledSkeleton = styled.div<{ borderRadius: string; height: string; width: string }>`
  background: ${colors.grey[200]};
  border-radius: ${({ borderRadius }) => borderRadius};
  height: ${({ height }) => height};
  width: ${({ width }) => width};

  ${waveAnimation}
`;

interface SkeletonProps {
  className?: string;
  /**
   * Height of skeleton. Use `18` as number for px or `50%` as string for percentage.
   *
   * @default 18
   */
  height?: number | string;
  /**
   * @default 'text'
   */
  variant?: 'circular' | 'text';
  /**
   * Width of skeleton.
   *
   * @default '100%'
   */
  width?: number | string;
}

/**
 * Ex.
 *
 * ```
 * // Circle
 * <Skeleton variant="circular" width={20} height={20} />
 * ```
 */
export const Skeleton = ({
  className,
  height = 18,
  width = '100%',
  variant = 'text',
}: SkeletonProps) => {
  const localHeight = typeof height === 'number' ? `${height}px` : height;
  const localWidth = typeof width === 'number' ? `${width}px` : width;
  const localBorderRadius = variant === 'circular' ? '50%' : '8px';

  return (
    <StyledSkeleton
      borderRadius={localBorderRadius}
      className={className}
      height={localHeight}
      width={localWidth}
    />
  );
};

const StyledParagraph = styled(Typography)`
  display: block;
  margin-bottom: 6px;
` as typeof Typography;

interface SkeletonParagraphProps {
  className?: string;
  /**
   * @default 3
   */
  lines?: number;
}

export const SkeletonParagraph = ({
  className,
  lines: numberOfLines = 3,
}: SkeletonParagraphProps) => {
  if (numberOfLines < 1) {
    throw new Error('Must have one or more lines.');
  }

  let content: ReactNode[] = [];

  for (let x = 0; x < numberOfLines; x++) {
    const isLastItem = x === numberOfLines - 1;
    content = [
      ...content,
      <StyledParagraph component="div" key={x} level="body1">
        <Skeleton width={isLastItem ? '80%' : undefined} />
      </StyledParagraph>,
    ];
  }

  return <div className={className}>{content}</div>;
};
