---
title: "rectangle_in_rectangle"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Movement_And_Collisions/Collisions/rectangle_in_rectangle.htm"
converted: "2025-09-14T04:00:03.166Z"
---

# rectangle\_in\_rectangle

This function will check two rectangular areas that you define to see if the source rectangle is either not in collision, completely within the destination rectangles bounds, or if they are simply touching. If they are not touching at all the function will return 0, if the source is completely within the destination it will return 1, and if they are simply overlapping then it will return 2. The image below illustrates this:

![Rectangle rectangle collision example](../../../../assets/Images/Scripting_Reference/GML/Reference/Movement_Collisions/rectangle_in_rectangle.png)

#### Syntax:

rectangle\_in\_rectangle(sx1, sy1, sx2, sy2, dx1, dy1, dx2, dy2);

| Argument | Type | Description |
| --- | --- | --- |
| sx1 | Real | The x coordinate of the left side of the source rectangle. |
| sy1 | Real | The y coordinate of the top side of the source rectangle. |
| sx2 | Real | The x coordinate of the right side of the source rectangle. |
| sy2 | Real | The y coordinate of the bottom side of the source rectangle. |
| dx1 | Real | The x coordinate of the left side of the destination rectangle to check against. |
| dy1 | Real | The y coordinate of the top side of the destination rectangle to check against. |
| dx2 | Real | The x coordinate of the right side of the destination rectangle to check against. |
| dy2 | Real | The y coordinate of the bottom side of the destination rectangle to check against. |

#### Returns:

[Real](../../../../../../../GameMaker_Language/GML_Overview/Data_Types.md)

#### Example:

switch(rectangle\_in\_rectangle(x - 50, y - 50, x + 50, y + 50, mouse\_x - 50, mouse\_y - 50, mouse\_x + 50, mouse\_y + 50))
{
    case 0: image\_blend = c\_yellow; break;
    case 1: image\_blend = c\_red; break;
    case 2: image\_blend = c\_orange; break;
}

The above code checks two rectangular areas for collision, and will set the instance image\_blend based on the return value.