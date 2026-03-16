---
layout: post
title: Let's Burn TurboGrafx-CD/PC Engine CD-ROM² Games on a Mac
---

After recently acquiring a new [Analogue Duo](https://www.analogue.co/duo), I set about attempting to burn CD-ROM discs to play the TurboGrafx-CD and PC Engine CD-ROM² games on the new console.

<img src="/images/posts/23-12-20-analogue-duo.jpg" alt="An Analogue Duo console with a CD partially sticking out of the CD slot and a HuCard of Bomberman '94 placed in front of the HuCard slot." />

Here are the steps I took to burn these games to disc for use in a Analogue Duo console using macOS Ventura(13.6.2).

### Locate the Games

The best place to find these games is on archive.org. There are many collections of TurboGrafx-CD and PC Engine CD-ROM² games to download. One such collection is [TurboGrafx-CD Champion Collection](https://archive.org/details/turbografx-cd-champion-collection-updated). So grab the games you want and on to the next step.

### Download Burn

We will be using [Burn](https://burn-osx.sourceforge.io/Pages/English/home.html) as the CD burning program for this task. So download this program and proceed to the next step.

### Prepare Your Files

To make this work properly, you want to have a single `.bin` and `.cue` file.

<img src="/images/posts/23-12-20-game-folder.png" alt="A computer window showing a single .bin and .cue file for Super Air Zonk." />

For some games you will find multiple `.bin` files. For these, you will need to merge them into one `.bin` file using [binmerge](https://github.com/putnam/binmerge).

<img src="/images/posts/23-12-20-multiple-bin.png" alt="A computer window showing multiple .bin files and a single .cue file for Super Raiden." />

To do this, you will..

1. Download the `binmerge` file from [Github](https://github.com/putnam/binmerge).
2. Put this file in the same folder with all your `.bin` files and your `.cue` file.
3. Navigate to this folder in your Terminal.
4. Run this command..<br> `for f in *.cue; do ./binmerge "$f" "$f.new"; done`

You should now have a new `.bin` and `.cue` file that will be used when burning the game.

<img src="/images/posts/23-12-20-multiple-bin-result.png" alt="Mac folder showing multiple files including the newly created .bin and .cue files highlighted for Super Raiden." />

### Time to Burn

We will now load the `.cue` file in the Burn app by launching the app, going to the 'Copy' tab, clicking on 'Open' and selecting the `.cue` file of the game you want to burn. You can also just drag the `.cue` file into the Burn window after you select 'Copy'.

<img src="/images/posts/23-12-20-burn-screenshot.png" alt="The Burn app window with the .cue file for Super Air Zonk loaded and ready to burn." />

We will be burning this file to a CD-R. So once your files are loaded up in Burn, insert the blank CD into your burner. When you are ready, click 'Burn'. Now you can select your CD burner and speed. I have run all my copies at full speed and have not had any issues. Your milage may vary.

### Let's Play Some Games

Once your burn is completed, eject the disc and load it up in your Analogue Duo. It should be recognized and display on the menu.

I assume these games will work in an old Turbo Duo or PC Engine Duo, but I cannot confirm this.

Enjoy!
