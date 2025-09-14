---
title: "flexpanel_node_style_set_justify_content"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Flex_Panels/Function_Reference/Styling_Functions/flexpanel_node_style_set_justify_content.htm"
converted: "2025-09-14T03:59:57.639Z"
---

# flexpanel\_node\_style\_set\_justify\_content

This function sets the justifyContent property of the given [Flex Panel Node](../flexpanel_create_node.md). It can be one of the following enum members:

| Constant | Property Value |
| --- | --- |
| flexpanel_justify.start | "flex-start" |
| flexpanel_justify.flex_end | "flex-end" |
| flexpanel_justify.center | "center" |
| flexpanel_justify.space_between | "space-between" |
| flexpanel_justify.space_around | "space-around" |
| flexpanel_justify.space_evenly | "space-evenly" |

See: [Justify Content](../../Flex_Panels_Styling.htm#h13)

#### Syntax:

flexpanel\_node\_style\_set\_justify\_content(node, justify);

| Argument | Type | Description |
| --- | --- | --- |
| node | Flex Panel Node | The node to modify |
| justify | Flex Panel Justify Content Constant | The justification to use |

#### Returns:

N/A

#### Example:

flexpanel\_node\_style\_set\_justify\_content(\_node, flexpanel\_justify.space\_between);

This sets the justify content of a node to space-between.