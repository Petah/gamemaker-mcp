---
title: "flexpanel_node_layout_get_position"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Flex_Panels/Function_Reference/flexpanel_node_layout_get_position.htm"
converted: "2025-09-14T03:59:58.026Z"
---

# flexpanel\_node\_layout\_get\_position

This function returns a struct with the layout information of the given node. You must have called [flexpanel\_calculate\_layout](../../../../../../../GameMaker_Language/GML_Reference/Flex_Panels/Function_Reference/flexpanel_calculate_layout.md) at least once on the node before calling this, otherwise all returned data will be 0.

By default, the returned position will be relative to the position of the parent container. You can pass false to the relative argument to instead return the absolute position of the node, after applying all parent transformations.

The left, top, width and height members are the ones that are most useful for making use of the calculated layouts (e.g. creating an object instance, drawing a rectangle, etc.).

The returned struct will contain the following members:

| Member | Data Type | Description |
| --- | --- | --- |
| left | Real | The calculated X position of the left edge of the node |
| top | Real | The calculated Y position of the top edge of the node |
| width | Real | The width of the node |
| height | Real | The height of the node |
| bottom | Real | The position of the bottom edge of the node, relative to the bottom edge of its parent container |
| right | Real | The position of the right edge of the node, relative to the right edge of its parent container |
| hadOverflow | Boolean | A boolean indicating whether any child nodes have overflown outside of the bounds of the node |
| direction | Flex Panel Layout Direction Constant | The layout direction used for this node |
| paddingLeft | Real | The left edge's padding value |
| paddingRight | Real | The right edge's padding value |
| paddingTop | Real | The top edge's padding value |
| paddingBottom | Real | The bottom edge's padding value |
| marginLeft | Real | The left edge's margin value |
| marginRight | Real | The right edge's margin value |
| marginTop | Real | The top edge's margin value |
| marginBottom | Real | The bottom edge's margin value |

#### Syntax:

flexpanel\_node\_layout\_get\_position(node, \[relative\]);

| Argument | Type | Description |
| --- | --- | --- |
| node | Flex Panel Node | The node to get the layout position of |
| relative | Boolean | OPTIONAL Whether to return relative positions (true, default) or absolute positions (false) |

#### Returns:

[Struct](../../../GML_Overview/Structs.md)

#### Example:

generate\_instance = function(\_node, \_depth)
{
    // Get layout data
    var \_pos = flexpanel\_node\_layout\_get\_position(\_node, false);
    var \_name = flexpanel\_node\_get\_name(\_node);

    // Create instance
    instance\_create\_depth(\_pos.left, \_pos.top, \_depth, obj\_ui\_element,
    {
        name: \_name,
        width: \_pos.width,
        height: \_pos.height
    });

    // Call for children (recursive)
    var \_children\_count = flexpanel\_node\_get\_num\_children(\_node);
    for (var i = 0; i < \_children\_count; i++)
    {
        var \_child = flexpanel\_node\_get\_child(\_node, i);
        generate\_instance(\_child, \_depth - 1);
    }
}

generate\_instance(n\_root, 0);

This function takes a node and a depth. It then gets the absolute positional data for the node and creates an [Object Instance](../../Asset_Management/Instances/Instance_Variables/id.md) at the node's calculated position, giving the instance the node's name, width and height.

It then iterates through each child of the node and runs the same function for each child.

Finally, the function is run for the root node, which will then be recursively executed for all of its child nodes as well.