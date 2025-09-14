---
title: "Save Game"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Game/Save_Game.htm"
converted: "2025-09-14T03:59:25.697Z"
---

# ![Save Game Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Game/i_Game_Save_Game.png) Save Game DEPRECATED

This action will do a basic save of the game to a given file.

You give a filename (as a string and including the extension) and the action will perform a limited save out of the current game state. It's important to understand that the action is designed to take a "snapshot" of the current game state and is for use more as a checkpoint system than a universal save system, since it does _not_ save any of the dynamic resources (like [Data Structures](../Data_Structures/Data_Structure_Actions.md) or [Particles](../Particles/Particle_Actions.md)). As such the action should be used very carefully so as not to get errors or memory leaks.

DEPRECATED For a more comprehensive approach to loading and saving your game data, see the [File Actions](../Files/File_Actions.md) and [Buffer Actions](../Buffers/Buffer_Actions.md).

#### Action Syntax:

![Save Game Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Game/a_Game_Save_Game.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| Filename | The name - as a string and with the extension - to give the file being saved (if the file already exists, it will be overwritten) |

#### Example:

![Save Game Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Game/e_Game_Save_Game.png)The above action block code will check for a collision with another instance and if one is found it checks an instance variable. If the variable returns true then the game is saved and the variable set to false.