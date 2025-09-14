---
title: "skeleton_slot_alpha_get"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Sprites/Skeletal_Animation/Slots/skeleton_slot_alpha_get.htm"
converted: "2025-09-14T03:59:41.145Z"
---

# skeleton\_slot\_alpha\_get

With this function you can get an attachment slot alpha value. You supply the slot name (a string) and the function will return an real value for the alpha between 0 and 1.

#### Syntax:

skeleton\_slot\_alpha\_get(slot);

| Argument | Type | Description |
| --- | --- | --- |
| slot | String | The slot name to check, a string |

#### Returns:

[Real](../../../../../../../../../GameMaker_Language/GML_Overview/Data_Types.md)

#### Example:

slot\_list = ds\_list\_create();
skeleton\_find\_slot(mouse\_x, mouse\_y, slot\_list);
if (!ds\_list\_empty(slot\_list))
{
    for (var i = 0; i < ds\_list\_size(slot\_list); ++i)
    {
        if skeleton\_slot\_alpha\_get(slot\_list\[| i\]) != 1
        {
            skeleton\_slot\_colour\_set(slot\_list\[| i\], c\_white, 1);
        }
    }
}

The above code creates a DS list and then populates it with the slot names found at the position of the mouse in the room. It then loops through the slot list and resets the colour for the found slots to white with an alpha of 1 if the alpha is not already 1.