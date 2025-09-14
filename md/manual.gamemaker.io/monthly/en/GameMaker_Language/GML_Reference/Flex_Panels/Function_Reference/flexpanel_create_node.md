---
title: "flexpanel_create_node"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Flex_Panels/Function_Reference/flexpanel_create_node.htm"
converted: "2025-09-14T03:59:57.855Z"
---

# flexpanel\_create\_node

This function creates a new Flex Panel node.

You can optionally pass either a JSON string or a struct containing the node's properties, which are [described here](../Flex_Panels_Styling.md). These properties can also be set later using other [Flex Panel Functions](section_index.md).

The returned node can be [inserted into another node](flexpanel_node_insert_child.md) as a child. When you no longer need a node, you must [delete it](flexpanel_delete_node.md) otherwise it will continue to stay in memory.

### Usage Notes

-   When using a struct to create a node, the struct passed into the function will be used to store the created node's data and the same struct will be modified when any modifications are performed on the node. This means that passing the same struct variable into multiple calls to this function will result in the same node being returned. You can run [variable\_clone](../../Variable_Functions/variable_clone.md) on your struct variable before passing it into this function to ensure a copy is made and the original struct is not referenced in the created node.

#### Syntax:

flexpanel\_create\_node(\[struct\_or\_json\]);

| Argument | Type | Description |
| --- | --- | --- |
| struct_or_json | Struct or String | OPTIONAL Struct with node information or string containing JSON data, members described on this page |

#### Returns:

[Flex Panel Node](flexpanel_create_node.md)

#### Example 1: Creating An Empty Node

n\_root = flexpanel\_create\_node();

This creates an empty node. You can later [set properties](section_index.md) on this and [insert other nodes](flexpanel_node_insert_child.md) as children.

#### Example 2: Passing a Struct

n\_root = flexpanel\_create\_node({
    width: "80%", height: 200, padding: 20,
    nodes: \[
        {
            height: 20
        },
        {
            flex: 1, flexDirection: "row",
            nodes: \[
                { aspectRatio: 1 },
                { aspectRatio: 1 },
                { aspectRatio: 1 },
            \]
        },
        {
            height: 20
        },
    \]
});

This creates a node using a struct. That struct contains information on the properties of the root node and all of its nested children.

#### Example 3: Passing a JSON String

n\_root = flexpanel\_create\_node(@'{
    "width": "80%", "height": 200, "padding": 20,
    "nodes": \[
        {
            "height": 20
        },
        {
            "flex": 1, "flexDirection": "row",
            "nodes": \[
                { "aspectRatio": 1 },
                { "aspectRatio": 1 },
                { "aspectRatio": 1 },
            \]
        },
        {
            "height": 20
        },
    \]
}');

This creates the same nodes as before, however this uses a JSON [multi-line string](../../Strings/Strings.htm#@) instead of a struct.