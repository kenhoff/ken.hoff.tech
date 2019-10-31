---
title: Harder Better Faster Ipsum
thumbnailImage: daftpunk.jpg
date: 2016-07-06
selected: true
summary: Around the World
links:
  - url: https://harderbetterfasteripsum.hoff.tech/
    text: Harder Better Faster Ipsum
  - url: https://github.com/kenhoff/harderbetterfasteripsum
    text: GitHub
---

![Cooler than you](daft-punk.jpg)

Have you ever wanted a Lorem Ipsum generator filled with Daft Punk references, including songs, album titles, and most importantly, lyrics?

I have just the thing for you!

[Introducing the Daft Punk Lorem Ipsum generator.](https://harderbetterfasteripsum.hoff.tech/)

![Fuck yeah!](drums.gif)

## What's a Lorem Ipsum?

[Lorem Ipsum](http://www.lipsum.com/) is pretty bland way to add some placeholder text to your design.

You know what kicks it up a notch? Some [placeholder text from your favorite TV show](http://fillerama.io/)! **Bam!**

Or, some [placeholder text](http://khaledipsum.com/) from your favorite [jetskiing-at-night DJ](https://www.youtube.com/watch?v=qMHCW1RIqBk). Major keys to success. Lion!

There's also the placeholder image version of Lorem Ipsum, like [Fill Murray](http://www.fillmurray.com/) or [Placecage](https://www.placecage.com/).

## Implementation deets

I wanted to give users something that they could genuinely use for a project, but that also would give them some level of customization, while also giving them a chuckle at some of the futility of using [Daft Punk lyrics](https://www.google.com/search?q=daft+punk+around+the+world+lyrics) for filler text.

![What?](robot-1.gif "Not funny? Whatever")

Generating some themed Lorem Ipsum is pretty easy. Get yourself a list of words or sentences, pick one at random, tack it onto a sentence or paragraph, repeat ad infinitum. Put in some punctuation and capitalization, and call yourself a _professional web developer_.

However, unless you're dealing with [full quotes/sentences](http://slipsum.com/) or literally [just a bunch of keywords](https://hipsum.co/), things get a little more complicated. Random snippets of lyrics interspersed with song titles and album titles fit together _extraordinarily_ poorly for Lorem Ipsum.

End result for this project? Separate everything a little more. For each paragraph, **pick one**:

-   a collection of all album/song titles, **or**
-   a collection of lyrics from one specific song.

When separated out a little bit, everything reads a little bit better - album/song titles appear to be a collection of completely random text, and the song lyrics are just jumbled enough to be recognizable but unreadable.

Most Lorem Ipsum generators usually ask you exactly how many paragraphs of text you want. I figured there's gotta be a cleaner way to do that, so I made the page automatically generate more filler text as you scroll down. Can't find a paragraph that you like? Just keep scrolling!

How's that work? A lot of listening for the window's `onscroll` event, plus a little bit of math.

![Math!](latex.gif)

If that's true, then we're at the bottom of the page, and we need to generate some more text.

![Mathematical!](mathematical.gif)

There's a little bit of game design going on here too. If you've got four checkboxes, and three of them are unchecked, what do you think a user is going to do as soon as they see that? What happens when you check all the boxes? What happens when you don't _check any boxes at all?!?!_ A downright choose-your-own-adventure book in here.

![Beep boop robits](red-daft-punk.gif 'The "Around the World" option is my favorite :)')
