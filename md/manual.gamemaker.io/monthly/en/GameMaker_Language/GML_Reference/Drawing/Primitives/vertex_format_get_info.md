---
title: "vertex_format_get_info"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Primitives/vertex_format_get_info.htm"
converted: "2025-09-14T03:59:53.364Z"
---

# vertex\_format\_get\_info

This function returns a [struct](../../../GML_Overview/Structs.htm#struct) with information on a previously created [vertex format](Primitives_And_Vertex_Formats.htm#func_ref_vertex_formats).

| Variable | Type | Description |
| --- | --- | --- |
| stride | Real | The total size in bytes of a single vertex |
| num_elements | Real | The number of elements (vertex attributes) in a single vertex |
| elements | Array | An array of elements. Each array element is a struct containing the following: - usage (Vertex Usage Type Constant)- type (Vertex Data Type Constant)- size (Real)- offset (Real) |

#### Syntax:

vertex\_format\_get\_info(format);

| Argument | Type | Description |
| --- | --- | --- |
| format | Vertex Format | The vertex format, as returned by vertex_format_end |

#### Returns:

[Vertex Format Info Struct](vertex_format_get_info.md)

#### Example:

vertex\_format\_begin();
vertex\_format\_add\_position\_3d();
vertex\_format\_add\_normal();
vertex\_format\_add\_colour();
vertex\_format\_add\_texcoord();
vertex\_format\_add\_custom(vertex\_type\_float1, vertex\_usage\_texcoord);
vertex\_format = vertex\_format\_end();

var \_info = vertex\_format\_get\_info(vertex\_format);
show\_debug\_message(json\_stringify(\_info, true));

The above code first creates a custom vertex format and then gets the info using vertex\_format\_get\_info. After that, the info is shown in a debug message.