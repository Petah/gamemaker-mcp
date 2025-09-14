---
title: "draw_get_enable_skeleton_blendmodes"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Sprites/Skeletal_Animation/Drawing_And_Miscellaneous/draw_get_enable_skeleton_blendmodes.htm"
converted: "2025-09-14T03:59:40.874Z"
---

# draw\_get\_enable\_skeleton\_blendmodes

This function returns whether per-slot blend modes for skeletal sprites are enabled (true) or disabled (false).

#### Syntax:

draw\_get\_enable\_skeleton\_blendmodes()

#### Returns:

[Boolean](../../../../../../../../../GameMaker_Language/GML_Overview/Data_Types.md)

#### Example:

if (!draw\_get\_enable\_skeleton\_blendmodes())
{
    draw\_enable\_skeleton\_blendmodes(true);
}

The above code enables per-slot blend modes for skeletal sprites, if they are disabled.