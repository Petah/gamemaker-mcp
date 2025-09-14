---
title: "vertex_end"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Primitives/vertex_end.htm"
converted: "2025-09-14T03:59:53.150Z"
---

# vertex\_end

This function ends the building of a custom primitive that was started with [vertex\_begin](vertex_begin.md).

Once you call this command the primitive can be used in the [vertex\_submit](../../../../../../../GameMaker_Language/GML_Reference/Drawing/Primitives/vertex_submit.md) function for use in a shader or you can freeze the buffer (making the vertex buffer used read-only and much faster) using [vertex\_freeze](../../../../../../../GameMaker_Language/GML_Reference/Drawing/Primitives/vertex_freeze.md).

#### Syntax:

vertex\_end(buffer);

| Argument | Type | Description |
| --- | --- | --- |
| buffer | Vertex Buffer | The vertex buffer to end writing to. |

#### Returns:

N/A

#### Example:

vertex\_end(buff);

The above code ends the definition of a custom primitive.