---
title: "Load Game"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Game/Load_Game.htm"
converted: "2025-09-14T03:59:25.665Z"
---

# ![Load Game Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Game/i_Game_Load_Game.png) Load Game DEPRECATED

This action will load a game that has previously been saved using the [Save Game](Save_Game.md) action.

You give the filename of the file to load (as a string, and including the extension) and the game will be loaded and continue running from the saved point. Note that this is not designed as a universal save/load system, and trying to load a game saved from a previous run of the project may give errors (especially if you have used things like [Data Structures](../Data_Structures/Data_Structure_Actions.md) or [Particles](../Particles/Particle_Actions.md)), and as such you should only try and load games that have been saved in the progress of a single game play-through (for things like checkpoints). Also note that the file will _not_ be loaded until the end of the current event or script, so any actions after the load action is called will still be performed.

DEPRECATED For a more comprehensive approach to loading and saving your game data, see the [File Actions](../Files/File_Actions.md) and [Buffer Actions](../Buffers/Buffer_Actions.md).

#### Action Syntax:

![Load Game Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Game/a_Game_Load_Game.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| Timeline | The timeline resource to assign to an instance |

#### Example:

![Load Game Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Game/e_Game_Load_Game.png)The above action block code will check a global variable and if it is less than or equal to 0 it will load a previously saved game.