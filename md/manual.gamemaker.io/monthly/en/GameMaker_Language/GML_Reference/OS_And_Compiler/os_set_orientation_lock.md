---
title: "os_set_orientation_lock"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/OS_And_Compiler/os_set_orientation_lock.htm"
converted: "2025-09-14T04:00:04.699Z"
---

# os\_set\_orientation\_lock

This function changes the orientations that are allowed for the game. You can enable or disable landscape and portrait orientations separately.

Calling this function will disable the flipped versions of both orientations, which are found in the [Android](../../../Settings/Game_Options/Android.md) / [iOS](../../../Settings/Game_Options/iOS.md) Game Options.

#### Syntax:

os\_set\_orientation\_lock(landscape\_enable, portrait\_enable);

| Argument | Type | Description |
| --- | --- | --- |
| landscape_enable | Boolean | Set to true or false to enable or disable landscape orientations. |
| portrait_enable | Boolean | Set to true or false to enable or disable portrait orientations. |

#### Returns:

N/A

#### Example:

os\_set\_orientation\_lock(true, true);

This enables both landscape and portrait orientations.