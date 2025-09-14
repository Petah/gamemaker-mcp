---
title: "The Animation Curve Library"
source: "manual.gamemaker.io/monthly/en/The_Asset_Editors/Animation_Curve_Properties/Animation_Curve_Library.htm"
converted: "2025-09-14T04:00:14.840Z"
---

# The Animation Curve Library

![](../../assets/Images/Asset_Editors/Editor_Animation_Curves_Library.png)The **Animation Curve Library** window allows you to change the Curve Type for the Animation Curve, and apply a preset to the selected channel. It can be opened by ![](../../assets/Images/Icons/Icon_LMB.png) left-clicking on the ![](../../assets/Images/Icons/Animation_Curve_Library_Button.png) button in the [Animation Curve Editor](../Animation_Curves.md) or [Sequence Dope Sheet](../Sequence_Properties/Using_Animation_Curves.md), or by ![](../../assets/Images/Icons/Icon_RMB.png) right-clicking anywhere in the Channel Editor.

[Curve TypeCurve Type](Animation_Curve_Library.htm#)

The **Curve Type** controls how a channel flows from point to point, which can be set to one of the following options:

-   **Linear**: This wll create a linear progression between points on the channel
-   **Smooth**: This will use catmull-rom interpolation to create a smooth progression between points on the channel
-   **Bezier**: This will use Bezier curve mathematics to create a smooth progression between points on the channel, where you can control how the curve looks by manipulating "handles" on the points

![](../../assets/Images/Asset_Editors/Editor_Animation_Curves_Types.png)Note that changing the Curve Type will apply that type to _all_ channels in the Animation Curve.

[Curve PresetsCurve Presets](Animation_Curve_Library.htm#)

A **C****urve Preset** changes the shape of your curve. ![](../../assets/Images/Icons/Icon_LMB.png) Left-clicking on a preset in the Presets menu will apply that preset to your selected channel, and clicking on **Reset** will revert the channel to how it was before the Animation Curve Library window was opened.

**NOTE**: Presets can only be applied if the Curve Type is set to **Bezier**.

![](../../assets/Images/Asset_Editors/Editor_Animation_Curves_Library_Preset0.gif)By default, a preset is applied to the whole channel. You can select a section of your channel by dragging with the ![](../../assets/Images/Icons/Icon_LMB.png) left mouse button in the **Channel Editor**, and then open the Animation Curve Library window through the ![](../../assets/Images/Icons/Animation_Curve_Library_Button.png) button or by ![](../../assets/Images/Icons/Icon_RMB.png) right-clicking, which will apply any presets to the selected section only.

![](../../assets/Images/Asset_Editors/Editor_Animation_Curves_Library_Preset1_Selection.gif)Note that your curve channel (or selection within that channel) needs to have a slope for a preset to have any effect, as any applied interpolation is based on the vertical difference between the starting and ending points. A flat curve has no such difference between the two points, so you will not see any results after applying a preset to such a curve.

There are two **Apply Modes** that you can choose from, which affects how a preset is applied to your channel (or to your selection within that channel):


![](../../assets/Images/Asset_Editors/Editor_Animation_Curves_Library_Apply_Modes.png)

-   **Overwrite:** This is the default when the window is opened through the ![](../../assets/Images/Icons/Animation_Curve_Library_Button.png) button in the Animation Curve Editor or the Sequence Dope Sheet. It overwrites any points between the beginning and ending points of your channel or selection.
-   **Between:** This is the default when the window is opened by ![](../../assets/Images/Icons/Icon_RMB.png) right-clicking anywhere in the Channel Editor. It applies the preset between each pair of selected points, and adds any new points that are needed without removing any existing points.

The following visual shows the ![](../../assets/Images/Icons/Curve_Expo.png) **Expo** curve preset applied to a channel using the **Between** and **Overwrite** apply modes:

![](../../assets/Images/Asset_Editors/Editor_Animation_Curves_Library_Apply_Modes_Difference.png)

As you can see in the above visual, **Between** applies the curve preset to each pair of points, and inserts any new points that are needed. **Overwrite** removes any points between the starting and ending points and then applies the preset.

There are also three **Easing Modes** that you can choose from, which controls how a curve accelerates or decelerates. The default easing mode is **Ease Out**.

![](../../assets/Images/Asset_Editors/Editor_Animation_Curves_Library_Easings.png)

-   **Ease In:** The curve starts with faster acceleration, and then decelerates
-   **Ease Out**: The curve starts with slower acceleration, and then accelerates over time
-   **Ease In-Out:** The curve starts with slower acceleration, accelerates over time and then decelerates

The following visual shows the **Quart** curve preset in all three easing modes:

![](../../assets/Images/Asset_Editors/Editor_Animation_Curves_Library_Easings_Quart.png)