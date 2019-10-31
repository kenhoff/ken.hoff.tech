---
title: "BoulderJS: Frontend Authenticated Routes with react-router"
date: 2018-02-21
---

In early 2018, I was working on a project at [Stream](https://getstream.io) called [Winds](https://getstream.io/winds) - an open-source RSS reader and podcast player.

Winds is what I usually refer to as a "big hairy web app" - usually a single-page app, decoupled API, lots of complex frontend state management.

One of the interesting problem domains that we run into with big hairy web apps is authentication - specifically, managing the communication of tokens between the client and server. Usually I'll use cookies + sessions, but for this particular app, we were using [JWT](https://jwt.io/)s.

> Glossary time!
>
> **Authentication** is the act of verifying that a user is who they claim to be - e.g., Ken Hoff is a twentysomething-year-old (hah) male with blonde hair and blue eyes, and the ID that he's carrying proves that with at least 6 bits of certainty.
>
> **Authorization** is the act of verifying that a given user has permission to perform a certain action (view this page, update this document, etc) - e.g., the user Ken Hoff is authorized (with confidential double top-secret clearance) to send the launch codes. or something.

When I started on the project, JWTs were stored in localStorage (not cookies), and all of the authentication components were bundled as part of the big hairy web app. It would have been better to send the auth token as part of the initial HTTP request (by storing it in the browser cookie storage) and decouple the auth components from the main app components, but I was working within existing constraints and Captain Hindsight wasn't around that day.

We wanted a bunch of different authentication behaviors in the web app:

-   _Unauthenticated_ users should always be redirected to the "Login" page
-   _Unauthenticated_ users should also be able to access the "Create Account" and "Reset Password" pages without being redirected
-   _Authenticated_ users should be redirected to the "Home" page after completing the "Login" page, ideally without a page refresh
-   If an _authenticated_ user attempts to access the "Login", "Create Account", or "Reset Password" page, they should be redirected back to the "Home" page.
-   Some components always need to be rendered to the page (header, navigation, that sort of thing) regardless of authentication status.

Yikes. Lotta [cyclomatic complexity](https://en.wikipedia.org/wiki/Cyclomatic_complexity) there! That's alright though - I was able to get it done in a pretty reasonable way. (hint: creating an `AuthedRoute` component and mirroring standard `react-router` `Route` behavior.) There's still a bunch of features that I'd like to see added to it - like checking for auth before serving the bundle and splitting the auth components, or deep linking.

I felt pretty clever about the whole thing, so I decided to put together a quick talk describing how I did it, and presented at [the February BoulderJS meetup](https://www.meetup.com/Boulder-JS/events/xmkdvmyxdbcc/).

Check out [the full recording of the talk here](https://www.youtube.com/watch?v=sURaVWwi4GU), and [the slides here](/slides/frontend-authed-routes).

Huge thanks to [Madison Kerndt](https://twitter.com/cipher_sift) and the rest of the BoulderJS crew for letting me crash their meetup!
