---
title: "vertex_begin"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Primitives/vertex_begin.htm"
converted: "2025-09-14T03:59:53.050Z"
---

# vertex\_begin

This function starts the definition of a custom primitive.

You assign a vertex buffer to write the primitive to, and the vertex format to use (previously defined using the [vertex format functions](Primitives_And_Vertex_Formats.htm#func_ref_vertex_formats)). You would then define the necessary points for each vertex of the primitive before calling [vertex\_end](vertex_end.md) to finalise the primitive creation.

#### Syntax:

vertex\_begin(buffer, format);

| Argument | Type | Description |
| --- | --- | --- |
| buffer | Vertex Buffer | The vertex buffer to be written to. |
| format | Vertex Format | The vertex format to use. |

#### Returns:

N/A

#### Example:

vertex\_format\_begin();
vertex\_format\_add\_position();
vertex\_format\_add\_colour();
vertex\_format\_add\_texcoord();
v\_format = vertex\_format\_end();
v\_buff = vertex\_create\_buffer();
vertex\_begin(v\_buff, v\_format);

The above code defines a new vertex format, creates a new buffer and start the definition process of a new primitive.