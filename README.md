This small project is to assess a front-end engineering candidate's procifiency with React, Nextjs and CSS. The goal is to create a feed of Barstool Sports content with some additional functionality.

## Requirements

Please complete the following features:

- Fetch stories from the Barstool API and render them in a feed.
  - Create a `Feed` component to render a list of stories.
  - Create a `Story` component to render each story.
- Add a Load More button to fetch older stories and add them to the list.
  - There should be a loading state for the button while the data is fetching.
  - Create a custom hook called `useFeed` to implement this feature.
- Add polling to check for new stories every 30 seconds and prepend them to the feed.
  - Add this functionality to the `useFeed` hook.
  
## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. There are some global styles and basic layout set up on the homepage.

You can start by modifying `pages/index.js`.

## API Details

The API URL to GET stories can be found in `src/constants/index.js`. This endpoint will return 25 stories by default. You can fetch additional stories by appending the `page` query paramater.