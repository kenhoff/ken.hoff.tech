---
title: "Spark Front End Web Dev: Summer 2016 Postmortem"
date: 2016-08-22
---

Hey, it happened again! Somehow I was able to get 9 students to come down to [Spark Boulder](http://sparkboulder.com/) twice a week and listen to me ramble about Front End Web Development. **Mathematical!**

You know the drill - I usually put together a postmortem after each one of these classes, figure out what went well, and what could have gone better. You can also check out [the postmortem for the Spring 2016 session](/posts/2016/06/26/spark-class-spring-2016-postmortem) to get an idea of how things have changed.

# Things that went well

## Front End Web Dev: _Nights_

![Troy and Abed in the Morning: Nights](troy-and-abed-nights.gif)

For those of you who might know me, I've turned into a bit of a night owl. I pretty much routinely get to my office around 11am, and leave around 7pm. Going to bed around 1am is pretty standard - nights where I stay up playing video games til 4am are not uncommon.

So, I was pretty happy when we bumped the time for the class back a little bit! We're now from 7:30pm to 9pm, Mondays and Wednesdays. That usually means that I can just head to the gym right after class, it's dead quiet, and I have the power racks allllll to myself.

## HTML Slides

So glad I finally got this one done. Last time we used Google Slides - have a look at the [Spring 2016 postmortem](/posts/2016/06/26/spark-class-spring-2016-postmortem#google-slides) for more info on that.

I've messed around with a couple HTML slide frameworks in the past. [Reveal.js](http://lab.hakim.se/reveal-js) is probably the one that I've used most often. [Impress](http://impress.github.io/impress.js) is another promising one, but that seems like it requires a _lot_ of configuration.

All of these frameworks are pretty opinionated - they all have a pretty clear idea of how you should write your slides and how your slides should be styled. [deck.js](http://imakewebthings.com/deck.js/) is probably the oldest and most basic library out there, but it doesn't care how you want to style your slides - it just throws various HTML classes on elements, and expects you to handle whether they're visible or not.

My slides are now written entirely in Markdown. In the build pipeline, they're converted into HTML, split into `<slide>`'s based on `<hr>` tags, and then placed into a single [~~Jade~~ Pug](http://jade-lang.com/) layout that contains styling and [deck.js](http://imakewebthings.com/deck.js/) calls.

If you'd like to check out the build pipeline for @classbot and the slides, you can [check it out on GitHub](https://github.com/kenhoff/classbot)! It's probably more complicated than necessary, but it works perfectly for me.

## Students

We had a 50% increase in enrollment this semester! I know, 6 students to 9 students isn't much more, but the math technically works out.

There's some benefits to having a larger class. There's more questions and projects - more students are likely to ask questions about content that they're confused on, and when the time comes to show off projects, there's usually more projects that we can look at during class.

It's also great to have a wider variety of students in the class. We had a huge range this semester - high school students, tech professionals, freshmen, graduated seniors, CS majors, and people who had never opened a text editor before in their life. **Algebraic!**

## Google Tour

![Google Boulder office](google.jpg)

I'm super fortunate to know someone who recently started working for Google here in Boulder! (thanks [Dane](https://www.larsendt.com/)!)

The students love getting to see what life is like at Google. It's not a whole lot different from any other premier software company (free food, sweet offices, awesome pay) and it gives them an idea of where they might like to go with their career.

## Teaching the same thing again

It's really nice to teach the exact same class a second time. I was able to re-use a bunch of the same readings, slides, and assignments, usually with some tweaks to try to make class a little better for the students.

It's definitely a little more stable for me. When developing a brand-new talk or workshop (for 10 people or less), I _usually_ have to spend 4ish hours preparing for every 1 hour of the workshop. Sometimes, there'll be specific topics that I'm not as familiar with as I should be, and I'll have to spend more time preparing.

However, with a talk or workshop that I've given before, I just have to spend 2ish hours updating and practicing the talk for every 1 hour of the workshop. Because I've given the talk before, there's less unknowns, which means that I can be more accurate in the quote that I give for the workshop.

That usually means a 40% discount for you, and a less risky ROI for me. **Rhombus!**

## Never give up

[Extra Credits](https://www.youtube.com/channel/UCCODtTcd5M1JavPCOr_Uydg) (a game design series that I love) recently ticked over the 300th episode mark, and I felt compelled to show this to the class on the last session.

This video never fails to make me tear up a little bit.

<style>.embed-container { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; } .embed-container iframe, .embed-container object, .embed-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }</style><div class='embed-container'><iframe src="https://www.youtube-nocookie.com/embed/6F6xb3ucVck?rel=0&amp;controls=0&amp;showinfo=0" frameborder='0' allowfullscreen></iframe></div>

Web development can be difficult and crappy sometimes, and you might feel like you have no idea how to actually be a proficient web developer.

That feeling never really goes away. You will **always** feel like you don't know enough, and there are other people that are so, so much better at this than you are.

Never give up. Change takes time, but time is all it takes.

# Things that could have went better

## Summer finals

Turns out that CU offers classes during the summer too! No way!

It's not usually an issue, unless our class session conflicts with summer finals. There was a bit of a stretch during some important JavaScript/jQuery sessions, where attendance was...limited.

A large number of our students are also CU students, so we have to be super careful of scheduling around CU events. Summer semesters are a little tricky, because they're a little shorter, but we should be fine for the fall semester.

## Attendance

Every class session, I need to take attendance. It's pretty easy - I just open up the Google Drive spreadsheet and put in a bunch of `x`'s next to names.

When I generate report cards, I just plug in the attendance sheet to the report card generator, and get attendance info on each student's report card.

![Picard Facepalm](picard.gif)

There's only one problem - I sometimes forget to take attendance 🙄

It's a dumb, stupid problem, I know. And probably pretty easily solved with a quick Slack reminder every session, too! I just wish @classbot could handle it for me.

## The Syllabus

So I had [this great idea last semester](/posts/2016/06/26/spark-class-spring-2016-postmortem#using-trello-for-the-syllabus) to move the entire syllabus onto @classbot!

Yeah, that might have been a mistake. Don't get me wrong - having everything (readings, slides, assignments) in one place for the students is great.

The problem is that people don't want to have to use a literal CLI (e.g. running `sessions` on @classbot to get a list of all the class sessions & slides) in order to get an at-a-glance view of all the things that they need to know about the class.

In the future, I'd like to move away from @classbot. Slack gave me a super simple framework for grading (just send instant grading results via DM), but it doesn't do syllabus information well. I'd like to put all the syllabus information on a site, but then I'll have to build my own frontend framework for submitting and grading student assignments in real time.

## Random Quote API

I introduced a new project this semester, the Random Quote App. The students needed to create a page, that, when loaded, makes a call to the Random Quote API (an API that I had written) to retrieve a random quote and display it on the page. The user could also click a button to retrieve another random quote and have it displayed.

This demonstrates a pretty good example of a standard HTTP GET request, which they implemented with jQuery's `$.get()`. However, I also needed to teach them about standard HTTP POST requests - I said that users on their page also needed to be able to type a new quote into a text box and submit it to the list of quotes.

You can see where this is going - I didn't say anything about authentication/authorization, input sanitation/validation, rate limiting, or deleting old quotes. The API is horribly, horribly insecure and exploitable, but I didn't have any other way for students to program against a "real-world", live example without teaching them about _all_ the things that web developers do to secure their services.

I need to rethink this project a little bit, figure out if there's a way to make it more secure while still staying in the scope of the class.

## Why the students are here

![Whiskey pour](whiskey.gif)

One class session, I was getting feedback from the students about @classbot, and they gave me somewhat of an existential realization.

I've always been a little bit confused about why I even _have_ to teach web development. Literally all of the content that I teach exists out there already - documentation, blog posts, live examples, even just looking at the source on any page that you visit. So why do they even need me?

Turns out that the primary reason that the students showed up was because of **me**. Not specifically Ken Hoff (because he's not special or anything), just an experienced instructor that shows up twice a week to try to explain what's going on and answer their questions.

I'm not explaining anything fundamentally new in the world of web development. Instead, I'm just a shortcut for the students - a living, easily query-able database of introductory web development knowledge. They could still learn all of this stuff on their own, just by Googling and struggling through it, but it's just _easier_ to get it from me.

I'm not developing or implementing anything - instead, I'm just being that living, easily query-able database of information for students, twice a week. I'm still trying to process that.

# Closing thoughts

Woohoo! Another semester done! Felt pretty good. A couple hiccups here and there, but no big deal.

If you're interested in taking Front End Web Development, go apply at [Spark Boulder](http://sparkboulder.com/sparkclasses/). We might be teaching Back End Web Development too! I'd love to see you in class, and teach you literally everything I know.

Excelsior! 🚀
