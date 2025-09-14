---
title: "skeleton_attachment_get"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Sprites/Skeletal_Animation/Attachments/skeleton_attachment_get.htm"
converted: "2025-09-14T03:59:40.654Z"
---

# skeleton\_attachment\_get

A skeletal animation sprite may have other sprites added as attachments, with these sprites being added to a named slot (the name is given when you create the attachment slot in your animation program) and they will be drawn along with the animation of the current sprite. With this function you can get the name (as a string) of the attachment for the given slot of the currently assigned sprite. Note that attached sprites are referenced through their _name string_ as assigned in Spine, or when you called [skeleton\_attachment\_create()](skeleton_attachment_create.md).

#### Syntax:

skeleton\_attachment\_get(slot);

| Argument | Type | Description |
| --- | --- | --- |
| slot | String | The slot name (a string) to get the attachment of. |

#### Returns:

[String](../../../../../../../../../GameMaker_Language/GML_Overview/Data_Types.md)

#### Example:

if (skeleton\_attachment\_get("slot\_leftHand") == "")
{
    skeleton\_attachment\_set("slot\_leftHand", choose("sword", "spear", "knife"));
}

The above code would check the currently assigned attachment name for the slot named "slot\_leftHand" and if an empty string is returned, a new sprite is attached.