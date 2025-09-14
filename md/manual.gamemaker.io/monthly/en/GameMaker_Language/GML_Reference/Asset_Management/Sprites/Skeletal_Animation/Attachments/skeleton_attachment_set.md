---
title: "skeleton_attachment_set"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Sprites/Skeletal_Animation/Attachments/skeleton_attachment_set.htm"
converted: "2025-09-14T03:59:40.714Z"
---

# skeleton\_attachment\_set

A skeletal animation sprite may have other images added as attachments, with these images being added to a named slot (the name is given when you create the attachment slot in your animation program) and they will be drawn along with the animation of the current sprite. With this function you can set an attachment to a given slot, where you are required to give the names (as strings) of the slot and the attachment. These names are defined by the animation program used, or (in the case of the attachment) when you call [skeleton\_attachment\_create()](skeleton_attachment_create.md).

Note that you can also pass a sprite\_index in as the attachment, and that sprite will be used, or you can use -1 to remove the attachment from the slot. When you pass a sprite index in as an argument, it will create an attachment slot using the name of the sprite as the string to name the slot (so using spr\_sword, for example, will create an attachment slot "spr\_sword"), and the slot will use the first image index (0) of the the sprite, as well as its x and y origin offset, with a scale of (1,1) and a rotation of 0.

#### Syntax:

skeleton\_attachment\_set(slot, attachment);

| Argument | Type | Description |
| --- | --- | --- |
| slot | String | The slot name (a string) to get the attachment of. |
| attachment | String or Sprite Asset | The name (as a string or a sprite_index) of the attachment image. |

#### Returns:

[String](../../../../../../../../../GameMaker_Language/GML_Overview/Data_Types.md)

#### Example:

if (skeleton\_attachment\_get("slot\_leftHand") == "")
{
    skeleton\_attachment\_set("slot\_leftHand", choose("sword", "spear", "knife"));
}

The above code would check the currently assigned attachment name for the slot named "slot\_leftHand" and if an empty string is returned, a new sprite is attached.