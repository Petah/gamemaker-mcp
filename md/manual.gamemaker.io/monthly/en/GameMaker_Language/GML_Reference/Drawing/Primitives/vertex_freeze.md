---
title: "vertex_freeze"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Primitives/vertex_freeze.htm"
converted: "2025-09-14T03:59:53.377Z"
---

# vertex\_freeze

This function can be used to "freeze" a vertex buffer.

A frozen vertex buffer is stored in VRAM and becomes **read-only**, meaning that if you need to change it, you'd have to delete the whole buffer and re-create it. Because it resides in VRAM, a frozen vertex buffer can be submitted to the shader faster than a normal, dynamic buffer. It is recommended for those effects that require an unchanging custom primitive for the duration of a level or the game.

The function will return 0 on successfully freezing the specified vertex buffer, however if it failed for any reason, it will return -1.

#### Syntax:

vertex\_freeze(buffer);

| Argument | Type | Description |
| --- | --- | --- |
| buffer | Vertex Buffer | The vertex buffer to freeze. |

#### Returns:

[Real](../../../../../../../GameMaker_Language/GML_Overview/Data_Types.md) (0 for success, -1 for failure)

#### Example:

Create Event

vertex\_freeze(vbuff);

The above code will freeze the given vertex buffer in the Create event, so it can be used as a "static" buffer in other events for faster access.