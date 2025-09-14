---
title: "application_surface_draw_enable"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Surfaces/application_surface_draw_enable.htm"
converted: "2025-09-14T03:59:53.992Z"
---

# application\_surface\_draw\_enable

This function enables or disables the automatic drawing of the application surface.

By default this is enabled, but in many cases you will want to take over when and how the surface is drawn (when using shaders for example), in which case you would use this function to set it to false so that you can draw it yourself when and how you require. It's important to note that when you switch off automatic drawing and draw the application surface yourself, that you may see certain issues with the alpha component of sprites and the surface itself. This is because GameMaker will draw the application surface _without alpha blending_ when the automatic drawing is on. If you switch off automatic drawing then you need to handle this yourself, using the following code (for example):

gpu\_set\_blendenable(false);
draw\_surface\_ext(application\_surface, 0, 0, 1, 1, 0, c\_white, 1);
gpu\_set\_blendenable(true);

#### Syntax:

application\_surface\_draw\_enable(flag);

| Argument | Type | Description |
| --- | --- | --- |
| flag | Boolean | The flag will be either true (enabled, the default value) or false (disabled). |

#### Returns:

N/A

#### Example:

application\_surface\_draw\_enable(false);

The above code will switch off the automatic drawing of the application surface.