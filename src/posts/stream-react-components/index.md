---
title: Stream React Components
date: 2018-08-08
---

Check out the [source code over at GitHub](https://github.com/GetStream/stream-react-components).

Stream React Components are a set of React components that help you integrate with Stream. It includes a baseline `<Feed />` component that you can drop in any React app (with your Stream application tokens + keys) to instantly retrieve a feed client-side.

`stream-react-components` was one of the last projects I got to work on at Stream. I left Stream a little while into this project, so it's still pretty limited on features, but it's also one of the most important projects I worked on at Stream

## Features

-   Retrieval of feeds, client-side - no server-side integration needed (besides initial token generation)
-   Completely customizable activity components and render methods
-   Automatic pagination for long feeds (with infinite scroll)
-   Realtime websocket connections to Stream for newly added activities
-   Clean, minimalistic styling (that's also completely customizable and removable)

## Tech deets

`stream-react-components` is written in [ES6](http://es6-features.org/) and [React](https://reactjs.org/), built with [Webpack](https://webpack.js.org/), and tested with [Jest](https://jestjs.io/), and deployed to [NPM](https://www.npmjs.com/package/stream-react-components). Docs are hosted on GitBook, and you can find all the [source code on GitHub](https://github.com/GetStream/stream-react-components).

```js
output: {
        filename: "stream-react-components.js",
        libraryTarget: "umd"
    }
```

If you're interested in some quick frontend react components for your [Stream](https://getstream.io/) integration, go check them out!
