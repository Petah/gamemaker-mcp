---
title: "surface_get_depth_disable"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Surfaces/surface_get_depth_disable.htm"
converted: "2025-09-14T03:59:54.357Z"
---

# surface\_get\_depth\_disable

This function checks to see if the automatic depth buffer generation for surfaces is enabled.

Normally all surfaces have depth buffers so if you draw 3D objects to them then it'll sort them properly by depth. However, allocating depth buffers essentially doubles the size of surfaces, which could be an excessive and unnecessary overhead, especially if your game is very memory intensive or predominantly 2D. In these cases you can check this using this function and disable the depth buffer for surfaces if required using the function [surface\_depth\_disable](surface_depth_disable.md).

#### Syntax:

surface\_get\_depth\_disable();

#### Returns:

[Boolean](../../../GML_Overview/Data_Types.md)

#### Example:

if (!surface\_exists(surf))
{
    if (surface\_get\_depth\_disable() == false)
    {
        surface\_depth\_disable(true);
    }
    surf = surface\_create(room\_width, room\_height);
}

The above code will check to see if the given surface exists, and if it does not, then it checks the current state of the surface depth buffer and if it is enabled, it will disable it instead, before finally creating the surface.