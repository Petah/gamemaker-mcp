---
title: "skeleton_attachment_destroy"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Sprites/Skeletal_Animation/Attachments/skeleton_attachment_destroy.htm"
converted: "2025-09-14T03:59:40.627Z"
---

# skeleton\_attachment\_destroy

This function destroys a custom attachment created using one of the [skeleton\_attachment\_create](skeleton_attachment_create.md)/[skeleton\_attachment\_create\_colour](skeleton_attachment_create_colour.md) or [skeleton\_attachment\_replace](skeleton_attachment_replace.md)/[skeleton\_attachment\_replace\_colour](skeleton_attachment_replace_colour.md) functions.

After destroying an attachment the name becomes available again and you can create a new attachment  with that name using [skeleton\_attachment\_create](skeleton_attachment_create.md).

#### Syntax:

skeleton\_attachment\_destroy(name);

| Argument | Type | Description |
| --- | --- | --- |
| name | String | The name of the attachment to destroy |

#### Returns:

N/A

#### Example:

skeleton\_attachment\_destroy("leg\_left");

The above code destroys an existing custom attachment with the name "leg\_left".