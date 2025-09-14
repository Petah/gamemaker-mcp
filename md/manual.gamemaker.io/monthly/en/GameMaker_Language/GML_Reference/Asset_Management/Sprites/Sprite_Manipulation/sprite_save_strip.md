---
title: "sprite_save_strip"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Sprites/Sprite_Manipulation/sprite_save_strip.htm"
converted: "2025-09-14T03:59:42.232Z"
---

# sprite\_save\_strip

This function will create a [strip image](../../../../../The_Asset_Editors/Sprite_Properties/Sprite_Strips.md) from all the sub-images in a sprite, saving it to disc with the specified filename. The sprite must have been [added](sprite_add.md) at runtime (you cannot save sprites added through the IDE) and the file must be saved with a \*.png extension.

NOTE Depending on the target platform that is chosen you are limited as to where you can save and load files from. See [The File System](../../../../../Additional_Information/The_File_System.md) for more information.

#### Syntax:

sprite\_save\_strip(ind, filename);

| Argument | Type | Description |
| --- | --- | --- |
| ind | Sprite Asset | The index of the sprite to save. |
| filename | String | The filename for the saved sprite strip. |

#### Returns

N/A

#### Example:

var spr, i;
spr = sprite\_create\_from\_surface(0, 0, 32, 32, true, true, 16, 16);

for (i = 1; i < 8; i +=1)
{
    sprite\_add\_from\_surface(spr, i, 0, 32, 32, true, true, 16, 16);
}

sprite\_save\_strip(spr, "Custom\_Player\_Sprite.png");
sprite\_delete(spr);

The above code creates a sprite from the surface indexed in the variable "surf", assigning its index to the local variable "spr\_Custom", and then uses a for loop to move across the surface and capture various sections which are added into the sprite as sub-images. this new sprite is then saved as a png strip before being removed from memory.