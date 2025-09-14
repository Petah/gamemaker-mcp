---
title: "flexpanel_node_get_data"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Flex_Panels/Function_Reference/flexpanel_node_get_data.htm"
converted: "2025-09-14T03:59:57.921Z"
---

# flexpanel\_node\_get\_data

This function returns the data struct of a node.

If the node was given a data member in its initial struct or JSON when [it was created](flexpanel_create_node.md), this will return that.

If no data member was set when creating the node, it will have been initialised with an empty data struct, and the function will return that so you can populate it with members.

The returned struct is _not_ a copy of the node's data struct and is a reference to that struct directly, so modifying the struct will affect the data returned in future calls to this function on the same node.

#### Syntax:

flexpanel\_node\_get\_data(node);

| Argument | Type | Description |
| --- | --- | --- |
| node | Flex Panel Node | The node to get the data struct of |

#### Returns:

[Struct](../../../../../../../GameMaker_Language/GML_Overview/Structs.md)

#### Example:

var \_pos = flexpanel\_node\_layout\_get\_position(\_node, false);
var \_data = flexpanel\_node\_get\_data(\_node);

if (!struct\_exists(\_data, "inst"))
{
    // Create instance
    var \_inst = instance\_create\_depth(\_pos.left, \_pos.top, \_depth, obj\_ui\_element,
    {
        name: \_name,
        width: \_pos.width,
        height: \_pos.height
    });

    \_data.inst = \_inst;
}
else
{
    var \_inst = \_data.inst;
    \_inst.x = \_pos.left;
    \_inst.y = \_pos.top;
    \_inst.width = \_pos.width;
    \_inst.height = \_pos.height;
}

This gets the positional data and data struct of the node \_node. Then it checks if it has an inst variable. If not, it creates an instance and stores that in the data struct as inst. If the variable already exists, it updates the instance stored in inst.