---
title: "vertex_format_end"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Primitives/vertex_format_end.htm"
converted: "2025-09-14T03:59:53.340Z"
---

# vertex\_format\_end

This function returns the vertex format that was started with [vertex\_format\_begin](../../../../../../../GameMaker_Language/GML_Reference/Drawing/Primitives/vertex_format_begin.md).

#### Syntax:

vertex\_format\_end();

#### Returns:

[Vertex Format](vertex_format_end.md)

#### Example:

vertex\_format\_begin();
vertex\_format\_add\_position();
vertex\_format\_add\_colour();
my\_format = vertex\_format\_end();

The above code creates a new vertex format with just position and colour values and then stores the format in the variable my\_format.