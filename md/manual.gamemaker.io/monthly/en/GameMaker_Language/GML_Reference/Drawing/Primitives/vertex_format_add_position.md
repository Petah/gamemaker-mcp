---
title: "vertex_format_add_position"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Primitives/vertex_format_add_position.htm"
converted: "2025-09-14T03:59:53.279Z"
---

# vertex\_format\_add\_position

This function adds data for a 2D position (x and y) to the new vertex format being created.

#### Syntax:

vertex\_format\_add\_position();

#### Returns:

N/A

#### Example:

vertex\_format\_begin();
vertex\_format\_add\_colour();
vertex\_format\_add\_position();
my\_format = vertex\_format\_end();

The above code creates a new vertex format with just colour and position values and then stores the format in the variable my\_format.