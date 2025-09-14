---
title: "flexpanel_node_style_get_flex_wrap"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Flex_Panels/Function_Reference/Styling_Functions/flexpanel_node_style_get_flex_wrap.htm"
converted: "2025-09-14T03:59:57.184Z"
---

# flexpanel\_node\_style\_get\_flex\_wrap

This function returns the flexWrap property of the given [Flex Panel Node](../flexpanel_create_node.md).

See: [Flex Wrap](../../Flex_Panels_Styling.htm#h6) / [flexpanel\_node\_style\_set\_flex\_wrap](flexpanel_node_style_set_flex_wrap.md)

#### Syntax:

flexpanel\_node\_style\_get\_flex\_wrap(node);

| Argument | Type | Description |
| --- | --- | --- |
| node | Flex Panel Node | The node to read. |

#### Returns:

[Flex Panel Wrap Constant](flexpanel_node_style_set_flex_wrap.md)

#### Example:

var \_flex\_wrap = flexpanel\_node\_style\_get\_flex\_wrap(\_node);

This gets the flex wrap value of a node and stores it in a local variable.