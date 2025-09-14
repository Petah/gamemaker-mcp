---
title: "vertex_format_add_colour"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Primitives/vertex_format_add_colour.htm"
converted: "2025-09-14T03:59:53.225Z"
---

# vertex\_format\_add\_colour

This function adds an RGBA colour attribute to the new vertex format being created.

IMPORTANT The attribute is stored as four bytes in the vertex buffer and turned into a vec4 (floats).

#### Syntax:

vertex\_format\_add\_colour();

#### Returns:

N/A

#### Example:

vertex\_format\_begin();
vertex\_format\_add\_colour();
vertex\_format\_add\_position();
my\_format = vertex\_format\_end();

The above code creates a new vertex format with just colour and position values and then stores the format in the variable my\_format.