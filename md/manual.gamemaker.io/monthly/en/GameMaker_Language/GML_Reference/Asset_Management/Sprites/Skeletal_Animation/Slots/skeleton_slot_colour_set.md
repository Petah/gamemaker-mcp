---
title: "skeleton_slot_colour_set"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Sprites/Skeletal_Animation/Slots/skeleton_slot_colour_set.htm"
converted: "2025-09-14T03:59:41.175Z"
---

# skeleton\_slot\_colour\_set

With this function you can set an attachment slot colour and alpha so all sprites attached to it will be drawn with these blend values. Keep in mind that the instance sprite can have a blend colour and alpha setting ([image\_blend](../../Sprite_Instance_Variables/image_blend.md) and [image\_alpha](../../Sprite_Instance_Variables/image_angle.md)), as can the attachment (see the function [skeleton\_attachment\_create\_colour()](../Attachments/skeleton_attachment_create_colour.md)), and so the final colour and alpha that the assigned attachment sprite for the slot will have will be a composite of all these values.

#### Syntax:

skeleton\_slot\_colour\_set(slot, colour, alpha);

| Argument | Type | Description |
| --- | --- | --- |
| slot | String | The slot name to set, a string |
| colour | Colour | The colour to set, either an integer, a constant, or a hex value. |
| alpha | Real | The alpha to set from 0 to 1. |

#### Returns:

N/A

#### Example:

slot\_list = ds\_list\_create();
skeleton\_find\_slot(mouse\_x, mouse\_y, slot\_list);
if (!ds\_list\_empty(slot\_list))
{
    for (var i = 0; i < ds\_list\_size(slot\_list); ++i)
    {
        if skeleton\_slot\_colour\_get(slot\_list\[| i\]) != c\_white
        {
            skeleton\_slot\_colour\_set(slot\_list\[| i\], c\_white, 1);
        }
    }
}

The above code creates a DS list and then populates it with the slot names found at the position of the mouse in the room. It then loops through the slot list and resets the colour for the found slots to white with an alpha of 1 if the colour is not already white.