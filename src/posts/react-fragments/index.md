---
title: React Fragments
date: 2018-06-18
---

> Hey!
>
> What you're about to read is a blog post that was published during my time at [Stream](http://getstream.io). All of the technical content comes directly from me, but these posts are generally content marketing material intended to promote a specific feature or project we've been working on - in this case, we had recently launched [Winds](https://getstream.io/winds), an open-source RSS reader and podcast player.
>
> I gave a talk about this at [the May 2018 DenverScript meetup](https://www.meetup.com/DenverScript/events/ssgrlpyxhbmc/) as well - you can watch that [here](https://youtu.be/39XU-OkN7lA?t=14m38s) and check out the slides [here](/slides/fragments).
>
> Enjoy!



![](react-fragments.png)

Hi there! I’m Ken. I’m a Developer Advocate over at [GetStream.io](https://getstream.io/), where we build personalized and scalable activity feeds.

For the last several months, I’ve been working on Winds 2.0, an open-source RSS reader and podcast listening app. It’s built in Node.js, Electron, Redux and React, and as of this writing, has over 5,000 stars on GitHub. If you’d like to check it out, head on over to [https://getstream.io/winds/](https://getstream.io/winds/), or check out the source code at [https://github.com/GetStream/winds](https://github.com/GetStream/winds).

In Winds, we had a couple of unique frontend situations requiring the use of **React Fragments**. React Fragments are a neat little feature that were released late last year with [React v16.2.0](https://reactjs.org/blog/2017/11/28/react-v16.2.0-fragment-support.html) — it’s a pretty small feature, but just knowing about the existence of them can save developers a huge headache when running into some very specific layout and styling situations.

## Okay, so what’s a React Fragment?

Let’s back up a little — I’m sure that every React developer will have run into this at some point in their career (or will, very soon):

```jsx
class App extends React.Component {
    render() {
        return (
            <p>I would</p>
            <p>really like</p>
            <p>to render</p>
            <p>an array</p>
        );
    }
}
```

Looks fine to me! But when we run it through the JSX transpiler…

```
  Failed to compile.

    ./src/App.js
    Syntax error: Adjacent JSX elements must be wrapped in an enclosing tag (6:8)

        4 |         return (<p>I would
        5 |         </p>
        6 |         <p>
          |         ^
        7 |             really like
        8 |         </p>
        9 |         <p>
```

Our JSX transpiler doesn’t like that 🙁

> ( **What’s happening behind the curtain here?** JSX is turning all of our `<div>`s and `<MyComponent>`s into `React.createElement()` calls — when the JSX transpiler sees multiple elements instead of a single element, it doesn’t know what tag name to render with. See [React.createElement in the React documentation](https://reactjs.org/docs/react-api.html#createelement).)

So, what do we do? The same thing that we do every time we need to wrap a couple elements together, Pinky — wrap it in a `<div>`! Just like web developers have been doing since the invention of the `<div>` tag, another nested `<div>` in the DOM won’t hurt anything (probably).

```jsx
class App extends React.Component {
    render() {
        return (
            <div>
                <p>I would</p>
                <p>really like</p>
                <p>to render</p>
                <p>an array</p>
            </div>
        );
    }
}
```

Right, problem solved. But it turns out, there’s one more way to render this group of content on the page inside of a single React Component – by having the `render` method return an _array_ of nodes.

```jsx
class App extends React.Component {
    render() {
        return [
            <p>I would</p>,
            <p>really like</p>,
            <p>to render</p>,
            <p>an array</p>
        ];
    }
}
```

If we return an _array_ of elements, then React will transpile and render this just fine, _without a wrapper `<div>`_. Neat!

> (Remember how the JSX transpiler is just turning the `<div>` and `<MyComponent>` tags into `React.createElement()` calls? In this case, the transpiler is just putting together an array of those calls and affixing them directly to the parent element as children, as opposed to an array of uncontained elements that it can’t find a parent for. This feature got introduced with React v16.0.0.)

See, here’s the thing – Dan Abramov and the super duper smart folks on the React team looked at this and said:

“Okay, so you can render an array of elements in two different ways – either by introducing an extra `<div>` into the DOM, or by using some clunky non-JSX syntax. That doesn’t make for a good developer experience!”

So, in v16.2.0, they [released support for React Fragments](https://reactjs.org/blog/2017/11/28/react-v16.2.0-fragment-support.html).

## Okay, **now** what’s a React Fragment?

Here’s the correct way to use a React Fragment:

```jsx
class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <p>I would</p>
                <p>really like</p>
                <p>to render</p>
                <p>an array</p>
            </React.Fragment>
        );
    }
}
```

Check this out – we write this just like we would the `<div>`-wrapper method, but it’ll behave functionally equivalent to the array-render method, just with some nice JSX syntax. This will render those paragraph elements as an array, without any kind of wrapper `<div>`.

> There’s also an alternate, more concise syntax for using React Fragments:

```jsx
class App extends React.Component {
    render() {
        return (
            <>
                <p>I would</p>
                <p>really like</p>
                <p>to render</p>
                <p>an array</p>
            </>
        );
    }
}
```

> Depending on your tooling, linters, build pipeline, etc, this might not work for you – the release notes say that wider support is on the way, but I’ve noticed `create-react-app` doesn’t support it yet.

## Okay, but when do I actually use them?

**Whenever you need to get rid of a wrapper `<div>`.**

That’s it – if you ever find yourself in a situation where a wrapper `<div>` is screwing up the layout of your React components, use a React Fragment.

So, whenever you want to turn this:

```html
<div class="app">

    (...a bunch of other elements)

    <div> (my react component)
        <ComponentA></ComponentA>
        <ComponentB></ComponentB>
        <ComponentC></ComponentC>
    </div>

    (...a bunch more elements)

</div>
```

Into this:

```html
<div class="app">

    (...a bunch of other elements)

    <ComponentA></ComponentA>
    <ComponentB></ComponentB>
    <ComponentC></ComponentC>

    (...a bunch more elements)

</div>
```

## Example: 2×2 CSS grid

In Winds 2.0, we made pretty heavy use of [CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/). This is one of the general layouts that you’ll see when looking through podcasts or RSS feeds:

![](https://getstream-blog.imgix.net/blog/wp-content/uploads/2018/06/Screen-Shot-2018-06-15-at-10.49.13-AM.png?w=300&h=300)

If you don’t know CSS Grid yet, don’t worry – this bit of CSS will give you a quick idea of how things are laid out:

```css
.grid {
    display: grid;
    grid-template-areas:
        'topnav header'
        'subnav content';
    grid-gap: 1em;
}
```

Okay, let’s unpack this:

- In the upper left, we’ve got our brand / top-level navigation bits.
- In the lower left, we’ve got our “sub-navigation” – this can respond to a couple changes in global and local state, like “active” states, tabs, or collapsing navigation.
- On the right side, we’ve got the content that we’d like to show on the screen — in Winds, this is something like an RSS feed or article header, paired with an article list or article contents. **These two sections will be a single React component –** the props for both components change based on URL navigation.

All of these components interact with global (redux + URL) and local state slightly differently. This view is structured so that we’ve got **three** React components as siblings:

```jsx
<div className="grid">
    <TopNav />
    <SubNav />
    <ContentComponent />
</div>
```

But, we want **four** elements actually rendered to the page:

```html
<div class="grid">
    <div class="topnav"  />
    <div class="subnav"  />
    <div class="header"  />
    <div class="content" />
</div>
```

This...presents kind of a problem without React Fragments. Imagine that we’re creating the component that wraps the two right sections of our 2×2 grid view, the `ContentComponent`:

```jsx
class ContentComponent extends React.Component {
    render() {
        return (
            <div>
                <div className="header"/>
                <div className="content"/>
            </div>
        );
    }
}
```

If we wrap the rendered content in `<div>`s, then we’ll get the following rendered output:

```html
<div class="grid">
    <div class="topnav"  />
    <div class="subnav"  />
    <div>
        <div class="header"  />
        <div class="content" />
    </div>
</div>
```

**This won’t work –** it will _totally_ screw up the CSS grid. From the browser’s point of view, only 3 items are present inside the grid, and one of them doesn’t have a `grid-area` style set.

Remember when we’re supposed to use React Fragments? **Whenever we want to get rid of a `<div>`.** If we wrap our `ContentComponent` in React Fragments instead of a `<div>`:

```jsx
class ContentComponent extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="header"/>
                <div className="content"/>
            </React.Fragment>
        );
    }
}
```

Then we’ll see a much different rendered output:

```html
<div class="grid">
    <div class="topnav"  />
    <div class="subnav"  />
    <div class="header"  />
    <div class="content" />
</div>
```

And that works exactly as expected! No wrapper `<div>` is rendered, our 4 elements are rendered from 3 React components, the browser sees all elements with the correct `grid-area` style, and our CSS Grid is rendered correctly.

## Neat! What now?

React Fragments aren’t the most significant feature that’s shown up in React recently, but they are _tremendously_ helpful in some specific situations. Just by knowing about the existence of React Fragments, you’ll save many hours of google-fu-induced headaches. They let us render an array of elements / components in a JSX-y way, which can solve a lot of layout and styling issues with tables, lists, and CSS grids.

If you’re interested in seeing some of these React Fragments in a production app, check out the source code for Winds 2.0 over at [https://github.com/GetStream/winds](https://github.com/GetStream/winds) — or, you can download and use Winds 2.0 over at [https://getstream.io/winds/](https://getstream.io/winds/).

Until next time – cheers!
