---
title: "surface_free"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Surfaces/surface_free.htm"
converted: "2025-09-14T03:59:54.343Z"
---

# surface\_free

This function frees a surface from memory.

When you are working with surfaces, you should always use this function whenever you are finished using them. Surfaces take up space in memory and so need to be removed, normally at the end of a room, but it can be done at any time depending on the use you put them to. Failure to do so can cause memory leaks which will eventually slow down and crash your game.

NOTE When working with surfaces there is the possibility that they can cease to exist at any time due to them being stored in texture memory. You should **ALWAYS** check that a surface exists using [surface\_exists](surface_exists.md) before referencing them directly.

#### Syntax:

surface\_free(surface);

| Argument | Type | Description |
| --- | --- | --- |
| surface | Surface | The surface to be freed. |

#### Returns:

N/A

#### Example:

if (keyboard\_check\_pressed(vk\_escape))
{
    surface\_free(surf);
    room\_goto(rm\_Menu);
}

The above code checks for a key press and if it detects one it frees the memory reserved for the surface indexed in the variable surf and then changes room.