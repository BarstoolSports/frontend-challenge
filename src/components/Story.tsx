import styled from '@emotion/styled';
import {
  BoxShadow,
  DEFAULT_BORDER_RADIUS,
  DEFAULT_BREAKPOINT,
  DEFAULT_GAP,
} from '../constants/style';
import { Story as StoryType } from '../types/story';
import Image from 'next/image';
import { colors, Typography } from '@mui/joy';
import { truncateMultiLineWithEllipsis, truncateWithEllipsis } from '../utils/style';

export const CARD_HEIGHT = 180;

const Container = styled.div`
  border-radius: ${DEFAULT_BORDER_RADIUS}px;
  border: 1px solid ${colors.grey[200]};
  box-shadow: ${BoxShadow.ONE};
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow: hidden;
  padding: 10px;
  transition: box-shadow 0.2s ease-in-out;
  width: 100%;

  @media (min-width: ${DEFAULT_BREAKPOINT}px) {
    display: grid;
    grid-template-columns: minmax(210px, 0.6fr) 1fr;
    height: ${CARD_HEIGHT}px;
  }

  :hover {
    box-shadow: ${BoxShadow.TWO};
  }
`;

const Thumbnail = styled.div`
  height: ${CARD_HEIGHT}px;
  position: relative;
  transition: opacity 0.2s ease-in-out;
  width: 100%;

  @media (min-width: ${DEFAULT_BREAKPOINT}px) {
    height: 100%;
  }

  :hover {
    opacity: 0.8;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 0;
  overflow: hidden;
  width: 100%;

  a {
    text-decoration: underline 2px transparent;
    transition: text-decoration-color 0.2s ease-in-out;

    &:hover {
      text-decoration-color: ${colors.grey[500]};
    }
  }
`;

const Title = styled(Typography)`
  ${truncateMultiLineWithEllipsis(2)};
` as typeof Typography;

const AttributionContainer = styled.div`
  align-items: center;
  display: flex;
  gap: 10px;
  min-width: 0;
  width: 100%;
`;

interface AuthorImageProps {
  backgroundImage: string;
}

const AuthorImage = styled.div<AuthorImageProps>`
  background-image: url(${({ backgroundImage }) => backgroundImage});
  background-position: top center;
  background-size: cover;
  border-radius: 50%;
  height: 40px;
  min-width: 40px;
  overflow: hidden;
  width: 40px;
`;

const AuthorNameAndDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
  width: 100%;
`;

const AuthorName = styled(Typography)`
  ${truncateWithEllipsis};
`;

interface StoryProps {
  story: StoryType;
}

export const Story = ({ story: { author, thumbnail, title, updated_at, url } }: StoryProps) => {
  const authorImage =
    author.avatar !== null && !author.avatar.startsWith('https://image') ? (
      <AuthorImage backgroundImage={author.avatar} />
    ) : null;

  // Must disable hour and minute due to node bug with `U+202f` whitespace with chromium.
  // https://github.com/nodejs/node/issues/45171
  const lastUpdated = new Date(updated_at).toLocaleDateString('en-us', {
    day: 'numeric',
    // hour: 'numeric',
    // minute: 'numeric',
    month: 'short',
    weekday: 'long',
    year: 'numeric',
  });

  return (
    <Container>
      <a href={url}>
        <Thumbnail>
          <Image objectFit="contain" src={thumbnail.desktop} alt={title} layout="fill" />
        </Thumbnail>
      </a>
      <ContentContainer>
        <a href={url}>
          <Title component="h2" level="h4">
            {title}
          </Title>
        </a>
        <a href={author.author_url}>
          <AttributionContainer>
            {authorImage}
            <AuthorNameAndDataContainer>
              <AuthorName noWrap>{author.name}</AuthorName>
              <Typography color="neutral" fontSize="12px">
                {lastUpdated}
              </Typography>
            </AuthorNameAndDataContainer>
          </AttributionContainer>
        </a>
      </ContentContainer>
    </Container>
  );
};
