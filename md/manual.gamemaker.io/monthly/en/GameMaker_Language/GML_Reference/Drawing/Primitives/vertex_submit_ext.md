---
title: "vertex_submit_ext"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Primitives/vertex_submit_ext.htm"
converted: "2025-09-14T03:59:53.502Z"
---

# vertex\_submit\_ext

This function submits a range of vertices in the given vertex buffer to the GPU for drawing.

The range is provided as an offset and number of vertices to submit. The offset can be any value greater than 0, the number of vertices the actual number to submit, or the value \-1 to indicate that all vertices starting at the offset should be submitted.

WARNING When using a surface as the texture (returned by [surface\_get\_texture](../Surfaces/surface_get_texture.md)), you should make sure that the surface itself exists ([surface\_exists](../Surfaces/surface_exists.md)).

### Usage Notes

-   This function can only be used in the [Draw Events](../../../../The_Asset_Editors/Object_Properties/Draw_Events.md).
-   The function supports both regular and [frozen](../../../../../../../GameMaker_Language/GML_Reference/Drawing/Primitives/vertex_freeze.md) vertex buffers.
-   The number of vertices must be in accordance with the primitive type you're drawing.
-   You can use [vertex\_submit](../../../../../../../GameMaker_Language/GML_Reference/Drawing/Primitives/vertex_submit.md) if you need to submit the entire vertex buffer.
-   Triangle fans (pr\_trianglefan) are converted to pr\_trianglelist internally on platforms that don't support them when you call this function.

#### Syntax:

vertex\_submit\_ext(buffer, primtype, texture, offset, number);

| Argument | Type | Description |
| --- | --- | --- |
| buffer | Vertex Buffer | The vertex buffer to use. |
| primtype | Primitive Type Constant | The primitive type to use. |
| texture | Texture | The texture to use (or -1 for no texture). |
| offset | Real | The offset in the vertex buffer, or, the index of the first vertex in the buffer to submit. Must be > 0. Use -1 to submit all vertices after the given offset. |
| number | Real | The number of vertices to submit. This value is clamped to the size of the vertex buffer. |

#### Returns:

N/A

#### Example 1: Basic Use

Draw Event

 vertex\_submit\_ext(vb, pr\_trianglelist, -1, 5, 6);

The above code shows a basic call to the function vertex\_submit\_ext. The number of vertices is 6, which is a multiple of 3, as required for the primitive type used pr\_trianglelist.

#### Example 2: Progressively Drawing a Line

Create Event

vb = vertex\_create\_buffer();
vertex\_begin(vb, fmt\_default);
repeat(100)
{
    vertex\_position\_3d(vb, random(room\_width), random(room\_height), 0);
    vertex\_color(vb, c\_white, 1);
    vertex\_texcoord(vb, 0, 0);
}
vertex\_end(vb);

Draw Event

var \_num = (current\_time / 1000 \* 12) mod (vertex\_get\_number(vb) + 1);
vertex\_submit\_ext(vb, pr\_linestrip, -1, 0, \_num);

The code example above fills a vertex buffer with 100 random points and then progressively draws more points using the value of the built-in variable [current\_time](../../Maths_And_Numbers/Date_And_Time/current_time.md).

In the Create event, a vertex buffer is created using [vertex\_create\_buffer](vertex_create_buffer.md). 100 vertices are then added to it in a [repeat](../../../GML_Overview/Language_Features/repeat.md) loop. Every vertex gets a random position in the room, a white colour and a texture coordinate that's unused but must be there, according to the [passthrough\_vertex\_format](../../../../Additional_Information/Guide_To_Primitives_And_Vertex_Building.htm#passthrough_vertex_format) used.

In the Draw event, the vertex buffer is submitted using vertex\_submit\_ext as a pr\_linestrip. The starting vertex is always the first one (indicated by the offset value 0), the number of vertices is calculated using [current\_time](../../Maths_And_Numbers/Date_And_Time/current_time.md) with a modulo operator used to create a simple animation that loops.

#### Example 3: Groups of Vertices

Create Event

vb = vertex\_create\_buffer();
arr\_groups = \[\];

var \_px, \_py, \_col;
vertex\_begin(vb, fmt\_default);
for(var i = 0;i < 8;i++)
{
    \_px = random(room\_width);
    \_py = random(room\_height);
    \_col = choose(c\_red, c\_blue, c\_green, c\_yellow);
    repeat(3)
    {
        vertex\_position\_3d(vb, \_px + random\_range(-20, 20), \_py + random\_range(-20, 20), 0);
        vertex\_color(vb, \_col, 1);
        vertex\_texcoord(vb, 0, 0);
    }
    array\_push(arr\_groups, {visible: true, range: {offset: i \* 3, num: 3}});
}
vertex\_end(vb);
vertex\_freeze(vb);

Draw Event

var i = 0, \_num = array\_length(arr\_groups);
repeat(\_num)
{
    var \_group = arr\_groups\[i++\];
    if (!\_group.visible) { continue; }
    vertex\_submit\_ext(vb, pr\_trianglelist, -1, \_group.range.offset, \_group.range.num);
}

The code example above shows how to treat a vertex buffer as groups of vertices, each given by a range and number of vertices. The visibility of every group of vertices can be set separately.

In the Create event, a vertex buffer is created and an empty array with it to store info about every range of vertices. A total of 8 triangles are added to the vertex buffer using the default [passthrough\_vertex\_format](../../../../Additional_Information/Guide_To_Primitives_And_Vertex_Building.htm#passthrough_vertex_format), each with a random position somewhere in the room, a random colour and a random width and height. A [struct](../../../GML_Overview/Structs.md) is also pushed onto the array using [array\_push](../../Variable_Functions/array_push.md) that stores the visibility and range of the vertices of each triangle. Finally the vertex buffer is frozen with [vertex\_freeze](../../../../../../../GameMaker_Language/GML_Reference/Drawing/Primitives/vertex_freeze.md) so it can be submitted to the GPU faster.

In the Draw event, all groups of vertices are submitted separately with a call to vertex\_submit\_ext inside a [repeat](../../../GML_Overview/Language_Features/repeat.md) loop. If any group is not visible, it is skipped and the next one is checked.