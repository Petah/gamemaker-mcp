---
title: "Flex Panels"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Flex_Panels/Flex_Panels.htm"
converted: "2025-09-14T03:59:56.923Z"
---

# Flex Panels

This section details the usage of the Flex Panel runtime functions, which help you create UI layouts by handling all the logical calculations concerning where UI boxes are placed and how they behave.

The Flex Panel functionality uses the [Yoga](https://yogalayout.dev) library.

This section contains the following pages:

-   [Flex Panel Struct Members](Flex_Panels_Styling.md)
-   [Flex Panel Functions](Function_Reference/section_index.md)

## Overview

You can use these functions to set up layouts consisting of **nodes**. Each node is a rectangular area and may contain other nodes, making a node a **container**.

By setting up nodes inside nodes (inside nodes...), you can create a layout tree. Each node can have properties that define how large it is, how it should be positioned in relation to the nodes in its container, how its own child nodes should behave, and so on.

![](../../../assets/Images/Scripting_Reference/GML/Reference/Flex%20Panels/flexpanel_overview.png)A layout tree can then be [calculated according to a given canvas size](../../../../../../GameMaker_Language/GML_Reference/Flex_Panels/Function_Reference/flexpanel_calculate_layout.md), and the final positions and sizes of the nodes [can be used](Function_Reference/flexpanel_node_layout_get_position.md) anywhere you like (e.g. setting up your UI systems). There is no rendering or asset support in these functions and how you make use of this data is entirely up to you.

## How To Create Layouts

Creating a layout is as simple as calling [flexpanel\_create\_node](Function_Reference/flexpanel_create_node.md) and passing it a struct or a JSON string. That struct/JSON should define the properties of the root node and all nodes nested under the root node. The structure of that struct/JSON is [outlined on this page](Flex_Panels_Styling.md).

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

You can specify as many options in that struct/JSON as you like, or you can call the function without passing a struct/JSON, which will create an empty node. You can later set properties on the node and insert/remove children by calling the [Flex Panel Functions](Function_Reference/section_index.md).

Each node has styling properties, which define its position, size and behaviour within its container. You can specify these styling properties in the struct/JSON that you pass while creating a node, which are all listed here: [Styling Properties](Flex_Panels_Styling.htm#h20).

You can also set and get these styling properties after creating a node using the [Styling Functions](Function_Reference/Styling_Functions/section_index.md).

## Using Layout Data

After you have set up your layout, you must call [flexpanel\_calculate\_layout](../../../../../../GameMaker_Language/GML_Reference/Flex_Panels/Function_Reference/flexpanel_calculate_layout.md) with the dimensions where you intend to use the layout.

Then you can call [flexpanel\_node\_layout\_get\_position](Function_Reference/flexpanel_node_layout_get_position.md) on the node you want information for, which will return a struct with its positional data.

You can use that positional data in any way you want, e.g. creating UI object instances for each node or drawing them as rectangles.

## Layout Examples

![](https://manual.gamemaker.io/monthly/en/assets/Images/Scripting_Reference/GML/Reference/Flex Panels/flexpanel_example1.png)Open the section below to see the code used to generate both of the layouts shown above:

[Layout CodeLayout Code](Flex_Panels.htm#)

This is the code used to generate the layout on the left:

n\_root = flexpanel\_create\_node({
    left: 20, top: 20,
    width: 800, height: 600, justifyContent: "center", alignItems: "center",
    nodes: \[
        {
            width: "60%", height: "60%",
            nodes: \[
                {
                    width: 200, height: 200, right: 20, bottom: 20, position: "absolute"
                }
            \]
        }
    \]
});

The first child is centred because of its parent's [Justify Content](Flex_Panels_Styling.htm#h13) and [Align Items](Flex_Panels_Styling.htm#h1) properties (which handle the main axis and cross axis alignment, respectively).

The second child has its [Position Type](Flex_Panels_Styling.htm#h17) set to "absolute", which allows it to be positioned along the bottom-right corner independently.

---

This is the code used to generate the layout on the right:

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

Here, children are inserted using a [repeat](../../GML_Overview/Language_Features/repeat.md) loop so that the same information does not have to be duplicated and written into the struct literal.

The "column" [Flex Direction](Flex_Panels_Styling.htm#h8) of the parent allows its children to be laid out vertically (forming the main axis), and the "flex-end" [Align Items](Flex_Panels_Styling.htm#h1) property aligns the children to the end of its cross axis (i.e. to the right).

The [Flex Shrink](Flex_Panels_Styling.htm#h10) property in the children ensures they shrink if they overflow the bounds of its parents.

Both of these examples use the data from [flexpanel\_node\_layout\_get\_position](Function_Reference/flexpanel_node_layout_get_position.md) in [draw\_rectangle](../Drawing/Basic_Forms/draw_rectangle.md) to draw a node's rectangular area from left, top to left + width, top + height.

## Flex Panel Preview

[The Debug Overlay](../Debugging/The_Debug_Overlay.md) contains a window for testing layouts in real-time using the same JSON data that you would pass into [flexpanel\_create\_node](Function_Reference/flexpanel_create_node.md).

![](../../../assets/Images/Scripting_Reference/GML/Reference/Debug/debug_overlay_flexpanel.png)You can use this to test your JSON data and edit layouts before using the data in your game code. This JSON code can also be used as a struct literal in your code.

## Containing Block

Some of the [Styling Properties](Flex_Panels_Styling.htm#h20) depend on a node's Containing Block, which may not be the same as its direct parent. For example, a node with a positionType of relative will position itself within its direct parent, however an absolute node will position itself to its Containing Block.

For information on how a Containing Block is chosen for a node and how it affects the node, see: [Containing block](https://www.yogalayout.dev/docs/advanced/containing-block)