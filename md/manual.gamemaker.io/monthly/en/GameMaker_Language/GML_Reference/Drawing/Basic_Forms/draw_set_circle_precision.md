---
title: "draw_set_circle_precision"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Basic_Forms/draw_set_circle_precision.htm"
converted: "2025-09-14T03:59:49.449Z"
---

# draw\_set\_circle\_precision

To optimise performance when drawing circles, GameMaker basically draws a polygon shape with enough sides to make it _appear_ circular. However, depending on how big or small you need your circles to be, you may find that changing this value can help increase the performance of your game, or make the circles look better. The precision value that you can input into this function is the number of sides the circle polygon has, and this number can be anything between 4 and 64, _but must be a number divisible by 4_, with a default value of 24.

![Circle precision example](../../../../assets/Images/Scripting_Reference/GML/Reference/Drawing/draw_set_circle_precision.png)

NOTE If you want to draw a shape using a shader, you should be aware that most shaders expect the following inputs: vertex, texture, colour. However, when using this function, only vertex and colour data are being passed in, and so the shader may not draw anything (or draw something but not correctly). If you need to draw shapes in this way then the shader should be customised with this in mind.

#### Syntax:

draw\_set\_circle\_precision(precision);

| Argument | Type | Description |
| --- | --- | --- |
| precision | Real | The precision of all circles drawn after this function is called. |

#### Returns:

N/A

#### Example:

draw\_set\_circle\_precision(12);

The above code will draw all circles using a 12 sided polygon.