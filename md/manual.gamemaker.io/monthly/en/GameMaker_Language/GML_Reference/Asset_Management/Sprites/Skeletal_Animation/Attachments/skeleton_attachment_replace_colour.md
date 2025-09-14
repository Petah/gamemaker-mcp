---
title: "skeleton_attachment_replace_colour"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Sprites/Skeletal_Animation/Attachments/skeleton_attachment_replace_colour.htm"
converted: "2025-09-14T03:59:40.697Z"
---

# skeleton\_attachment\_replace\_colour

This function replaces an existing custom attachment on the current instance's skeletal animation sprite with another one. It also sets the blend colour to use when drawing this attachment.

The change to the attachment will be visible in all [Slots](../Slots/Slots.md) that have the attachment assigned.

#### Syntax:

skeleton\_attachment\_replace\_colour(name, sprite, ind, xorigin, yorigin, xscale, yscale, rot, colour, alpha);

| Argument | Type | Description |
| --- | --- | --- |
| name | String | The name of the attachment to replace |
| sprite | Sprite Asset | The index of the sprite asset to use for the attachment |
| ind | Real | The image_index of the sprite to use |
| xorigin | Real | The x origin to use for the image. The sprite's origin is ignored. |
| yorigin | Real | The y origin to use for the image. The sprite's origin is ignored. |
| xscale | Real | The horizontal scale factor of the image |
| yscale | Real | The vertical scale factor of the image |
| rot | Real | The rotation of the image. This is added to the bone's rotation. |
| colour | Colour | The blend colour to use when drawing the sprite |
| alpha | Real | The alpha value to use when drawing the sprite |

#### Returns:

[Real](../../../../../../../../../GameMaker_Language/GML_Overview/Data_Types.md) (1 if successful, -1 if not)

#### Example:

if (skeleton\_attachment\_exists("fruit\_attachment"))
{
    skeleton\_attachment\_replace\_colour("fruit\_attachment", spr\_apple, 0, 0, 0, 1, 1, 0, c\_lime, 1);
}

The above code first checks if an attachment with the name "fruit\_attachment" exists on the skeleton. If it does, it replaces the attachment image with a sprite "spr\_apple", with no change in offset, rotation or scale and a  colour of c\_lime and alpha value of 1.