---
title: "vertex_submit"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Primitives/vertex_submit.htm"
converted: "2025-09-14T03:59:53.474Z"
---

# vertex\_submit

This function submits the contents of a vertex buffer to the graphics pipeline for use with a shader.

You supply the vertex buffer, the base primitive type (see the constants below) and the texture to be used. The base primitive type is only used for assigning the order in which the vertices that you stored in the buffer are drawn and connected, but the actual data used for each of the vertices will be that which you defined when creating the vertex buffer.

WARNING When using a surface as the texture (returned by [surface\_get\_texture](../Surfaces/surface_get_texture.md)), you should make sure that the surface itself exists ([surface\_exists](../Surfaces/surface_exists.md)).

### Usage Notes

-   This function can only be used in the [Draw Events](../../../../../../../The_Asset_Editors/Object_Properties/Draw_Events.md).
-   The number of vertices in the vertex buffer must be in accordance with the primitive type you're using.
-   You can use [vertex\_submit\_ext](vertex_submit_ext.md) instead to submit only a range of vertices in the vertex buffer.
-   Triangle fans (pr\_trianglefan) are converted to pr\_trianglelist internally on platforms that don't support them when you call this function.

For a visual example of the different base primitives available, see the image below:

![The different primitive types](../../../../assets/Images/Scripting_Reference/GML/Reference/Drawing/primitive_types.png)

| Constant | Description |
| --- | --- |
| pr_pointlist | A point list - A point is drawn for every vertex. |
| pr_linelist | A line list - A line is drawn between the first and the second vertex, between the third and fourth vertex, etc. |
| pr_linestrip | A line strip - A line is drawn between the first and the second vertex, between the second and the third vertex, the third and the fourth vertex, etc. |
| pr_trianglelist | A triangle list - A triangle is drawn for the first, second and third vertex, then for the fourth, fifth and sixth vertex, etc. |
| pr_trianglestrip | A triangle strip - A triangle is drawn for the first, second and third vertex, then for the second, third and fourth vertex, etc. |
| pr_trianglefan | A triangle fan - Every two vertices connect to the first vertex to make a triangle.WARNING This primitive type is not natively supported on some platforms and there could be a performance hit if you use it. |

#### Syntax:

vertex\_submit(buffer, primitive, texture);

| Argument | Type | Description |
| --- | --- | --- |
| buffer | Vertex Buffer | The vertex buffer to use. |
| primitive | Primitive Type Constant | The primitive base type. |
| texture | Texture | The texture to use (or -1 for no texture). |

#### Returns:

N/A

#### Example:

shader\_set(shader\_prim);
vertex\_submit(buff, pr\_trianglelist, sprite\_get\_texture(sprite\_index, 0));
shader\_reset();

The above code submits the vertex buffer in the variable buff for drawing with the shader shader\_prim, using a triangle list as the base primitive and the texture of the sprite for the instance running the code.