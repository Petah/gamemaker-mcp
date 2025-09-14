---
title: "os_lock_orientation"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/OS_And_Compiler/os_lock_orientation.htm"
converted: "2025-09-14T04:00:04.573Z"
---

# os\_lock\_orientation

With this function you can "lock" your device to the current orientation until such time as you "free" it to allow all [Game Options](../../../Settings/Game_Options.md) enabled orientations again for that target platform. Note that you likely want to confirm the orientation is as desired before locking.

#### Syntax:

os\_lock\_orientation(flag)

| Argument | Type | Description |
| --- | --- | --- |
| flag | Boolean | Set to true or false to enable or disable orientation locking. |

#### Returns:

N/A

#### Example:

if (os\_type == os\_android) || (os\_type == os\_ios)
{
    os\_lock\_orientation(true);
}

The above code checks the OS type and if it is either Android or an iOS then the orientation locking is flagged as true.