---
title: "flexpanel_node_insert_child"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Flex_Panels/Function_Reference/flexpanel_node_insert_child.htm"
converted: "2025-09-14T03:59:57.996Z"
---

# flexpanel\_node\_insert\_child

This function inserts the node node (second argument) into the node root (first argument) as a child.

You must provide its index, which controls where the child is placed in the parent's hierarchy, which will then affect its layout position (unless the child's [Position Type](../Flex_Panels_Styling.htm#h17) is absolute). The index must start at 0 and must not be negative or greater than the number of children already in the parent node.

You can use this index value to later retrieve the child node from the parent using [flexpanel\_node\_get\_child](flexpanel_node_get_child.md).

#### Syntax:

flexpanel\_node\_insert\_child(root, node, index);

| Argument | Type | Description |
| --- | --- | --- |
| root | Flex Panel Node | The container to insert into, i.e. the parent |
| node | Flex Panel Node | The container to insert, i.e. the child |
| index | Real | The index of the child within the parent, e.g. 0, 1, 2, etc. |

#### Returns:

N/A

#### Example:

n\_root = flexpanel\_create\_node({
    left: 20, top: 20,
    width: 400, height: 600, flexDirection: "column", padding: 20, gapRow: 10, alignItems: "flex-end"
});

var i = 0; repeat (6)
{
    flexpanel\_node\_insert\_child(n\_root, flexpanel\_create\_node({
        width: "70%", height: 100, flexShrink: 1,
    }), i);

    i++;
}

This creates a root node and then runs a [repeat](../../../GML_Overview/Language_Features/repeat.md) loop to insert several child nodes into the root node.