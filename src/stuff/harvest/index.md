---
title: "Harvest"
date: 2018-01-28
---

Hey there! Back again, with another Global Game Jam. This time it's for 2018!

**Want to just skip right to it? [Play it here](https://harvest-ggj-2018.herokuapp.com/), check out [the source code](https://github.com/kenhoff/harvest-ggj-2018) and [the Global Game Jam page](https://globalgamejam.org/2018/games/harvest).**

![](harvest-1.png)

# How game jams work

Game jams are 48-hour weekend events where the goal is to build a game by the end of the event. Sometimes they're competitions (like [Ludum Dare](http://ldjam.com/)), but Global Game Jam is a just-for-fun kind of jam.

Usually what happens at these things is that everybody trickles in, sets up their workspaces, and gets together (around 6pm local time) in a big room to watch The Keynote.

The keynote is pretty much what you'd expect - some prominent members of the game community talking to us about their experiences building games, what you can expect as part of the game jam, and advice for how to actually build a game in 48 hours. There's a pretty big variation in what kinds of keynotes get shown - sometimes we get [awesome ones](https://www.youtube.com/watch?v=2xfxx27HbM4&vl=en), and sometimes we get **_seriously_** [weird/hilarious ones](https://youtu.be/3Roxls_2W2M?t=11m22s).

Then, they reveal the theme!

This year, the theme was **transmission**. It's a pretty good theme - previous GGJ themes included ["ritual"](/stuff/small-sacrifices), ["what do we do now"](/stuff/maniac-mystery-mansion), and ["we don't see things as they are, we seem them as we are"](/stuff/the-facility).

![](harvest-2.png) 

> ## An aside in which Ken rants about game jam themes
>
> Usually, when I look at a theme, I think about all the different ways that it can be interpreted - words with multiple meanings are the best examples. In this case, "transmission" could mean a couple different things - transmission of disease, the transmission in a car, some kind of radio transmission, etc.
>
> Another good litmus test for a theme is how the theme changes depending on which word you emphasize. (Try saying "I never said she stole my money" with emphasis on different words, and see how the phrase changes meaning.) The theme ["what do we do now"](/stuff/maniac-mystery-mansion) is fantastic - you can put emphasis on each one of the different words, and the phrase takes new meaning every time.
>
> There's been game jams in the past that have gotten me _really_ cranky. ["Minimalism"](/stuff/snape) is too vague, and doesn't constrain the creators at all - any game made in 48 hours is going to be minimalist. Alternatively, ["entire game on one screen"](/stuff/titan) is waaaaay too specific - there's basically no other ways to interpret that theme. Even if I did win 2nd for "innovation" on that jam. ¯\\\_(ツ)\_/¯

![](harvest-3.png)

# Game Jam Team: Assemble!

Every jam site is a little different with what happens after the theme reveal. At this particular site, we usually do a little "get-to-know-each-other" exercise, then the organizers turn us loose to go hunt down dinner. Afterwards, we do a little pitch session, where everyone who's got an idea can get up in front of everyone and recruit people to be on their team.

I _usually_ roll into these jams with a team figured out. I'm pretty used to competing in game jams solo (via [Ludum Dare](https://ldjam.com/)), so I prefer to have an idea of the people that I'll be working with - knowing about what they're interested in (and the things that they're capable of) generally just makes it easier and more fun for everyone involved - and we usually get a much more cohesive game out of it. I usually work with my sound buddy Joshua, and my usual artist ([James](http://jamiekingdom.com/)) couldn't attend this year so I invited Jojo along for her first game jam.

I knew going into the jam that I was interested in doing some type of choose-your-own-adventure narrative-based game, because it's pretty easy to roll with web technologies, as well as pretty easy to integrate art and sound assets. I usually handle all of the game design and development, and get "asset lists" (my dumb term for "hey here's a list of artwork / sound effects that I think we'll need") to the creatives on the team on Friday night. I'd worked with Jojo on design projects before, and I've worked with Joshua on many, many game jams, so we had all the design, dev, art and sound covered.

The thing that's kind of critical for a narrative-based game? Writers. Ken don't use words too good.

This was the first time that I've actively recruited for other team members, and I was just looking for writers. I got 3 of them!

# Ideation

I was already attending the jam with my artisté friend Jojo, so we got a chance to ideate a little bit before and during our dinner rush.

Sure, I'm into cars, but unfortunately I don't think any interesting game ideas came to mind involving a car transmission.

Instead, I went with the "radio transmission" idea. Usually I try to latch onto an aesthetic that I think the "creatives" (art, audio, and writing) on the team will like, just to get them all on the same page, and guide the creativity from there.

> I've found it's incredibly important to get all the creatives on the same page as early as possible in the process. Usually this just means "share as many creative assets among the team as you can, as early as you can", but sometimes when you've got a hyper-accelerated timescale like a game jam, you have to guide it a little more manually.
>
> The reason that this is so important is because it gives everyone else a "baseline" to build their creative assets off of - much the same way that "concept art" guides the aesthetic of AAA games. If the artist puts together a couple assets and shares it with the sound person, then the sound person has a _much_ better idea of what to create - same thing goes the other way, if the sound person puts together a couple of sound effects or music pieces, it's pretty easy for the artist to visualize the aesthetic.

In this case, I described it as "near-future americana". Think about rural American farmland with huuuuuge sky-scraping objects off in the far distance; the first 10 minutes of the _Star Trek_ reboot meets _Signs_ meets _Field of Dreams_ meets the earthbound parts of _Inception_. The midwest stuff that's vaguely familiar, and the neo-futurism that's vaguely unsettling.

![](harvest-4.png)

# What we ended up building

_Harvest_ is a narrative, text-based, choose-your-own-adventure game, set in near-future americana. The main fun of the game is getting to try to figure out what the story is - what's happened before the game, and what's going to happen after the game is over!

All of the interaction with the game comes from dialogue choices - that means that the gameplay isn't super deep, but that's alright! The point of these games is to show off the art, sounds, and writing of the team.

# Tech deets

Oh man. This was a bit of a...densely-engineered one.

The code for this game consists of roughly three parts - [one deceptively compact JavaScript "engine"](https://github.com/kenhoff/harvest-ggj-2018/blob/master/src/gameSequence.js), [one bog-standard view controller](https://github.com/kenhoff/harvest-ggj-2018/blob/master/src/GameComponent.jsx), and [one heckin' huge gameplay script file](https://github.com/kenhoff/harvest-ggj-2018/blob/master/src/gameSequence.js).

I'd built something sort-of like this before, last year, when we built [a deckbuilding DJing game](/stuff/kwav-1085). Essentially, we've got the plain JS "engine", which just manages the state of the game - what scene is currently displayed, the current array of dialog responses to render, if we're currently waiting for another character to speak, if we're waiting for the user to select a dialog option, what dialog options to display, if we're currently on a dialog option tree, etc etc etc...

The engine seems like it manages a lot of different complexity, but it mostly just loads in an reads data from the [`gameSequence.js`](https://github.com/kenhoff/harvest-ggj-2018/blob/master/src/gameSequence.js) file, which contains all dialog and choice data for the game. (Spoilers in that file!)

Then we've got the view layer, which is just a React app - most of it is contained in [`GameComponent.jsx`](https://github.com/kenhoff/harvest-ggj-2018/blob/master/src/GameComponent.jsx), but there's some logic for audio and entry/completion states in [`entry.jsx`](https://github.com/kenhoff/harvest-ggj-2018/blob/master/src/entry.jsx) as well. The important thing here is that we instantiate a new `Engine` object when mounting the game component on the page, and then override the `update` method on the instance of the `Engine` object, so that any time a player performs an action, the view controller needs to be updated.

Seems like kind of a roundabout way to do it, but hey it's a web app! Which means we can do all the standard web browser goodness on it - no installation steps, control audio, (relatively) consistent styling across browsers. Yay!

![](harvest-5.png)

# The crew

I cannot express how thankful I am to have had such an amazing team of creatives on this project. Seriously, I'm just the code monkey here, and there's absolutely no way this game would have turned out as well without all of the crazy talented people I got to work with.

Go check them out on Twitter, and hire them for your next project!

[Darrell (@HardyTales)](https://twitter.com/HardyTales)

[Elizabeth (@lizbernhardt)](https://twitter.com/lizbernhardt)

[Jojo (@Ippika\_)](https://twitter.com/Ippika_)

[Joshua (@JoshuaDuChene)](https://twitter.com/JoshuaDuChene)
