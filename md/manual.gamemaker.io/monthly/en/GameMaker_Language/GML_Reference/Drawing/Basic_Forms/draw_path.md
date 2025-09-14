---
title: "draw_path"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Basic_Forms/draw_path.htm"
converted: "2025-09-14T03:59:49.288Z"
---

# draw\_path

With this function you can get GameMaker to draw a path to the screen. The path will be drawn as a simple line, and can be either relative to the calling instance or at the absolute position it was created at in the path editor or through code. This function is extremely useful when debugging dynamic paths (for example, those created for instances with the [mp\_grid\_path()](../../Movement_And_Collisions/Motion_Planning/mp_grid_path.md) function).

NOTE If you want to draw a shape using a shader, you should be aware that most shaders expect the following inputs: vertex, texture, colour. However, when using this function, only vertex and colour data are being passed in, and so the shader may not draw anything (or draw something but not correctly). If you need to draw shapes in this way then the shader should be customised with this in mind.

#### Syntax:

draw\_path(path, x, y, absolute);

| Argument | Type | Description |
| --- | --- | --- |
| path | Path Asset | The path to draw |
| x | Real | The x coordinate of where the path is drawn |
| y | Real | The y coordinate of where the path is drawn |
| absolute | Boolean | Whether the path is drawn at the absolute position (true) or the relative position (false) |

#### Returns:

N/A

#### Example:

if (mp\_grid\_path(grid, path, x, y, obj\_Player.x, obj\_Player.y, 1))
{
    draw\_path(path, x, y, false);
}

The above code will use the mp\_grid\_path function to generate a path and store it in the variable "path". If the path is successfully created, it is then drawn on the screen at a position relative to the instance running the code.