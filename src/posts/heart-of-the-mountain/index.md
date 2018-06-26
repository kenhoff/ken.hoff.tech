---
title: Heart of the Mountain
date: 2013-01-27
summary: I didn't say they were all winners.
links:
  - url: https://github.com/kenhoff/globalgamejam
    text: GitHub
  - url: play
    text: Play it here
---

![Screenshot from "Heart of the Mountain"](ggj_screen.jpeg)

During January 2013, myself, [TJ](http://www.yakuprising.net/teej) and [Dane](https://larsendt.com/) participated in the 2013 Global Game Jam. We spent 48 hours at the University of Denver, and tried to make the best game we could given the theme for the event, **heartbeat**.

We went with the "heart of the machine" idea, and described our game concept as [Terraria](http://www.terraria.org/) meets [League of Legends](http://leagueoflegends.com/). We planned to have dwarves spawn at the surface of the world, and automatically tunnel down into the landscape. As they got deeper, golems would emerge from the rock, to drive the miners away. The player, as a military dwarf, would have to go down and destroy the golems so that the dwarves could mine deeper, eventually mining "the heart of the mountain."

We ran into a couple hurdles while creating this game; notably, we tried to implement a version of [A\*](http://en.wikipedia.org/wiki/A*_search_algorithm), a powerful pathfinding algorithm that would allow our dwarves to find where they should go next (or should avoid), but we couldn't get it to work. Instead, we just went with a pre-defined path that the dwarves would use to try to get to the bottom of the mountain. By doing this, we went from about 600 lines of pathfinding code to about 15; if we had figured this out earlier, we would have had more time to implement more things in our design, like more on the upgrades system and additional health and damage calculators. Definitely a learning experience!

[Play it here.](play)
