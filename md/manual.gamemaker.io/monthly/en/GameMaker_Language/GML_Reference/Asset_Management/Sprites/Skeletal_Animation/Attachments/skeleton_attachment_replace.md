---
title: "skeleton_attachment_replace"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Sprites/Skeletal_Animation/Attachments/skeleton_attachment_replace.htm"
converted: "2025-09-14T03:59:40.677Z"
---

# skeleton\_attachment\_replace

This function replaces an existing custom attachment on the current instance's skeletal animation sprite with another one.

The change to the attachment will be visible in all [Slots](../Slots/Slots.md) that have the attachment assigned.

#### Syntax:

skeleton\_attachment\_replace(name, sprite, ind, xorigin, yorigin, xscale, yscale, rot);

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

#### Returns:

[Real](../../../../../../../../../GameMaker_Language/GML_Overview/Data_Types.md) (1 if successful, -1 if not)

#### Example:

if (skeleton\_attachment\_exists("weapon\_attachment"))
{
    skeleton\_attachment\_replace("weapon\_attachment", spr\_baseball, 0, 0, 0, 1, 1, 0);
}

The above code first checks if an attachment named "weapon\_attachment" exists. If it exists, the attachment is replaced with a new one that uses a sprite "spr\_baseball" and has no change in origin (offset), scale or rotation.