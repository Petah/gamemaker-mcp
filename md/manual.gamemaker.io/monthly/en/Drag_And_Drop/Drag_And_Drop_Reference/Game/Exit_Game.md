---
title: "Exit Game"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Game/Exit_Game.htm"
converted: "2025-09-14T03:59:25.639Z"
---

# ![Exit Game Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Game/i_Game_Exit_Game.png) Exit Game

With this action you can end the game, triggering the [Other - Game End Event](../../../The_Asset_Editors/Object_Properties/Other_Events.md). Note that this does not happen the moment the action is called, but rather at the end of the current event or script, so any actions that you have after this action has been called will still run until the end of the event/script is reached.

Please note that this action has the following restrictions:

-   It will report an error on the **iOS** target as it is against the conditions of their marketplace.
-   It will have no effect when called on **HTML5**.
-   It will work on **Windows** (including games built for Steam), **Android**, **Ubuntu (Linux)** and **Mac**.

#### Action Syntax:

![Exit Game Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Game/a_Game_Exit_Game.png)

#### Example:

![Exit Game Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Game/e_Game_Exit_Game.png)The above action block code will check a global variable and if it returns true the game will be exited.