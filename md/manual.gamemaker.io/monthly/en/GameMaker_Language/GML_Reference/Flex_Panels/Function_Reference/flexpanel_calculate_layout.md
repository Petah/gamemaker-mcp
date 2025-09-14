---
title: "flexpanel_calculate_layout"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Flex_Panels/Function_Reference/flexpanel_calculate_layout.htm"
converted: "2025-09-14T03:59:57.832Z"
---

# flexpanel\_calculate\_layout

This function calculates the layout data for the given node and all of its children. The calculated layouts are returned with [flexpanel\_node\_layout\_get\_position](flexpanel_node_layout_get_position.md).

It is required that you run this function at least once before using the layout positions of a node, otherwise all positions for the node (and its child nodes) will be 0. You may run this function again for re-calculating layouts in case of a resolution change.

The function takes a width and a height where the root node is "placed" for layout calculations. For example, if the root node has a [width](../Flex_Panels_Styling.md) of "100%", and the width you pass to this function is 560, then the width of that root node canvas becomes 560 pixels.

You can see these dimensions as the final resolution of the canvas where your layout is active, e.g. when making a full-screen interface, these dimensions would be equal to your game window's size, or for an interface that is housed inside a small window within your game, they would be the dimensions of that window.

The width or height can be [undefined](../../../../../../../GameMaker_Language/GML_Overview/Data_Types.md), in which case it will extend indefinitely.

You must choose whether the [layout direction](../Flex_Panels_Styling.htm#layout) is left-to-right or right-to-left by passing a [Flex Panel Layout Direction Constant](Styling_Functions/flexpanel_node_style_set_direction.md).

#### Syntax:

flexpanel\_calculate\_layout(root, width, height, direction);

| Argument | Type | Description |
| --- | --- | --- |
| root | Flex Panel Node | The node for which calculations are performed |
| width | Real or undefined | The width that the root node is calculated against |
| height | Real or undefined | The height that the root node is calculated against |
| direction | Flex Panel Layout Direction Constant | The direction to use for all nodes |

#### Returns:

N/A

#### Example:

flexpanel\_calculate\_layout(n\_root, room\_width, room\_height, flexpanel\_direction.LTR);

This calculates the layout for the node n\_root within the room dimensions, using a left-to-right direction.