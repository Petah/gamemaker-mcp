---
title: "flexpanel_node_style_set_align_items"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Flex_Panels/Function_Reference/Styling_Functions/flexpanel_node_style_set_align_items.htm"
converted: "2025-09-14T03:59:57.393Z"
---

# flexpanel\_node\_style\_set\_align\_items

This function sets the alignItems property of the given [Flex Panel Node](../flexpanel_create_node.md). It can be one of the following enum members:

| Constant | Property Value |
| --- | --- |
| flexpanel_align.stretch | "stretch" |
| flexpanel_align.flex_start | "flex_start" |
| flexpanel_align.flex_end | "flex_end" |
| flexpanel_align.center | "center" |
| flexpanel_align.baseline | "baseline" |

See: [Align Items](../../Flex_Panels_Styling.htm#h1)

#### Syntax:

flexpanel\_node\_style\_set\_align\_items(node, align);

| Argument | Type | Description |
| --- | --- | --- |
| node | Flex Panel Node | The node to modify |
| align | Flex Panel Alignment Constant | The alignment to use |

#### Returns:

N/A

#### Example:

flexpanel\_node\_style\_set\_align\_items(\_node, flexpanel\_align.center);

This sets the align items of a node to center.