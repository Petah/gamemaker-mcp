---
title: "dbg_sprite_button"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Debugging/dbg_sprite_button.htm"
converted: "2025-09-14T03:59:48.619Z"
---

# dbg\_sprite\_button

This function creates a button control within the current debug section that uses (part of) a sprite. Clicking the button executes a [Function](../../GML_Overview/Script_Functions.md).

The current debug section is the one last created using [dbg\_section](dbg_section.md).

NOTE This control isn't split into two columns but is shown in a single column.

#### Syntax:

dbg\_sprite\_button(ref, ref\_sprite, ref\_sprite\_index\[, width, height, xoffset, yoffset, width\_sprite, height\_sprite\]);

| Argument | Type | Description |
| --- | --- | --- |
| ref | Reference or Script Function or Function | The function or a reference to the function to call when the button is clicked. |
| ref_sprite | Reference | A reference to a variable that holds the Sprite Asset to use for the button. |
| ref_sprite_index | Reference | A reference to a variable that holds the index of the sprite subimage to use. |
| width | Real | OPTIONAL The width of the button in pixels. Defaults to the sprite's width. |
| height | Real | OPTIONAL The height of the button in pixels. Defaults to the sprite's height. |
| xoffset | Real | OPTIONAL The x offset into the sprite. The default is 0. |
| yoffset | Real | OPTIONAL The y offset into the sprite. The default is 0. |
| width_sprite | Real | OPTIONAL The width of the sprite in pixels. Defaults to the sprite's width. |
| height_sprite | Real | OPTIONAL The height of the sprite in pixels. Defaults to the sprite's height. |

#### Returns:

N/A

#### Example 1: Basic Use

sprite = sprite\_index;
image = image\_index;

ref\_to\_sprite = ref\_create(self, "sprite");
ref\_to\_image = ref\_create(self, "image");

toggle = function()
{
    image = (image == 0) ? 1 : 0;
};

dbg\_sprite\_button(toggle, ref\_to\_sprite, ref\_to\_image);
show\_debug\_overlay(true);

The above code shows how to set up a button that toggles its sprite subimage when you click it.

First the current object instance's [sprite\_index](../Asset_Management/Sprites/Sprite_Instance_Variables/sprite_index.md) and [image\_index](../Asset_Management/Sprites/Sprite_Instance_Variables/image_index.md) are assigned to instance variables sprite and image. A reference to sprite is created, stored in ref\_to\_sprite, and a reference to image, stored in ref\_to\_subimage. A method toggle is then defined that changes the value of image. Finally, the button is added using dbg\_sprite\_button and the Debug Overlay is shown with a call to [show\_debug\_overlay](show_debug_overlay.md).

#### Example 2: Optional Parameters

sprite = sprite\_index;
image = image\_index;

msg = function()
{
    show\_debug\_message("Clicked the button!");
}

ref\_to\_sprite = ref\_create(self, "sprite");
ref\_to\_image = ref\_create(self, "image");
ref\_to\_msg = ref\_create(self, "msg");

dbg\_sprite\_button(ref\_to\_msg, ref\_to\_sprite, ref\_to\_image, 100, 100, sprite\_width/2, sprite\_height/2, sprite\_width/4, sprite\_height/4);
show\_debug\_overlay(true);

The above code shows how to use the optional parameters to use only part of the sprite for the button.

First the sprite\_index and image\_index are assigned to two instance variables and a simple method is created and assigned to another variable msg. A reference to each of the variables is then created using [ref\_create](../Variable_Functions/ref_create.md) and the button is added with a call to dbg\_sprite\_button. It gets a size of 100x100 pixels and draws the part of the sprite starting at its center (sprite\_width/2, sprite\_height/2) up to (sprite\_width/2+sprite\_width/4, sprite\_height/2+sprite\_height/4) stretched over the entire button. Finally, the Debug Overlay is brought up with a call to [show\_debug\_overlay](show_debug_overlay.md).