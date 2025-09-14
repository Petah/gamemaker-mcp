---
title: "draw_primitive_begin"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Primitives/draw_primitive_begin.htm"
converted: "2025-09-14T03:59:52.916Z"
---

# draw\_primitive\_begin

This function must be called before you can define any primitives. There are 6 types of primitives you can define as the following constants:

| Constant | Description |
| --- | --- |
| pr_pointlist | A point list - A point is drawn for every vertex. |
| pr_linelist | A line list - A line is drawn between the first and the second vertex, between the third and fourth vertex, etc. |
| pr_linestrip | A line strip - A line is drawn between the first and the second vertex, between the second and the third vertex, the third and the fourth vertex, etc. |
| pr_trianglelist | A triangle list - A triangle is drawn for the first, second and third vertex, then for the fourth, fifth and sixth vertex, etc. |
| pr_trianglestrip | A triangle strip - A triangle is drawn for the first, second and third vertex, then for the second, third and fourth vertex, etc. |
| pr_trianglefan | A triangle fan - Every two vertices connect to the first vertex to make a triangle.WARNING This primitive type is not natively supported on some platforms and there could be a performance hit if you use it. |

The following image illustrates basically how these should look and also the order in which you should define the vertices:

![The different primitive types](../../../../assets/Images/Scripting_Reference/GML/Reference/Drawing/primitive_types.png)

NOTE On some platforms (Windows, Xbox) the pr\_trianglefan type is not natively supported and so GameMaker does a conversion when the game is compiled to make them work. This means that on those platforms the pr\_trianglefan type will be much slower to use than the others.

**WARNING** This will not work on HTML5 when WebGL is disabled or not supported by the browser. WebGL can be allowed or set to be required in the [HTML5 Game Options](../../../../Settings/Game_Options/HTML5.md) under **Graphics**.

#### Syntax:

draw\_primitive\_begin(kind);

| Argument | Type | Description |
| --- | --- | --- |
| kind | Primitive Type Constant | The kind of primitive you are going to draw. |

#### Returns:

N/A

#### Example:

var \_steps = 20;
var \_xx = 50;
var \_yy = 50;
var \_radius = 30;
draw\_primitive\_begin(pr\_trianglefan);
draw\_vertex(\_xx, \_yy);
for(var i = 0; i <= \_steps; ++i;)
{
    draw\_vertex(\_xx + lengthdir\_x(\_radius, 270 \* i / \_steps), \_yy + lengthdir\_y(\_radius, 270 \* i / \_steps));
}
draw\_primitive\_end();

The above code will draw three quarters of a circle made from primitives.