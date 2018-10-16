---
title: Stream React Components
date: 2018-08-08
---

Check out the [source code over at GitHub](https://github.com/GetStream/stream-react-components).

Stream React Components are a set of React components that help you integrate with [Stream](https://getstream.io/). It includes a baseline `<Feed />` component that you can drop in any React app (with your Stream application tokens + keys) to instantly retrieve a feed client-side.

`stream-react-components` was one of my last projects at Stream, but it's also one of the most important ones — integrating with Stream is a pretty complex task, and providing a bunch of frontend components makes the process _much_ easier. (I left Stream a little ways into this project, so it's still pretty limited on features.)

Here's the quickstart code:

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import StreamReactComponents from 'stream-react-components';

let {Feed} = StreamReactComponents(yourStreamAppKey, yourStreamAppID);

ReactDOM.render(
    <Feed feedToken={someFeedTokenYouGotAsynchronously} feedSlug={"profile"} feedID={1234}/>,
    document.getElementById('app')
);
```

## Features

`stream-react-components` was made to handle a bunch of different Stream features. Per the library `README.md`:

-   **Retrieval of feeds, client-side** - no server-side integration needed (besides initial token generation)
-   **Completely customizable activity components and render methods**
-   **Automatic pagination** for long feeds (with infinite scroll)
-   **Realtime websocket connections** to Stream for newly added activities
-   **Clean, minimalistic styling** (that's also completely customizable and removable)

One of the key things that I had to design for early on was being able to use these components with a minimum amount of configuration out of the box, but also allow for complete customization. There's basically three levels of customization available:

-   **No customization** - throw a `<Feed />` component onto the page with the feed ID, and the library will retrieve and render the feed objects for you
-   **Use a custom `ActivityComponent`** - the library will still handle pagination, but the component passed to the `activityComponent` prop will be rendered with the activity information, allowing you to customize the contents of activities
-   **Don't use any of the predesigned stuff, and use your own `render` method** - the `render` prop will be called with the array of activities retrieved, in addition to providing info about seen/read counts and callbacks (in a future version)

Oh, it was also able to handle "flat" feeds and "aggregated" feeds pretty much interchangeably, which both have different data models :)

## Tech deets

`stream-react-components` is written in [ES6](http://es6-features.org/) and [React](https://reactjs.org/), built with [Webpack](https://webpack.js.org/), and tested with [Jest](https://jestjs.io/), and deployed to [NPM](https://www.npmjs.com/package/stream-react-components). Docs are hosted on [GitBook](https://stream.gitbook.io/stream-react-components/), and you can find all the [source code on GitHub](https://github.com/GetStream/stream-react-components).

If you're ever building your own React component library, there's one little thing that you have to include as part of your `webpack` config, just to make sure that the bundle is interpreted the right way:

```js
output: {
        filename: "your-component-library.js",
        libraryTarget: "umd"
    }
```

If you're interested in some quick frontend react components for your [Stream](https://getstream.io/) integration, go check them out!
