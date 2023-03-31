import styled from '@emotion/styled';
import { DEFAULT_BREAKPOINT, DEFAULT_GAP } from '../constants/style';
import { useGetFeed } from '../hooks/useGetFeed';
import { Story } from './Story';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${DEFAULT_GAP}px;
  padding: 40px 10px;
  width: 100%;

  @media (min-width: ${DEFAULT_BREAKPOINT}) {
    padding: 40px 0;
  }
`;

export const Feed = () => {
  const { feed } = useGetFeed({});

  const feedComponents = feed.map((story) => <Story key={story.id} story={story} />);

  return <Container>{feedComponents}</Container>;
};
