---
title: "draw_light_get"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Lighting/draw_light_get.htm"
converted: "2025-09-14T03:59:51.038Z"
---

# draw\_light\_get

This function will get the specified light parameters as an array with the following 6 elements:

-   \[0\] = enabled / disabled (true / false)
-   \[1\] = [Light Type Constant](draw_light_get.md) (see table below)
-   \[2\] = x value
-   \[3\] = y value
-   \[4\] = z value
-   \[5\] = light radius (only for point lights, will always be 1 for directional)
-   \[6\] = light colour (a real)

The light type (element \[1\]) can be one of the following two constants:

| Light Type Constant |
| --- |
| Constant | Description |
| lighttype_dir | The light is a directional light |
| lighttype_point | The light is a point light |

NOTE The x, y and z values store the light's _position_ in case of a point light and the light's normalised _direction vector_ in case of a directional light.

#### Syntax:

draw\_light\_get(ind)

| Argument | Type | Description |
| --- | --- | --- |
| ind | Real | The index number of the light (from 0 to 7) |

#### Returns:

[Array](../../../../../../../GameMaker_Language/GML_Overview/Arrays.md)

#### Example:

light\_a = draw\_light\_get(1);
if (light\_a\[5\] < 200)
{
    light\_a\[5\] += 5;
    draw\_light\_define\_point(1, 200, 123, 50, light\_a\[5\], c\_white);
}

The above code will get the values used to define the light at index 1, then check the radius and if it is less than 200 it will be increased and the light radius set to the new value.