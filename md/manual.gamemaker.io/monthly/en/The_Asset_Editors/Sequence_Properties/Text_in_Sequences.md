---
title: "Text in Sequences"
source: "manual.gamemaker.io/monthly/en/The_Asset_Editors/Sequence_Properties/Text_in_Sequences.htm"
converted: "2025-09-14T04:00:16.572Z"
---

# Text in Sequences

Text tracks can be added to a Sequence through the editor. This is done by selecting the ![](../../assets/Images/Icons/Icon_TextButton.png) **Add a Text Track** button from the Canvas Toolbox, and then clicking (and optionally dragging) in the Canvas to create a text track.

TIP Text can also be created directly within a room by creating an [Asset Layer](../Room_Properties/Layer_Properties.md), and then dragging in a font asset or using the ![](../../assets/Images/Icons/Icon_TextButton.png) tool from the Layer Toolbox. Text placed in rooms will follow behaviour similar to text in Sequences as described on this page.

![](../../assets/Images/Asset_Editors/Sequences_Text/SeqTextOverview.png)

This page covers the following topics:

Contents:

1.  [Creating Text](Text_in_Sequences.htm#s1)
2.  [Modifying Text](Text_in_Sequences.htm#s2)
3.  [Font Assets](Text_in_Sequences.htm#s3)
4.  [SDF Effects](Text_in_Sequences.htm#sdf_effects)
5.  [Parameters](Text_in_Sequences.htm#s4)
6.  [Inspector](Text_in_Sequences.htm#s5)

## Creating Text

There are two ways of creating a text track. After selecting the ![](../../assets/Images/Icons/Icon_TextButton.png) **Text** tool from the Toolbox, you can:

-   **Click once in the canvas**: This creates an "unwrapped" text track. This means the text can be as long as you want and it will stay on one line. Wrapping can easily be enabled later through [The Inspector](../../IDE_Tools/The_Inspector.md).

-   **Click and drag in the canvas**: This creates a "wrapped" text track, meaning the text only displays inside a frame. The size of this frame is set by dragging while creating the text track. Its size can also be changed later via parameter tracks or the Inspector. It is recommended to use wrapped text tracks as it makes it much easier to align your text and get consistent results while animating.

## Modifying Text

When you create a new text track, GameMaker opens [The Inspector](../../IDE_Tools/The_Inspector.md) and automatically selects the **Text** field, allowing you to start writing your text.

![](../../assets/Images/Asset_Editors/Sequences_Text/SeqTextEditFromInspector.png)To edit the text for a track at any time, simply select that track, go into the Inspector and modify the **Text** field again.

Resize Behaviour

Resizing your text track in the Canvas will work differently depending on whether your text track is **wrapped** or **unwrapped**.

If unwrapped, your text track will be scaled, similar to how you scale sprites and objects. However, resizing a **wrapped** text track modifies its **frame size** instead of modifying its scale values.
![](../../assets/Images/Asset_Editors/Sequences_Text/SeqTextResizeBehaviour.png)To scale a wrapped text track, use [Gizmos](The_Sequence_Canvas.htm#gizmos) instead, or edit the values in the Scale parameter track manually.

## Font Assets

Text tracks are tied to [Font assets](../Fonts.md). When you create a new text track, it will look for a font asset within your project, and use the one that was last added. If your project has no fonts, it will automatically create a new font asset.

When you delete a font, all text tracks that use that font are deleted as well, so ensure you don't accidentally delete font assets that are used in Sequences.

## SDF Effects

When the font asset used by a text track has [SDF Rendering](../../GameMaker_Language/GML_Reference/Asset_Management/Fonts/Fonts.htm#h) enabled, the text can have effects applied to it. The following effects are supported:

-   **Outline**
-   **Glow**
-   **Drop Shadow**

![](../../assets/Images/Scripting_Reference/GML/Reference/Fonts/font_effects.png)When SDF is enabled, add parameter tracks to use and animate these effects. These parameters are listed in the **Parameters** section below.

## Parameters

### General

You can modify and animate all the usual parameters that are provided for a sprite track, like Position, Rotation, Scale, Origin and Colour Multiply. Using these parameters you can move and rotate your text, make it bigger or smaller, and change its colour and alpha.

### Text-specific

There are some text-specific parameters provided as well, which can also be animated:![](../../assets/Images/Asset_Editors/Sequences_Text/SeqTextParameters.png)

-   **Character Spacing**: This is the space between each character (in pixels).
    ![](../../assets/Images/Asset_Editors/Sequences_Text/SeqTextCharacterSpacing.png)
-   **Line Spacing**: This is the space between each line of text (in pixels).
    ![](../../assets/Images/Asset_Editors/Sequences_Text/SeqTextLineSpacing.png)
-   **Paragraph Scaling**: This is the space between each paragraph of text (in pixels). A new paragraph starts when you add a line break manually by pressing ![](../../assets/Images/Icons/Icon_Enter.png).
    ![](../../assets/Images/Asset_Editors/Sequences_Text/SeqTextParagraphSpacing.png)
-   **Frame Size**: This is the size of the text's frame, and is only used when **Wrap** is enabled in the Inspector (see its section below for more information).

### SDF

You can also modify parameters for SDF effects:

![](../../assets/Images/Asset_Editors/Sequences_Text/SeqTextSDFParameters.png)

-   **Thickness**: This is the number of pixels to modify the thickness of each glyph in the text. It can range from -32 to 32.
-   **Core Colour**: This is the colour of the 'core' part of the glyph.
-   **Glow End**: This is the distance in pixels the glow effect ends (i.e. fades to fully transparent). It can range from 0 to 64.
-   **Glow Start**: This is the distance in pixels the glow effect starts from the edge of each glyph. It can range from 0 to 64.
-   **Glow Colour**: This is the glow colour.
-   **Outline Distance**: This is the distance in pixels that the outline extends from the edge of each glyph. It can range from 0 to 64.
-   **Outline Colour**: This is the colour of the outline.
-   **Shadow Softness**: This is the width of the drop shadow penumbra, which determines its "softness". It can range from 0 to 64.
-   **Shadow Offset**: This is the offset in pixels on the x and y axis of the drop shadow.
-   **Shadow Colour**: This is the colour of the drop shadow.

## Inspector

There are some properties that can only be changed through [The Inspector](../../IDE_Tools/The_Inspector.md). Such properties cannot be animated as they are not parameter tracks, but simple options that apply to the whole track.

NOTE The Inspector should open automatically when you create or select a text track, but if your Inspector is closed, you can open it manually from [The Windows Menu](../../IDE_Navigation/Menus/The_Windows_Menu.md) at the top.

The Inspector shows you the following properties when a text track is selected:

![](../../assets/Images/Asset_Editors/Sequences_Text/SeqTextInspector.png)

Some of the parameter tracks (such as **Colour**, **Character Spacing**, **Line Spacing**, etc.) are included here, and changing them will create a keyframe at the playhead if ![](../../assets/Images/Icons/Icon_Seq_Record.png) **Automatically record changes** is enabled, or modify the selected keyframe. The rest of the options are "static" (as they cannot be animated) and are as follows:

-   At the top it shows you the font asset that is selected. You can use this option to select an existing font asset, or create a new one and assign it to the selected text track.
-   **Text**: This is the text that is displayed on your text track. You can enter multiple lines here, however empty lines will not be displayed.
-   **Alignment**: Here you can change how your text is aligned within the frame horizontally (left, centre, right, justified) and vertically (bottom, top, middle). When using justified alignment in unwrapped mode, the length of the longest line of text will determine the frame width that the text is justified against.
-   **Wrap**: This controls whether the text should automatically wrap within the defined frame. When this is enabled, your text will automatically move to the next line when it hits the end of the frame, and will always be cut off if the text happens to be longer than the height of the frame.

### SDF Effects

The Inspector also lists SDF effect parameters. When the **Enable Effects** checkbox is enabled the text will be drawn with a different shader.

![](../../assets/Images/Asset_Editors/Sequences_Text/SeqTextInspectorSDFParams.png)

If the font doesn't have SDF enabled, you'll be asked to enable it first: ![](../../assets/Images/Asset_Editors/Sequences_Text/SeqTextInspectorSDFMustBeEnabled.png)