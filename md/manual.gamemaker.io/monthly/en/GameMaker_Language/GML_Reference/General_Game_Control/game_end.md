---
title: "game_end"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/General_Game_Control/game_end.htm"
converted: "2025-09-14T04:00:00.217Z"
---

# game\_end

This function ends the game and triggers the [Game End Event](../../../The_Asset_Editors/Object_Properties/Other_Events.md).

This will not happen instantaneously, but rather at the end of the current step, so any code you have in the same step after this function has been called will still run.

### Usage Notes

-   On Android devices, calling [game\_end](game_end.md) will push the app into the background, but it will _not_ close the app. This must be done by the user.
-   On iOS it will do nothing and silently fail.
-   On all consoles, it may crash the game or at best fail silently, and it may also be a submission fail, so this function _must not be used_.
-   On HTML5 it will end the game, but leave the user staring at a blank draw canvas on the web page, and as such it isn't recommended that it be used on that target platform.
-   On Windows, Linux and macOS the function simply ends the game and closes the game window (the [Game End Event](../../../The_Asset_Editors/Object_Properties/Other_Events.md) will also be triggered).



#### Syntax:

game\_end(\[return\_code\]);

| Argument | Type | Description |
| --- | --- | --- |
| return_code | Real | OPTIONAL The return code of the application, defaults to 0. |

#### Returns:

N/A

#### Example:

if keyboard\_check\_pressed(vk\_escape) game\_end();

This would end the game if the player presses the "escape" key.