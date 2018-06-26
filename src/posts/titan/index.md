---
title: Titan
date: 2014-12-08
summary: Lovecraftian minimalist browser pop-up window-based maze.
links:
 - url: https://titan.hoff.tech/begin
   text: Play it here
 - url: https://github.com/kenhoff/titan
   text: GitHub
 - url: http://ludumdare.com/compo/ludum-dare-31/?action=preview&uid=20246
   text: Ludum Dare game page
---

![Screenshot from "Titan"](titan-screen.png)

Titan is a vaguely Lovecraftian experimental game, built using [Phaser](http://phaser.io/) and [Firebase](https://www.firebase.com/) for the 31st Ludum Dare. The theme was Entire Game on One Screen. While I wasn't too happy with the theme (or most of Ludum Dare's themes, for that matter), I think that the game I built is particularly unique.

I'm not sure if this is an anti-theme game. When I thought of 'screen', I thought browser window. I had a couple previous game ideas that could be played on multiple windows on multiple devices (think of playing a game on a desktop, but having the interactive map to the game on your tablet). In Titan, it's literally impossible to complete the game without more than a dozen browser windows open.

The game is about being trapped in a maze. Because traditional mazes are generally easy to solve by following one wall, the worlds contain one-way teleporters to other worlds, causing loops and confusion. Players who solve the maze are rewarded with a quote from the story the game was inspired by, [In the Walls of Eryx](http://www.spacewesterns.com/articles/104/).

There's two major takeaways that I had from building this game; the aesthetic and the implementation.

I love the aesthetic; Lovecraftian horror is fascinating, so I was really stoked when I found that he had written a story about being trapped in an invisible maze (ignoring the sci-fi elements, of course). I really wanted to play on the idea of madness as the player gets lost deeper in the maze; that we're unsure if it's the world or the player's mind that's unraveling. If I were to extend this, I'd throw in a bunch of story text snippets, [Zalgo formatting](http://www.eeemo.net/), twisting colors, and layered tracks that mix differently as you go deeper in the maze.

However, the aesthetic doesn't work super well with the implementation. Because I was tied to the theme, I needed to have game instances in different windows, which pretty significantly limited what I could do with layout, art, and sound.

Clicking "Begin anew" selects a random Lovecraftian username, and opens the first world. Each Phaser world instance is connected to Firebase, which keeps track of the last world that the user entered, and updates its own game state accordingly. Links and window behavior are all controlled by some hacked together jQuery and low-level Javascript.

Originally, there were 32 worlds, each one named after an ancient Greek Titan. However, I started noticing WebGL crashing issues if there were more than 17 worlds open, so I cut about half of the playable levels. Also, the Firebase instance I'm using has a max limit of 50 concurrent connections, so if more than 3 people open up all the worlds at once, who knows what will happen!

Multi-screen games with Firebase are *cool*. It's trivial to implement, and Firebase works **so damn well** it's scary. Think [Artemis](http://www.artemis.eochu.com/), but without the need for a local server, and everyone can just use their tablets.

Titan placed 2nd in the "Innovation" category (of 1364 compo entries) for Ludum Dare 31.

[Play it here.](https://titan.hoff.tech/begin)
