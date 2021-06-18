This small project is to assess a front-end engineering candidate's procifiency with React, Nextjs and CSS. The goal is to create a feed of Barstool Sports content with some additional functionality.

## Requirements

Please complete the following features:

- Fetch stories from the Barstool API and render them in a feed.
  - Create a `Feed` component to render a list of stories.
  - Create a `Story` component to render each story.
- Add a Load More button to fetch older stories and add them to the list.
  - There should be a loading state for the button while the data is fetching.
  - Create a custom hook called `useFeed` to implement this feature.
- Add polling to check for new stories every 10 seconds and prepend them to the feed.
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

## Design

### `<Story />`
<img width="581" alt="Screen Shot 2021-06-18 at 1 26 11 PM" src="https://user-images.githubusercontent.com/9220514/122597170-00cbc680-d039-11eb-99d8-c035ddebc510.png">

### `<Feed />`
<img width="633" alt="Screen Shot 2021-06-18 at 1 30 01 PM" src="https://user-images.githubusercontent.com/9220514/122597441-599b5f00-d039-11eb-96a5-47b51879ee51.png">

### Load More Button
<img width="580" alt="Screen Shot 2021-06-18 at 1 28 22 PM" src="https://user-images.githubusercontent.com/9220514/122597273-2658d000-d039-11eb-92c9-f293327036a5.png">
<img width="581" alt="Screen Shot 2021-06-18 at 1 28 42 PM" src="https://user-images.githubusercontent.com/9220514/122597286-2a84ed80-d039-11eb-9c1d-b9b34d1bc6fc.png">
