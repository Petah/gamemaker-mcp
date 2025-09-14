---
title: "vertex_delete_buffer"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Primitives/vertex_delete_buffer.htm"
converted: "2025-09-14T03:59:53.137Z"
---

# vertex\_delete\_buffer

This function removes a previously created vertex buffer from system memory, as well as all vertex data for any custom primitives that it contained.

#### Syntax:

vertex\_delete\_buffer(buffer);

| Argument | Type | Description |
| --- | --- | --- |
| buffer | Vertex Buffer | The vertex buffer to be removed. |

#### Returns:

N/A

#### Example:

vertex\_delete\_buffer(v\_buff);

The above code will delete from memory the vertex buffer stored in the variable v\_buff.