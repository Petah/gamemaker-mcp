---
title: "flexpanel_node_get_num_children"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Flex_Panels/Function_Reference/flexpanel_node_get_num_children.htm"
converted: "2025-09-14T03:59:57.950Z"
---

# flexpanel\_node\_get\_num\_children

This function returns the number of children in the given node.

You can use this value to iterate from 0 to the returned value - 1 and retrieve each child node by passing the index value into [flexpanel\_node\_get\_child](flexpanel_node_get_child.md).

#### Syntax:

flexpanel\_node\_get\_num\_children(node);

| Argument | Type | Description |
| --- | --- | --- |
| node | Flex Panel Node | The parent node |

#### Returns:

[Real](../../../GML_Overview/Data_Types.md)

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