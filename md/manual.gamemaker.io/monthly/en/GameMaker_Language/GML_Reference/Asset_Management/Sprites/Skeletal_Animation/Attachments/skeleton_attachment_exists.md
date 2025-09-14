---
title: "skeleton_attachment_exists"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Sprites/Skeletal_Animation/Attachments/skeleton_attachment_exists.htm"
converted: "2025-09-14T03:59:40.641Z"
---

# skeleton\_attachment\_exists

This function returns if a custom attachment with the given name exists on the skeletal animation sprite.

#### Syntax:

skeleton\_attachment\_exists(name);

| Argument | Type | Description |
| --- | --- | --- |
| name | String | The name of the attachment |

#### Returns:

[Boolean](../../../../../../../../../GameMaker_Language/GML_Overview/Data_Types.md)

#### Example:

if skeleton\_attachment\_exists("LegAttachment")
{
    skeleton\_attachment\_replace("LegAttachment", spr\_leg\_modified, 0, 0, 0, 1, 1, 0);
}
else
{
    skeleton\_attachment\_create("LegAttachment", spr\_leg, 0, 0, 0, 1, 1, 0);
}

The above code first checks if an attachment named "LegAttachment" exists on the current skeletal animation sprite using skeleton\_attachment\_exists. If it does the attachment with that name is _replaced_ using [skeleton\_attachment\_replace](skeleton_attachment_replace.md). If it doesn't [skeleton\_attachment\_create](skeleton_attachment_create.md) is called to _create_ a new attachment named "LegAttachment".