---
title: "application_surface_enable"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Surfaces/application_surface_enable.htm"
converted: "2025-09-14T03:59:54.009Z"
---

# application\_surface\_enable

This function enables or disables the application surface.

By default, the application surface is enabled and all drawing for the [Draw Events](../../../../The_Asset_Editors/Object_Properties/Draw_Events.md) will be done to that and the surface drawn to the screen. However, on some older devices and specific chipsets this may result in poorer performance. In those cases you can switch off drawing to the application surface and all Draw event drawing will then be done directly to the display buffer.

You can use this function to enable or disable the application surface at any time in your game, but you should note that it requires at least one frame (step) for the changes to take effect. Switching it off _**will switch off all aspect ratio correction**_, as set in the [Game Options](../../../../Settings/Game_Options.md) for the target platform. This means that you should have some method in place that scales the game to the required device, window or screen dimensions. If you switch it back on again, then the _Game Options_ will take effect again the next step.

It is recommended that you use this function carefully as it will impact on how everything is drawn to the screen. In general you would want to have it as an option in a menu of your game, or call it only once at the start of your game and write your code around whether you have it enabled or disabled.

NOTE Disabling the application surface when you are making use of [Filters and Effects](../../../../The_Asset_Editors/Room_Properties/Filters_and_Effects.md) in your game may result in a crash.

NOTE Disabling this will disable [Clipping Masks](../../../../The_Asset_Editors/Sequence_Properties/Clipping_Masks.md) in Sequences as that feature makes use of the stencil buffer.

#### Syntax:

application\_surface\_enable(enable);

| Argument | Type | Description |
| --- | --- | --- |
| enable | Boolean | Set to enable (true) or disable (false) the application surface. |

#### Returns:

N/A

#### Example:

if (keyboard\_check\_pressed(vk\_space))
{
    if (application\_surface\_is\_enabled())
    {
        application\_surface\_enable(false);
    }
    else
    {
        application\_surface\_enable(true);
    }
}

The above code checks for a key press and then toggles the application surface on or off depending on its state (like in an options menu).