---
title: "Sequences"
source: "manual.gamemaker.io/monthly/en/Quick_Start_Guide/Sequences.htm"
converted: "2025-09-14T04:00:13.179Z"
---

# Sequences

The final asset we'll discuss in this guide before moving on to discuss how it all comes together in the **Room Editor**, is the **Sequences** asset. A sequence is essentially a collection of other assets that are collected in one place and then animated together. The final animation (sequence) can then be added to rooms in your game much like instances.

Sequences are created through [The Sequence Editor](../The_Asset_Editors/Sequences.md) which is opened whenever you create a new sequence asset in [The Asset Browser](../Introduction/The_Asset_Browser.md):

![The Sequences Editor](../assets/Images/QS_Guide/QS_Sequences_Editor.png)To create a basic sequence you add either a sound, a sprite, an object or a font (for text) into the sequence _canvas_ and then position it to where you want it to be at the start of the sequence. This creates an **asset track** in the Track Panel and also adds a **keyframe** into the Dope Sheet to show the duration that the asset will be visible for.

Time for the sequence is in frames (which is the same as steps for instances, i.e.: one frame is the same as one game step), and you can see what will happen at any given frame by moving the sequence **playhead** in the dope sheet. The playhead position is also used for adding in **keyframes** which are the frames where you want some parameter to change. Parameter keys are stored on **parameter tracks** for the given asset.

So, you would position the asset and set its scale and colour and other properties at frame 0 of the sequence. You would then record the parameter keys for the asset and move the playhead to the frame where you want to set the next asset state (position, colour, etc.). On this frame you would again change the different parameters and record keys for them, then repeat this process as required for the length of the sequence. When you press play on the sequence, the asset will be animated, with the sequence linear interpolation between the different parameter states, giving an end result something like this:

![Sequence Example Image](../assets/Images/QS_Guide/QS_Sequence_Example.gif)We won't go into more details about how sequences work here, but suffice to say that they are an incredibly powerful tool for doing anything from cutscenes, to menus, to character states and much more.

The page linked below gives you all the details on how to use sequences in your games:

-   [The Sequence Editor](../The_Asset_Editors/Sequences.md)

Now we can move on to talk about the **Room Editor**, which is where all these parts of your game come together...