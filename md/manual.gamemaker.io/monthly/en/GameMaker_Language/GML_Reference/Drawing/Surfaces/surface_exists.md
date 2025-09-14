---
title: "surface_exists"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Surfaces/surface_exists.htm"
converted: "2025-09-14T03:59:54.312Z"
---

# surface\_exists

This function checks if a surface exists.

This function is essential when working with surfaces due to their volatile nature. Surfaces are always held in texture memory which means that they can be destroyed from one moment to the next (for example, when a screensaver starts on windows, or when minimised on an Android device), so you should always check that a surface exists before doing anything with it (this includes drawing it to the screen). The example code below shows a typical use of this command in the draw event of an instance to check for a surface and re-create it if it has been removed (note that the surface will have been originally created in the create event of the object).

#### Syntax:

surface\_exists(surface);

| Argument | Type | Description |
| --- | --- | --- |
| surface | Surface | The surface to check. |

#### Returns:

[Boolean](../../../GML_Overview/Data_Types.md)

#### Example:

if !surface\_exists(surf)
{
    surf = surface\_create(1024, 1024);
}
else
{
    if (view\_current == 1)
    {
        draw\_surface(surf, 0, 0);
    }
}

The above code checks to see if a surface indexed in the variable surf exists, and if it does not, it will re-create it. If it does exist, it then checks to see which view is currently being drawn and if it is view\[1\] it draws the surface.