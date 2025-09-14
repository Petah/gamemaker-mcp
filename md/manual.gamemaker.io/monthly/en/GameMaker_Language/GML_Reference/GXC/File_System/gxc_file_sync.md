---
title: "gxc_file_sync"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/GXC/File_System/gxc_file_sync.htm"
converted: "2025-09-14T03:59:58.111Z"
---

# gxc\_file\_sync

This [asynchronous](../../Asynchronous_Functions/Asynchronous_Functions.md) function synchronises the changes to the file system on the GX.games platform.

You should call this function whenever more than one game, e.g. a Live Wallpaper _and_ a Game Strip, writes to and reads from the file system and you want to get the changes made by the other game in the current one.

Because of the type of file system used by GameMaker when running on GX.games, the changes made by one game will not automatically be picked up by the other. To retrieve these changes and to _synchronise_ the state of the file system in both games you call this function.

The function takes a callback function that's called when the synchronisation has completed.

#### Syntax:

gxc\_file\_sync(\[callback\]);

| Argument | Type | Description |
| --- | --- | --- |
| callback | Method or Script Function | OPTIONAL The callback method to execute when the sync is complete |

#### Returns:

N/A

#### Example:

Create Event

confirm = function()
{
    show\_debug\_message("Successfully synced file system changes!");
}

alarm\_time = 60;
alarm\[0\] = alarm\_time;

Alarm Event

gxc\_file\_sync(confirm);
alarm\[0\] = alarm\_time;

The above code first creates a method in an object's Create event that shows a debug message and sets [alarm](../../Asset_Management/Instances/Instance_Variables/alarm.md)\[0\] to 60 steps. In the Alarm event a file sync is performed with a call to gxc\_file\_sync and the alarm is set to countdown again.