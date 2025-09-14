---
title: "on_ui_layer"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Instances/Instance_Variables/on_ui_layer.htm"
converted: "2025-09-14T03:59:33.576Z"
---

# on\_ui\_layer

This **built-in variable** is created for every instance in a room and stores whether the instance is placed on a [UI layer](../../../../../The_Asset_Editors/Room_Properties/UI_Layers.md) (true) or not (false).

#### Syntax:

on\_ui\_layer

#### Returns:

[Boolean](../../../../GML_Overview/Data_Types.md)

#### Example:

with (all)
{
    if (!on\_ui\_layer) depth = -bbox\_bottom;
}

This runs a line of code for all instances in the room. If the instance is not on a UI layer, its depth is set to its bottom bounding box edge.