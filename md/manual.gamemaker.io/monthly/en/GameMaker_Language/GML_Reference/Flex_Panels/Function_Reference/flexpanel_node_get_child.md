---
title: "flexpanel_node_get_child"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Flex_Panels/Function_Reference/flexpanel_node_get_child.htm"
converted: "2025-09-14T03:59:57.885Z"
---

# flexpanel\_node\_get\_child

This function looks for a child node in the given parent node and returns the child.

The function accepts either of two kinds of values, which is used to look for the child:

-   The index of the child node, as passed into [flexpanel\_node\_insert\_child](flexpanel_node_insert_child.md) or a value from 0 to the value of [flexpanel\_node\_get\_num\_children](flexpanel_node_get_num_children.md) - 1
-   The name of the child node, which is originally set either through the name property in the [initial struct](flexpanel_create_node.md) or through [flexpanel\_node\_set\_name](flexpanel_node_set_name.md). This search is done recursively through all child nodes and the first matching node is returned.

The function will return [undefined](../../../GML_Overview/Data_Types.md) if the child was not found (e.g. the index was out of range or name was not found).

#### Syntax:

flexpanel\_node\_get\_child(node, index\_or\_name);

| Argument | Type | Description |
| --- | --- | --- |
| node | Flex Panel Node | The parent node from which the child will be retrieved |
| index_or_name | Real or String | Either the index of the node or its name |

#### Returns:

[Flex Panel Node](flexpanel_create_node.md) or [undefined](../../../GML_Overview/Data_Types.md)

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