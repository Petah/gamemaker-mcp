---
title: "flexpanel_node_style_get_align_content"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Flex_Panels/Function_Reference/Styling_Functions/flexpanel_node_style_get_align_content.htm"
converted: "2025-09-14T03:59:57.011Z"
---

# flexpanel\_node\_style\_get\_align\_content

This function returns the alignContent property of the given [Flex Panel Node](../flexpanel_create_node.md).

See: [Align Content](../../Flex_Panels_Styling.htm#h) / [flexpanel\_node\_style\_set\_align\_content](flexpanel_node_style_set_align_content.md)

#### Syntax:

flexpanel\_node\_style\_get\_align\_content(node);

| Argument | Type | Description |
| --- | --- | --- |
| node | Flex Panel Node | The node to read. |

#### Returns:

[Flex Panel Justify Content Constant](flexpanel_node_style_set_justify_content.md)

#### Example:

var \_align\_content = flexpanel\_node\_style\_get\_align\_content(\_node);

This gets the align content value of a node and stores it in a local variable.