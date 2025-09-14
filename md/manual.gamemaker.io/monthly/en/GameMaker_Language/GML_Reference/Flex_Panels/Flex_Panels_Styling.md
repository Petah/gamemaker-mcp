---
title: "Flex Panel Struct Members"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Flex_Panels/Flex_Panels_Styling.htm"
converted: "2025-09-14T03:59:56.994Z"
---

# Flex Panel Struct Members

When creating a new Flex Panel node using [flexpanel\_create\_node](Function_Reference/flexpanel_create_node.md), you can pass a struct containing information on the node and its children, or a string containing JSON for the same data. For example:

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

This defines a root node with child nodes nested within it (and further child nodes within child nodes).

## Property List

The properties that you can define in the struct or JSON string are listed below. The rest of the page describes each property in detail.

Structs retrieved for nodes (e.g. [flexpanel\_node\_get\_child](Function_Reference/flexpanel_node_get_child.md) or [layer\_get\_flexpanel\_node](../Asset_Management/Rooms/UI_Layers/layer_get_flexpanel_node.md)) using [flexpanel\_node\_get\_struct](../../../../../../GameMaker_Language/GML_Reference/Flex_Panels/Function_Reference/flexpanel_node_get_struct.md) will include the same variables listed below.

-   name
-   data
-   nodes
-   width, height
-   minWidth, maxWidth, minHeight, maxHeight
-   left, right, top, bottom
-   alignContent
-   alignItems
-   alignSelf
-   aspectRatio
-   display
-   flex
-   flexGrow
-   flexShrink
-   flexBasis
-   flexDirection
-   flexWrap
-   justifyContent
-   direction
-   gap, gapRow, gapColumn
-   margin, marginInline, marginLeft, marginRight, marginTop, marginBottom, marginStart, marginEnd, marginHorizontal, marginVertical
-   padding, paddingLeft, paddingRight, paddingTop, paddingBottom, paddingStart, paddingEnd, paddingHorizontal, paddingVertical
-   border, borderLeft, borderRight, borderTop, borderBottom, borderStart, borderEnd, borderHorizontal, borderVertical
-   start, end
-   horizontal, vertical
-   position, positionType
-   layerElements
-   clipContent

The sections below describe what type of values you can pass for each property.

IMPORTANT Each property also has GML functions for setting and getting that property for a node. However, the types of values that a setter function accepts may be different from the type of value you can give it in the struct/JSON. Ensure you read the page for the function you are trying to use for information on its argument types.

## Basic Properties

### Name

Struct property: name
Functions: [flexpanel\_node\_set\_name](Function_Reference/flexpanel_node_set_name.md), [flexpanel\_node\_get\_name](Function_Reference/flexpanel_node_get_name.md)

You can give each node an optional, non-unique name. This can help you identify a node when using the final layout data in your systems.

### Data

Struct property: data
Function: [flexpanel\_node\_get\_data](../../../../../../GameMaker_Language/GML_Reference/Flex_Panels/Function_Reference/flexpanel_node_get_data.md)

You can give a node a data member which is a struct that can store any data you like. It does not affect the layouts and is for your own use.

When this member is not supplied, a node is still created with an empty data struct, which can be retrieved at any time. The returned struct can be modified and it affects what is returned with future calls to the function for the same node.

### Nodes

Struct property: nodes
Functions: [flexpanel\_node\_insert\_child](Function_Reference/flexpanel_node_insert_child.md), [flexpanel\_node\_remove\_child](Function_Reference/flexpanel_node_remove_child.md), [flexpanel\_node\_remove\_all\_children](Function_Reference/flexpanel_node_remove_all_children.md), [flexpanel\_node\_get\_child](Function_Reference/flexpanel_node_get_child.md)

The nodes member is an array. This array defines the child nodes under the current node, where each node is a struct with the same format described on this page.

You can nest nodes inside nodes, e.g.:

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

## Styling Properties

NOTE You can also refer to [Yoga's styling documentation](https://www.yogalayout.dev/docs/styling/) for information beyond what this page describes.

### Width and Height

Struct properties: width, height
Functions: [flexpanel\_node\_style\_set\_width](../../../../../../GameMaker_Language/GML_Reference/Flex_Panels/Function_Reference/Styling_Functions/flexpanel_node_style_set_width.md), [flexpanel\_node\_style\_set\_height](Function_Reference/Styling_Functions/flexpanel_node_style_set_height.md), [flexpanel\_node\_style\_get\_width](Function_Reference/Styling_Functions/flexpanel_node_style_get_width.md), [flexpanel\_node\_style\_get\_height](../../../../../../GameMaker_Language/GML_Reference/Flex_Panels/Function_Reference/Styling_Functions/flexpanel_node_style_get_height.md)

These properties define the width and height of the "border box" of the node, which is the collective size of the node's content, padding and border.

Both width and height can take the following values:

-   "auto": This is the default value. It calculates the width or height of the node based on its content (e.g. child nodes).
-   A [Real](../../GML_Overview/Data_Types.md) value, e.g. 64: This defines a size in absolute pixels, however depending on other properties, this may or may not be the [final size](Function_Reference/flexpanel_node_layout_get_position.md) of the node.
-   Percentage value as string, e.g. "50%": This defines the width or height as a percentage of its [Containing Block](Flex_Panels.htm#h)'s width or height.

### Min/Max Width and Height

Struct properties: minWidth, maxWidth, minHeight, maxHeight
Functions: [flexpanel\_node\_style\_set\_min\_width](Function_Reference/Styling_Functions/flexpanel_node_style_set_min_width.md), [flexpanel\_node\_style\_set\_max\_width](Function_Reference/Styling_Functions/flexpanel_node_style_set_max_width.md), [flexpanel\_node\_style\_set\_min\_height](../../../../../../GameMaker_Language/GML_Reference/Flex_Panels/Function_Reference/Styling_Functions/flexpanel_node_style_set_min_height.md), [flexpanel\_node\_style\_set\_max\_height](Function_Reference/Styling_Functions/flexpanel_node_style_set_max_height.md), [flexpanel\_node\_style\_get\_min\_width](Function_Reference/Styling_Functions/flexpanel_node_style_get_min_width.md), [flexpanel\_node\_style\_get\_max\_width](Function_Reference/Styling_Functions/flexpanel_node_style_get_max_width.md), [flexpanel\_node\_style\_get\_min\_height](../../../../../../GameMaker_Language/GML_Reference/Flex_Panels/Function_Reference/Styling_Functions/flexpanel_node_style_get_min_height.md), [flexpanel\_node\_style\_get\_max\_height](Function_Reference/Styling_Functions/flexpanel_node_style_get_max_height.md)

These properties define the minimum and maximum size the node must maintain in each dimension. It accepts absolute pixel values ([Real](../../GML_Overview/Data_Types.md)) and percentage values ([String](../../GML_Overview/Data_Types.md) ending with %) (as described in the previous section).

### Aspect Ratio

Struct property: aspectRatio
Functions: [flexpanel\_node\_style\_set\_aspect\_ratio](Function_Reference/Styling_Functions/flexpanel_node_style_set_aspect_ratio.md), [flexpanel\_node\_style\_get\_aspect\_ratio](Function_Reference/Styling_Functions/flexpanel_node_style_get_aspect_ratio.md)

This is the aspect ratio that the node must maintain and corresponds to the horizontal axis.

For example, an aspect ratio of 1 will result in a square node, 2 will be a 2:1 rectangle where its width is twice as much as its height, 0.5 will make the width half the size of the height.

### Insets

Struct properties: left, right, top, bottom, start, end
Functions: [flexpanel\_node\_style\_set\_position](../../../../../../GameMaker_Language/GML_Reference/Flex_Panels/Function_Reference/Styling_Functions/flexpanel_node_style_set_position.md), [flexpanel\_node\_style\_get\_position](Function_Reference/Styling_Functions/flexpanel_node_style_get_position.md)

These properties define the distance between an edge of the node and the same edge of its parent's node, with positive values moving the node toward the centre, and negative values moving it away from the centre.

For example, a left value of 20 will place the node's left edge 20 pixels to the right of the parent's left edge. A right value of 40 will move the node so its right edge is 40 pixels to the left of its parent's, without resizing the node.

These values also accept percentages as strings.

left and top will always take precedence over right and bottom, respectively. start and end change depending on the [Layout Direction](Flex_Panels_Styling.htm#direction).

### Position Type

Struct properties: position, positionType
Functions: [flexpanel\_node\_style\_set\_position\_type](Function_Reference/Styling_Functions/flexpanel_node_style_set_position_type.md), [flexpanel\_node\_style\_get\_position\_type](Function_Reference/Styling_Functions/flexpanel_node_style_get_position_type.md)

This defines the position type of the node. You can pass any one of the following strings:

-   "relative" (default): This node will participate in the flow of its parent container and will take up space in it. Inset positions (left, top, etc.) will be relative to the node's position within the flow.
-   "absolute": This node is removed from the flow of its parent and will not take up space. Inset positions will be relative to the [Containing Block](Flex_Panels.htm#h) which may not be its direct parent.
-   "static": The node will behave like relative except it will ignore insets and will not form a [Containing Block](Flex_Panels.htm#h) for its children.

### Margin

Struct properties: margin, marginInline, marginLeft, marginRight, marginTop, marginBottom, marginStart, marginEnd, marginHorizontal, marginVertical
Functions: [flexpanel\_node\_style\_set\_margin](../../../../../../GameMaker_Language/GML_Reference/Flex_Panels/Function_Reference/Styling_Functions/flexpanel_node_style_set_margin.md), [flexpanel\_node\_style\_get\_margin](Function_Reference/Styling_Functions/flexpanel_node_style_get_margin.md)

This is the space around the outside of the node. You can define it for all edges or for a specific edge. Accepts pixel values and percentages.

### Padding

Struct properties: padding, paddingLeft, paddingRight, paddingTop, paddingBottom, paddingStart, paddingEnd, paddingHorizontal, paddingVertical
Functions: [flexpanel\_node\_style\_set\_padding](Function_Reference/Styling_Functions/flexpanel_node_style_set_padding.md), [flexpanel\_node\_style\_get\_padding](Function_Reference/Styling_Functions/flexpanel_node_style_get_padding.md)

This is the spacing between the inner edges of the node and its children. You can define it for all edges or for a specific edge. Accepts pixel values and percentages.

For nodes that don't have a defined width/height, this will increase the width/height.

### Border

Struct properties: border, borderLeft, borderRight, borderTop, borderBottom, borderStart, borderEnd, borderHorizontal, borderVertical
Functions: [flexpanel\_node\_style\_set\_border](../../../../../../GameMaker_Language/GML_Reference/Flex_Panels/Function_Reference/Styling_Functions/flexpanel_node_style_set_border.md), [flexpanel\_node\_style\_get\_border](Function_Reference/Styling_Functions/flexpanel_node_style_get_border.md)

This acts the same as padding.

### Gap

Struct properties: gap, gapRow, gapColumn
Functions: [flexpanel\_node\_style\_set\_gap](Function_Reference/Styling_Functions/flexpanel_node_style_set_gap.md), [flexpanel\_node\_style\_get\_gap](Function_Reference/Styling_Functions/flexpanel_node_style_get_gap.md)

This is the added distance between each row and column of the flex container and affects distances between child nodes. You can apply to both axes with gap or apply only to rows or columns.

### Layout Direction

Struct properties: direction
Functions: [flexpanel\_node\_style\_set\_direction](../../../../../../GameMaker_Language/GML_Reference/Flex_Panels/Function_Reference/Styling_Functions/flexpanel_node_style_set_direction.md), [flexpanel\_node\_style\_get\_direction](Function_Reference/Styling_Functions/flexpanel_node_style_get_direction.md)

This is the layout direction of the node and its children. You can pass either of two strings:

-   "ltr": Flex panels are laid out from left to right. The start inset refers to left and end refers to right.
-   "rtl": Flex panels are laid out from right to left. The start inset refers to right and end refers to left.

This can be set for an entire layout tree when [calculating its layout](../../../../../../GameMaker_Language/GML_Reference/Flex_Panels/Function_Reference/flexpanel_calculate_layout.md).

### Flex Direction

Struct properties: flexDirection
Functions: [flexpanel\_node\_style\_set\_flex\_direction](Function_Reference/Styling_Functions/flexpanel_node_style_set_flex_direction.md), [flexpanel\_node\_style\_get\_flex\_direction](../../../../../../GameMaker_Language/GML_Reference/Flex_Panels/Function_Reference/Styling_Functions/flexpanel_node_style_get_flex_direction.md)

This is the direction in which non-absolute children of the node are laid out. This direction is known as the main axis, and the direction perpendicular to this is known as the cross axis.

You can choose from the following values:

-   "column" (default): Align children from top to bottom.
-   "row": Align children from left to right.
-   "column-reverse": Align children from bottom to top.
-   "row-reverse": Align children from right to left.

The justifyContent property controls how child nodes are laid out on the main axis, and alignItems controls how they are placed on the cross axis.

### Flex Wrap

Struct properties: flexWrap
Functions: [flexpanel\_node\_style\_set\_flex\_wrap](Function_Reference/Styling_Functions/flexpanel_node_style_set_flex_wrap.md), [flexpanel\_node\_style\_get\_flex\_wrap](Function_Reference/Styling_Functions/flexpanel_node_style_get_flex_wrap.md)

This controls what happens when children in the container have overflown on the main axis. By default, they will overflow or shrink depending on their properties.

You can choose from the following values:

-   "no-wrap" (default): Default behaviour, no wrapping
-   "wrap": Child nodes are wrapped on overflow, with each new line being placed on the cross axis
-   "wrap-reverse": Child nodes are wrapped but the order of the lines is reversed

The alignContent property controls how the wrapped lines on the cross axis are laid out.

### Flex Basis

Struct properties: flexBasis
Functions: [flexpanel\_node\_style\_set\_flex\_basis](Function_Reference/Styling_Functions/flexpanel_node_style_set_flex_basis.md), [flexpanel\_node\_style\_get\_flex\_basis](Function_Reference/Styling_Functions/flexpanel_node_style_get_flex_basis.md)

This is the default size of an item within its flex container before any flex grow or shrink is applied. For a row container this affects the width, and for a column container this affects the height.

### Flex Grow

Struct properties: flexGrow
Functions: [flexpanel\_node\_style\_set\_flex\_grow](Function_Reference/Styling_Functions/flexpanel_node_style_set_flex_grow.md), [flexpanel\_node\_style\_get\_flex\_grow](../../../../../../GameMaker_Language/GML_Reference/Flex_Panels/Function_Reference/Styling_Functions/flexpanel_node_style_get_flex_grow.md)

This controls how the node grows within its flex container depending on the remaining space in the container. It's a positive weight value with a default of 1.

For example, having a 400px container with a 40px node and then a node with flexGrow: 1 will give the second node any remaining space within the container.

Any values other than 1 determine how a node is sized against other growing nodes in the same container, e.g. the node with a larger value will be given more size.

Also see the **Flex** property below.

### Flex Shrink

Struct properties: flexShrink
Functions: [flexpanel\_node\_style\_set\_flex\_shrink](Function_Reference/Styling_Functions/flexpanel_node_style_set_flex_shrink.md), [flexpanel\_node\_style\_get\_flex\_shrink](Function_Reference/Styling_Functions/flexpanel_node_style_get_flex_shrink.md)

This controls how the node shrinks within its flex container when there is overflow. It's a positive weight value with a default of 1.

Any values other than 1 determine how a node is shrinked against other growing nodes in the same container.

Also see the **Flex** property below.

### Flex

Struct properties: flex
Functions: [flexpanel\_node\_style\_set\_flex](../../../../../../GameMaker_Language/GML_Reference/Flex_Panels/Function_Reference/Styling_Functions/flexpanel_node_style_set_flex.md), [flexpanel\_node\_style\_get\_flex](Function_Reference/Styling_Functions/flexpanel_node_style_get_flex.md)

This is shorthand for the flexGrow and flexShrink properties. It will act as flexGrow when the value is positive, and flexShrink when it's negative.

### Justify Content

Struct properties: justifyContent
Functions: [flexpanel\_node\_style\_set\_justify\_content](Function_Reference/Styling_Functions/flexpanel_node_style_set_justify_content.md), [flexpanel\_node\_style\_get\_justify\_content](Function_Reference/Styling_Functions/flexpanel_node_style_get_justify_content.md)

This controls how the non-absolute children of a flex container are aligned along its main axis (i.e. the direction of flexDirection).

You can choose from the following values:

-   "flex-start" (default): Align children to the start of the main axis, as set in flexDirection.
-   "flex-end": Align children to the end of the main axis, acting as the opposite of flexDirection.
-   "center": Align children to the centre of the main axis.
-   "space-between": Align children from the start of the container to the end, inserting space between each child to fill the container.
-   "space-around": Similar to space-between but distributes the space before the first child and after the last child as well.
-   "space-evenly": Similar to space-around but the spacing between the edges and the children, and between each child node, is exactly the same.

### Align Items

Struct properties: alignItems
Functions: [flexpanel\_node\_style\_set\_align\_items](../../../../../../GameMaker_Language/GML_Reference/Flex_Panels/Function_Reference/Styling_Functions/flexpanel_node_style_set_align_items.md), [flexpanel\_node\_style\_get\_align\_items](Function_Reference/Styling_Functions/flexpanel_node_style_get_align_items.md)

This controls how the non-absolute children of a flex container are aligned along its cross axis (i.e. the direction perpendicular to flexDirection).

You can choose from the following values:

-   "stretch" (default): Stretch children to fit the size of the cross axis.
-   "flex-start": Align children to the start of the cross axis.
-   "flex-end": Align children to the end of the cross axis.
-   "center": Align children to the centre of the cross axis.
-   "baseline": Align children along a common baseline. Individual children can be set to be the reference baseline for their parents.

### Align Self

Struct properties: alignSelf
Functions: [flexpanel\_node\_style\_set\_align\_self](Function_Reference/Styling_Functions/flexpanel_node_style_set_align_self.md), [flexpanel\_node\_style\_get\_align\_self](../../../../../../GameMaker_Language/GML_Reference/Flex_Panels/Function_Reference/Styling_Functions/flexpanel_node_style_get_align_self.md)

This is the same as alignItems (described above) however instead of being applied to a container, this is applied directly to a child node, and affects its cross-axis alignment within its container. This property overrides the alignItems value set for its parent container.

### Align Content

Struct properties: alignContent
Functions: [flexpanel\_node\_style\_set\_align\_content](Function_Reference/Styling_Functions/flexpanel_node_style_set_align_content.md), [flexpanel\_node\_style\_get\_align\_content](Function_Reference/Styling_Functions/flexpanel_node_style_get_align_content.md)

If flexWrap is set to wrap or wrap-reverse, any items overflowing along the main axis will be laid out across new lines on the cross axis. This property controls how those wrapped lines are distributed along the cross axis.

You can choose from the following values:

-   "flex-start" (default): Align children to the start of the cross axis.
-   "flex-end": Align children to the end of the cross axis.
-   "center": Align children to the centre of the cross axis.
-   "space-between": Align children from the start of the container to the end along the cross axis, inserting space between each child to fill the container.
-   "space-around": Similar to space-between but distributes the space before the first child and after the last child as well.
-   "space-evenly": Similar to space-around but the spacing between the edges and the children, and between each child node, is exactly the same.

### Display

Struct properties: display
Functions: [flexpanel\_node\_style\_set\_display](Function_Reference/Styling_Functions/flexpanel_node_style_set_display.md), [flexpanel\_node\_style\_get\_display](../../../../../../GameMaker_Language/GML_Reference/Flex_Panels/Function_Reference/Styling_Functions/flexpanel_node_style_get_display.md)

This controls which layout mode the node follows. You can choose from the following values:

-   "flex" (default): The default layout behaviour.
-   "none": Disables the node. This effectively functions as the node being removed from the tree, as it's not included in any calculations.

### Layer Elements

Struct properties: layerElements

The layerElements property is included for a node when the structure is part of a [UI layer](../../../The_Asset_Editors/Room_Properties/UI_Layers.md), returned using [layer\_get\_flexpanel\_node](../Asset_Management/Rooms/UI_Layers/layer_get_flexpanel_node.md). This is an array that contains a struct for each asset element placed under the node, e.g. an Object Instance, Sprite, Text etc.

Each struct in the array can contain the following properties:

NOTE The variables described below are **read-only**. To change the properties of an Asset Element, use the appropriate [layer element functions](../Asset_Management/Rooms/Rooms.htm#room_layers_elements).

-   type, which can be "Instance", "Sprite", "Text", "Sequence"
-   elementOrder (Real): Draw order
-   **Flex properties**:
    -   flexVisible (Boolean)
    -   flexAnchor (String): this can be "TopLeft", "TopCentre", "TopRight", "MiddleLeft", "MiddleCentre", "MiddleRight", "BottomLeft", "BottomCentre", or "BottomRight"
    -   flexStretchWidth, flexStretchHeight, flexTileHorizontal, flexTileVertical, flexStretchKeepAspect (Booleans)
-   **Object Instance properties**:
    -   instanceObjectIndex (Object Handle)
    -   instanceId (Instance Handle)
    -   elementId (Element Handle): Element of the instance in the layer
    -   instanceVariables (Struct): Contains the Variable Definitions set up for the object, with the variable name as the key and the variable value as the key value
    -   instanceOffsetX, instanceOffsetY, instanceScaleX, instanceScaleY, instanceAngle, instanceImageSpeed, instanceImageIndex (Real)
    -   instanceColour (Colour)
-   **Sprite properties**:
    -   spriteIndex (Sprite Handle)
    -   elementId (Element Handle): Element of the sprite in the layer. Can be used with functions for [Sprite Elements](../../../../../../GameMaker_Language/GML_Reference/Asset_Management/Rooms/Sprite_Layers/Sprite_Layers.md)
    -   spriteImageSpeed, spriteImageIndex, spriteAngle, spriteOffsetX, spriteOffsetY, spriteScaleX, spriteScaleY (Real)
    -   spriteColour (Colour)
    -   spriteSpeedType ([Sprite Speed Constant](../Asset_Management/Sprites/Sprite_Information/sprite_get_speed_type.md))
-   **Text properties**:
    -   textFontIndex (Font Handle)
    -   elementId (Element Handle): Element of the text in the layer. Can be used with functions for [Text Elements](../Asset_Management/Rooms/Text_Functions/Text_Elements.md)
    -   textOffsetX, textOffsetY, textScaleX, textScaleY, textAngle, textColour, textOriginX, textOriginY (Real)
    -   textText (String)
    -   textAlignment, textCharacterSpacing, textLineSpacing, textFrameWidth, textFrameHeight (Real)
    -   textWrap (Boolean)
-   **Sequence properties**:
    -   sequenceIndex (Sequence Handle)
    -   elementId (Element Handle): Element of the sequence in the layer. Can be used with functions for [Sequence Elements](../Asset_Management/Rooms/Sequence_Layers/Sequence_Layers.md)
    -   sequenceHeadPosition, sequenceAngle, sequenceOffsetX, sequenceOffsetY, sequenceScaleX, sequenceScaleY, sequenceImageSpeed (Real)
    -   sequenceSpeedType ([Sprite Speed Constant](../Asset_Management/Sprites/Sprite_Information/sprite_get_speed_type.md))
    -   sequenceColour (Colour)

### Clip Content

Struct properties: clipContent

A boolean that stores whether contents of the node should clip rendering to the node area.