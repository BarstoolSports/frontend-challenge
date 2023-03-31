import styled from '@emotion/styled';
import { Button, CircularProgress, Typography } from '@mui/joy';
import { DEFAULT_BREAKPOINT, DEFAULT_GAP } from '../constants/style';
import { useGetFeed } from '../hooks/useGetFeed';
import { CARD_HEIGHT, Story } from './Story';
import { MdArrowDownward, MdRefresh } from 'react-icons/md';
import { Skeleton } from './Skeleton';

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
  const { feed, errored, incrementPage, loading } = useGetFeed();

  const feedComponents = feed.map((story) => <Story key={story.id} story={story} />);
  const isFirstLoad = !feed.length && loading;
  const noData = !feed.length && !loading && !errored;

  const buttonText = loading ? 'Loading...' : 'Load More';
  const buttonIcon = loading ? <CircularProgress variant="outlined" /> : <MdArrowDownward />;

  if (errored) {
    return (
      <Container>
        <Typography>
          There was an error receiving results from the API. Please refresh the page and try again.
        </Typography>
        <Button onClick={() => window.location.reload()} startDecorator={<MdRefresh />}>
          Reload
        </Button>
      </Container>
    );
  }

  if (noData) {
    return (
      <Container>
        <Typography>No data found.</Typography>
        <Button onClick={() => window.location.reload()} startDecorator={<MdRefresh />}>
          Reload
        </Button>
      </Container>
    );
  }

  if (isFirstLoad) {
    return (
      <Container>
        <Skeleton height={CARD_HEIGHT} />
        <Skeleton height={CARD_HEIGHT} />
        <Skeleton height={CARD_HEIGHT} />
      </Container>
    );
  }

  return (
    <Container>
      {feedComponents}
      <Button disabled={loading} onClick={incrementPage} startDecorator={buttonIcon}>
        {buttonText}
      </Button>
    </Container>
  );
};
