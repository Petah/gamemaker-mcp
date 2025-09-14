---
title: "draw_button"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Basic_Forms/draw_button.htm"
converted: "2025-09-14T03:59:49.117Z"
---

# draw\_button

This function will draw a very simple, rectangular "button" using the currently selected draw colour and alpha where the _up_ argument defines how the beveled edge effect looks, as shown in the image below:

![Draw button exmple](../../../../assets/Images/Scripting_Reference/GML/Reference/Drawing/draw_button.png)

NOTE If you want to draw a shape using a shader, you should be aware that most shaders expect the following inputs: vertex, texture, colour. However, when using this function, only vertex and colour data are being passed in, and so the shader may not draw anything (or draw something but not correctly). If you need to draw shapes in this way then the shader should be customised with this in mind.

#### Syntax:

draw\_button(x1, y1, x2, y2, up);

| Argument | Type | Description |
| --- | --- | --- |
| x1 | Real | The x coordinate of the left of the button |
| y1 | Real | The y coordinate of the top of the button |
| x2 | Real | The x coordinate of the right of the button |
| y2 | Real | The y coordinate of the bottom of the button |
| up | Boolean | Whether the button is up (true) or down (false) |

#### Returns:

N/A

#### Example:

draw\_button(100, 100, 200, 150, !mouse\_check\_button(mb\_left));

This will draw a button which will appear pressed if the left mouse button is held down.