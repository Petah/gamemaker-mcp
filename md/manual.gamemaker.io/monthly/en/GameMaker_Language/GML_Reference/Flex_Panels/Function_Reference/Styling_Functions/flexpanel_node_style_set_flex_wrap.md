---
title: "flexpanel_node_style_set_flex_wrap"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Flex_Panels/Function_Reference/Styling_Functions/flexpanel_node_style_set_flex_wrap.htm"
converted: "2025-09-14T03:59:57.580Z"
---

# flexpanel\_node\_style\_set\_flex\_wrap

This function sets the flexWrap property of the given [Flex Panel Node](../flexpanel_create_node.md). It can be one of the following enum members:

| Constant | Property Value |
| --- | --- |
| flexpanel_wrap.no_wrap | "no-wrap" |
| flexpanel_wrap.wrap | "wrap" |
| flexpanel_wrap.reverse | "wrap-reverse" |

See: [Flex Wrap](../../Flex_Panels_Styling.htm#h6)

#### Syntax:

flexpanel\_node\_style\_set\_flex\_wrap(node, wrap);

| Argument | Type | Description |
| --- | --- | --- |
| node | Flex Panel Node | The node to modify |
| wrap | Flex Panel Wrap Constant | The wrap mode to use |

#### Returns:

N/A

#### Example:

flexpanel\_node\_style\_set\_flex\_wrap(\_node, flexpanel\_wrap.wrap);

This enables wrapping for a node.