---
title: "application_surface"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Surfaces/application_surface.htm"
converted: "2025-09-14T03:59:53.977Z"
---

# application\_surface READ-ONLY

This global, built-in variable can be used to access the application surface, for use in any of the [surface functions](Surfaces.md). This surface is permanently available and is where the game is drawn by GameMaker.

The regular Draw events (_Draw Begin_, _Draw_ and _Draw End_) draw to this surface by default. Other Draw events (like _Pre/Post Draw_ and _Draw GUI_) do not draw on the application surface. See [Draw Events](../../../../The_Asset_Editors/Object_Properties/Draw_Events.md) for more information on how those events work.

#### Syntax:

application\_surface

#### Returns:

[Surface](surface_create.md)

#### Example:

var \_cam\_width = 320;
var \_cam\_height = 180;
var \_resolution\_scale = 4;

surface\_resize(application\_surface, \_cam\_width \* \_resolution\_scale, \_cam\_height \* \_resolution\_scale);

This defines the size of the in-game camera (320 x 180), and a resolution scale value (4x), which is how large the target resolution should be in relation to the in-game camera.

The camera size is multiplied with that resolution scale and applied as the size of the application surface, which defines the game's resolution.