---
title: "room_set_view_enabled"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/room_set_view_enabled.htm"
converted: "2025-09-14T03:59:39.381Z"
---

# room\_set\_view\_enabled

This function enables (true) or disables (false) views in any of the rooms within your game _except the current one_.

#### Syntax:

room\_set\_view\_enabled(index, val);

| Argument | Type | Description |
| --- | --- | --- |
| index | Room Asset | The room to set. |
| val | Boolean | Whether to enable (true) or disable (false) views in the given room. |

#### Returns:

N/A

#### Example:

global.myroom = room\_add();
room\_set\_view\_enabled(global.myroom, true);

This will enable views in the room indexed in global.myroom.