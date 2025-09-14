---
title: "skeleton_animation_get_ext"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Sprites/Skeletal_Animation/Animation/skeleton_animation_get_ext.htm"
converted: "2025-09-14T03:59:40.383Z"
---

# skeleton\_animation\_get\_ext

A single skeletal animation sprite can have various animation sets, and these sets can be assigned different tracks so that you can "mix and match" animation sets. This function will return the name of the animation set currently used by the given track number (as set by the function [skeleton\_animation\_set\_ext](skeleton_animation_set_ext.md)).

#### Syntax:

skeleton\_animation\_get\_ext(track);

| Argument | Type | Description |
| --- | --- | --- |
| track | Real | The track number to get the animation set name of. |

#### Returns:

[String](../../../../../../../../../GameMaker_Language/GML_Overview/Data_Types.md)

#### Example:

if (skeleton\_animation\_get\_ext(1) != "bodyfight")
{
    skeleton\_animation\_set\_ext("bodyfight", 1);
}

The above code will change the animation set being used by track 1 to "bodyfight" if it is not already.