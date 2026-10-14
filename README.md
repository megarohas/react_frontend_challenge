# React Frontend Challenge

A small React app that lists films and TV seasons from a mock JSON catalogue,
with a category switch and a few component tests.

## Features

- Loads the catalogue from `public/videos.json` (`films` and `tv_seasons`).
- Two category buttons, *Films* and *TV Seasons*; the active one is disabled.
- Videos of the selected category are sorted by release year, newest first.
- Each item shows name, description and buy / rent prices. TV seasons also
  show the number of episodes, or "TV Film" when there is only one.

## Tech stack

React 16 (Create React App 3), React Testing Library / Jest.

## Getting started

Built in February 2020 with `react-scripts` 3 — use Node 12–16 (newer Node
fails on webpack 4's OpenSSL usage).

```bash
yarn install
yarn start      # http://localhost:3000
yarn test       # component tests
yarn build      # production build in build/
```

## Project structure

```
public/videos.json                  mock data
src/App.js                          state, data loading, sorting
src/components/category_switch/     category buttons + test
src/components/video_list/          list of videos
src/components/video_item/          single video card + test
src/App.test.js                     smoke test
```

## Context

Built as a frontend coding challenge in a single day (February 2020).
