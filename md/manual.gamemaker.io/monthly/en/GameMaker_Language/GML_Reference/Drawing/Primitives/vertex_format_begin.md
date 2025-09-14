---
title: "vertex_format_begin"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Primitives/vertex_format_begin.htm"
converted: "2025-09-14T03:59:53.315Z"
---

# vertex\_format\_begin

This function starts the definition of a new vertex format.

Before you can define your new vertex format you must tell GameMaker that you're doing so using this function. You must call this first, then define the format values using the appropriate functions, and finally call [vertex\_format\_end](vertex_format_end.md) to finish the definition and return the new vertex format.

#### Syntax:

vertex\_format\_begin();

#### Returns:

N/A

#### Example:

vertex\_format\_begin();
vertex\_format\_add\_colour();
vertex\_format\_add\_position();
my\_format = vertex\_format\_end();

The above code creates a new vertex format with just colour and position values and then stores the format in the variable my\_format.