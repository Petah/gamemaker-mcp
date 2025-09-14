---
title: "dbg_sprite"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Debugging/dbg_sprite.htm"
converted: "2025-09-14T03:59:48.598Z"
---

# dbg\_sprite

This function creates a sprite view of the referenced sprite with the specified image index within the current debug section.

A reference, created using [ref\_create](../Variable_Functions/ref_create.md), is passed for both the sprite and the image index.

You can pass arrays for the first and second arguments, and the function will create a sprite view for each sprite reference in the first array, using the corresponding image index from the second array. Both arguments must be arrays for this to work.

NOTE This debug control spans two columns.

#### Syntax:

dbg\_sprite(sprite\_ref\_or\_array, image\_index\_ref\_or\_array, \[label, width, height\]);

| Argument | Type | Description |
| --- | --- | --- |
| sprite_ref_or_array | Reference or Array | A reference to a variable holding a sprite reference, created using ref_create, or an array of references |
| image_index_ref_or_array | Reference or Array | A reference to a variable that holds the image index to show, created using ref_create, or an array of references |
| label | String | OPTIONAL The label to display next to the sprite view |
| width | Real | OPTIONAL The width to draw the sprite at. If no height value is provided in the next argument, the sprite's aspect ratio is maintained and height is adjusted accordingly.Defaults to the sprite's width. |
| height | Real | OPTIONAL The height to draw the sprite at. If no width value is provided in the previous argument, the width is kept at its original value.Defaults to the sprite's height. |

#### Returns:

N/A

#### Example: Sprite View for an Instance's Sprite

Create Event

ref\_to\_sprite = ref\_create(self, "sprite\_index");
ref\_to\_image\_index = ref\_create(self, "image\_index");
dbg\_sprite(ref\_to\_sprite, ref\_to\_image\_index);

The above code sets up a basic sprite view for an instance's sprite. The code is added to an event that is only executed once, e.g. the Create event.

First, two references are created using [ref\_create](../Variable_Functions/ref_create.md): one to the current instance's [sprite\_index](../Asset_Management/Sprites/Sprite_Instance_Variables/sprite_index.md) variable (stored in ref\_to\_sprite), the other to the instance's [image\_index](../Asset_Management/Sprites/Sprite_Instance_Variables/image_index.md) variable (stored in ref\_to\_image\_index). Next, the sprite view is created using dbg\_sprite, with arguments the two references created before.

The sprite's frame will change based on the value of [image\_index](../Asset_Management/Sprites/Sprite_Instance_Variables/image_index.md), and so is drawn animated in the sprite view. The sprite will also change whenever the instance's [sprite\_index](../Asset_Management/Sprites/Sprite_Instance_Variables/sprite_index.md) changes.