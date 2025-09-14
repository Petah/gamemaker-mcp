---
title: "flexpanel_node_style_get_min_height"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Flex_Panels/Function_Reference/Styling_Functions/flexpanel_node_style_get_min_height.htm"
converted: "2025-09-14T03:59:57.289Z"
---

# flexpanel\_node\_style\_get\_min\_height

This function returns the minHeight property of the given [Flex Panel Node](../flexpanel_create_node.md).

See: [Min/Max Width and Height](../../Flex_Panels_Styling.htm#h18) / [flexpanel\_node\_style\_set\_min\_height](flexpanel_node_style_set_min_height.md)

#### Syntax:

flexpanel\_node\_style\_get\_min\_height(node);

| Argument | Type | Description |
| --- | --- | --- |
| node | Flex Panel Node | The node to read. |

#### Returns:

[Flex Panel Unit-Value Struct](section_index.htm#units)

#### Example:

var \_min\_height = flexpanel\_node\_style\_get\_min\_height(\_node);

This gets the minimum height of a node and stores it in a local variable.