---
title: "room_get_name"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/room_get_name.htm"
converted: "2025-09-14T03:59:39.143Z"
---

# room\_get\_name

This function returns the name of the given room as a string.

Please note that this is _only_ a string and cannot be used to reference the room directly - for that you would need the _room index_. You can, however, use this string to get the _room index_ using the returned string along with the function [asset\_get\_index()](../Assets_And_Tags/asset_get_index.md).

#### Syntax:

room\_get\_name(index);

| Argument | Type | Description |
| --- | --- | --- |
| index | Room Asset | The room to check the name of. |

#### Returns:

[String](../../../GML_Overview/Data_Types.md)

#### Example:

var \_roomname = room\_get\_name(room);

draw\_text(32, 32, \_roomname);

The above code gets the name of the current room and draws it on the screen.