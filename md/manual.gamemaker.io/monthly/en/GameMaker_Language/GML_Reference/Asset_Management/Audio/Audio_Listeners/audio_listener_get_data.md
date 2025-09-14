---
title: "audio_listener_get_data"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Audio/Audio_Listeners/audio_listener_get_data.htm"
converted: "2025-09-14T03:59:31.430Z"
---

# audio\_listener\_get\_data

This function will create a [DS map](../../../Data_Structures/DS_Maps/DS_Maps.md) and populate it with the position, velocity and orientation values for the given listener. The default listener index is 0, but you can use the function [audio\_get\_listener\_info()](audio_get_listener_info.md) to get the different indices available for the target platform. If you provide an incorrect listener index then the function will return -1.

**NOTE** You are responsible for the destruction of the returned DS map using the appropriate function.

The DS map will contain the following keys:

-   "**x**" - The x position of the listener
-   "**y**" - The y position of the listener
-   "**z**" - The z position of the listener
-   "**vx**" - The x axis velocity of the listener
-   "**vy**" - The y axis velocity of the listener
-   "**vz**" - The z axis velocity of the listener
-   "**lookat\_x**" - The x component of the look at vector of the listener
-   "**lookat\_y**" - The y component of the look at vector of the listener
-   "**lookat\_z**" - The z component of the look at vector of the listener
-   "**up\_x**" - The x component of the up vector of the listener
-   "**up\_y**" - The y component of the up vector of the listener
-   "**up\_z**" - The z component of the up vector of the listener

#### Syntax:

audio\_listener\_get\_data(index);

| Argument | Type | Description |
| --- | --- | --- |
| index | Real or Audio Listener ID | The listener to get the data for (default is 0). |

#### Returns:

[DS Map](../../../Data_Structures/DS_Maps/ds_map_create.md)

#### Example:

var num = audio\_get\_listener\_count();
for(var i = 0; i < num; ++i;)
{
    var info = audio\_get\_listener\_info(i);
    var data = audio\_listener\_get\_data(info\[? "index"\]);
    if data\[? "x"\] != 0
    {
        audio\_listener\_set\_position(info\[? "index"\], 0, 0, 0);
    }
    ds\_map\_destroy(info);
    ds\_map\_destroy(data);
}

The above code checks the number of listeners available then loops through them and if their x position is not 0, it sets their position to 0, 0, 0.