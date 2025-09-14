---
title: "vertex_format_delete"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Primitives/vertex_format_delete.htm"
converted: "2025-09-14T03:59:53.329Z"
---

# vertex\_format\_delete

This function must be called whenever you are finished using any created vertex formats.

You provide the vertex format (as returned by the function [vertex\_format\_end](vertex_format_end.md)), and this function will free the memory associated with it. Note that if you try to use this format again after calling this function, you will get an error.

#### Syntax:

vertex\_format\_delete(format\_id);

| Argument | Type | Description |
| --- | --- | --- |
| format_id | Vertex Format | The vertex format to delete |

#### Returns:

N/A

#### Example:

vertex\_format\_delete(my\_format);

The above code will remove the vertex format stored in the variable my\_format from memory.