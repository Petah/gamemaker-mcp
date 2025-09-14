---
title: "Randomise"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Random/Randomise.htm"
converted: "2025-09-14T03:59:27.577Z"
---

# ![Randomise Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Random/i_Mathematics_Randomise.png) Randomise

This action sets the "seed" for the random number generator to a random value. When using the random number functions in GameMaker the initial seed is always the same, as this makes tracing errors and debugging far easier (compiled games do not have this behaviour). Should you wish to test with true random, you should call this action once at the start of the game.

#### Action Syntax:

![Randomise Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Random/a_Mathematics_Randomise.png)

#### Example:

![Randomise Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Random/e_Mathematics_Randomise.png)The above action block code sets the random seed to a new value then generates a number from 0 to 9 and assigns it to a global scope variable.