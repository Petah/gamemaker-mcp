---
title: "Making A Game Using GameMaker"
source: "manual.gamemaker.io/monthly/en/Quick_Start_Guide/Quick_Start_Guide.htm"
converted: "2025-09-14T04:00:13.142Z"
---

# Quick Start Guide

Welcome to the **Quick Start Guide**! This section of the manual is designed to familiarise you with the most important aspects of GameMaker and will show you the basics to get you making games as quick as possible. The guide covers essential IDE functionality and also provides a brief introduction to programming, so you can make the most of the product as quick as possible, whether you use GML Code or GML Visual.

To illustrate the GameMaker workflow and get you straight into making something, we've prepared the this guide to take you from the very basics of what is GameMaker and what is a program, through creating general assets and up to how to code basic things like movement and score.

Making games with GameMaker is, conceptually, a fairly simple and straightforward affair, following these general steps:

-   Create **image** assets ([sprites](../The_Asset_Editors/Sprites.md), [tilesets](../The_Asset_Editors/Tile_Sets.md), [fonts](../The_Asset_Editors/Fonts.md)) and add them to the Asset Browser.
-   Create **object** assets to represent the things you want to use in your game and assign them the required image assets.
-   Program these objects to do things in response to **events**.
-   Add **instances** of these objects into a **room** where they will perform their instructions.

We'll go into the specifics of each of the above listed items in the following pages, but that's the general flow of actions required to make a game. The important thing to note here is that your main "building blocks" for the game will always be sprites, objects and rooms, although there are a number of subsidiary assets that can also be used to add extra functionality or behaviours to these items (like [sounds](../The_Asset_Editors/Sounds.md), [sequences](../The_Asset_Editors/Sequences.md), etc.).

## Game Loop

Now, before we go on to explain each of these things in more detail, we'll quickly outline how GameMaker will turn the above building blocks into your game. Basically, everything happens in what is called the **Game Loop**, which has a speed measured in **Frames Per Second**, and one "frame" is called a **Step** in GameMaker. The [default frames per second](../Settings/Game_Options.md) (or **FPS**) is 60, meaning that for every second that passes GameMaker will run the game loop 60 times, and each step (loop/frame) a number of events will occur and the game will progress.

To help understand this, let's imagine you have a character that you want to move around the game room. You would create a _sprite_ for that character, then create an _object_ and assign it the sprite, and in the object you'd add an _event_ called the **Step Event**. In this event you would tell it to move right by 2 pixels. You would then place an **instance** of that object into the game room, and when you run the game, the instance will start moving right by 2 pixels every step (the Step Event runs once every game step), so that in 1 second the instance has moved 120 pixels to the right.

In the above example, we talk about telling the object to move to the right, but how do we do that? Well, that's done using a **program** which we write using either [GML Visual](../Drag_And_Drop/Drag_And_Drop_Index.md) or [GML Code](../GameMaker_Language/GameMaker_Language_Index.md). Which one you use is up to you and the way you want to work, but by using them you are _programming_ your game. The next section deals with this in more detail.