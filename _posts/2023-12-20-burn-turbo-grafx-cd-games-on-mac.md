---
layout: post
title: Let's Burn TurboGrafx-CD/PC Engine CD-ROM² Games on a Mac
---

After recently acquiring a new Analogue Duo, I set about attempting to burn CD-ROM discs to play the TurboGrafx-CD and PC Engine CD-ROM² games. I have never owned one of these retro consoles, but have always wanted to play these games off of a disc. I thought this system would be a natural fit to accomplish this small goal.

So here are the steps I took to burn these games to disc for use in a Analogue Duo on a Mac running Ventura(13.6.2).

### Locate the Games

The best place to find these games is on archive.org. There are many collections of TurboGrafx-CD and PC Engine CD-ROM² games on here to download. One such collection is [TurboGrafx-CD Champion Collection](https://archive.org/details/turbografx-cd-champion-collection-updated). So grab the games you want and on to the next step.

### Download Burn

We will be using [Burn](https://burn-osx.sourceforge.io/Pages/English/home.html) as the CD burning program for this task.

### Prepare Your Files

To make this work properly, you want to have a `.bin` and a `.cue` file.

<div class="image-block">
  <img src="/images/posts/23-12-20-game-folder.png" alt="Photo of the Beautiful New iMac" />
</div>

For some games you will find multiple `.bin` files. For these, you will need to merge them into one `.bin` file using [binmerge](https://github.com/putnam/binmerge).

<div class="image-block">
  <img src="/images/posts/23-12-20-multiple-bin.png" alt="Photo of the Beautiful New iMac" />
</div>

To do this, you will..

1. Download the `binmerge` file from GitHub.
2. Put this file in the same folder with all your `.bin` files and your `.cue` file.
3. Navigate to this folder in your Terminal
4. Run this command `for f in *.cue; do ./binmerge "$f" "$f.new"; done`

You should now have a new `.bin` and `.cue` file that will be used when burning the game.

<div class="image-block">
  <img src="/images/posts/23-12-20-multiple-bin-result.png" alt="Photo of the Beautiful New iMac" />
</div>

