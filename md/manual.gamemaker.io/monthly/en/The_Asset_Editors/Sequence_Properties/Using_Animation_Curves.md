---
title: "Using Animation Curves"
source: "manual.gamemaker.io/monthly/en/The_Asset_Editors/Sequence_Properties/Using_Animation_Curves.htm"
converted: "2025-09-14T04:00:16.680Z"
---

# Using Animation Curves

An important feature of the [dope sheet](Using_The_Dope_Sheet.md) is the ability to assign [Animation Curves](../Animation_Curves.md) to parameter tracks within the sequence to create **parameter curves** instead of parameter keyframes. There are two types of curves that can be used for parameter tracks:

-   **Embedded Curves**: These are curves that are embedded in the sequence and are unique to the parameter track they are used on.
-   **Shared Curves**: These are curves that are created independently of the sequence using the [Animation Curve Editor](../Animation_Curves.md).

We'll start by explaining how to use an Animation Curve asset, which is simply a case of creating a new curve, setting up the channels in the Animation Curve Editor, and then dragging the curve asset into the dope sheet to apply it to a parameter track:


![Add Animation Curve Asset To The Dope Sheet](../../assets/Images/Asset_Editors/Dope_Sheet_AddAnimCurve.gif)

You can also use the right mouse button ![RMB Icon](../../assets/Images/Icons/Icon_RMB.png) menu option **Assign Shared Curve (Import)** to add an animation curve asset to the selected parameter track. This will open the Asset Explorer where you can select the required curve from the ones presented to you:

![](../../assets/Images/Asset_Editors/Dope_Sheet_Shared_Curve.gif)It is important to note that the animation curve asset **must have the correct number of channels for the track it is being applied to**, as each type of parameter track will require a different number of channels in the animation curve. Any animation curves that do not have enough channels will be shown with a ![](../../assets/Images/Icons/Invalid_Triangle_Yellow.png) indicator in the Asset Browser.

Below is a list of the different parameter tracks and the channels that they will require in each curve asset (channels should be added in the order given for each parameter type):

-   **Position**: 2 channels, X and Y.
-   **Rotation**: 1 channel.
-   **Colour Multiply**: 4 channels, Alpha, Red, Green and Blue, and the range _must_ be between 0 and 255.
-   **Image Index**: 1 channel.
-   **Image Speed**: 1 channel.
-   **Origin**: 2 channels, X and Y.
-   **Scale**: 2 channels, X scale and Y scale, and note that the value is a multiplier, so the base value is 1 (no scale) and greater than one will make the image bigger, and less than 1 will make it smaller. Negative values will flip or mirror the image as well as apply scale.
-   **Pitch**: 1 channel, which _must_ be a minimum of 0, where 1 is the default pitch of the sound.
-   **Volume**: 1 channel, which _must_ be a minimum of 0 and a maximum of 1.

If you import an animation curve that does not have enough channels for the parameter track, you will be prompted to choose whether any missing channels should be added into the animation curve:

![](../../assets/Images/Asset_Editors/Editor_Sequences_Invalid_Curve.png)

Shared curves can also be made invalid if any required channels are deleted in an external animation curve editor. In such a case the shared curve will appear as invalid in the dope sheet, and you can click on "Add Channel(s)" to create any missing channels which will make the curve valid again:

![](../../assets/Images/Asset_Editors/Editor_Sequences_Invalid_Curve_Error.png)

By default, the animation curve will be applied along the entire length of the asset key it is attached to, however, much like with keyframes, you can click ![LMB Icon](../../assets/Images/Icons/Icon_LMB.png) on a curve and drag it to re-position it on the timeline, and you can also hold down the ![Alt Icon](../../assets/Images/Icons/Icon_Alt.png) key and and drag to resize the length of the curve (this also applies to **embedded curves**):

![Resize and reposition anim curves](../../assets/Images/Asset_Editors/Dope_Sheet_ResizeCurve.gif)The other way to add a parameter curve to a track is to embed it. This can be done by either clicking the right mouse button ![RMB Icon](../../assets/Images/Icons/Icon_RMB.png) on the parameter track and selecting "_Convert to Curve_", or by clicking on the **Toggle Curve Mode** ![](../../assets/Images/Icons/Icon_Seq_ToggleCurves.png) button, which will show you the track as an animation curve in the full dope sheet area, and you can then click the **Convert To Curve** button:

![Convert keyframes to a curve](../../assets/Images/Asset_Editors/Dope_Sheet_ConvertToCurve.gif)Once you have converted the parameter keyframe track to a curve it can be edited within the dope sheet, exactly the same way that you can edit [animation curve assets](../Animation_Curves.md), this includes adding or removing points, changing their position, changing the curve type (linear, smooth or bezier), applying presets, and renaming channels and the colours associated with them.

IMPORTANT You can also edit animation curve assets that have been applied to parameter tracks in this way, however any changes you make **will be applied to all tracks that use the animation curve**, as you are editing the curve asset and not a single copy of it. To edit an animation curve asset that has been applied to a track **only** on that track, you must first use the right mouse menu ![RMB Icon](../../assets/Images/Icons/Icon_RMB.png) on the parameter track and select **Embed Curve**. This will duplicate the animation curve asset and embed it in the parameter track as an independent curve only for that track. Conversely, you can convert an embedded animation curve into an Animation Curve asset using the right mouse button ![RMB Icon](../../assets/Images/Icons/Icon_RMB.png) menu option **Export To Shared Curve**. This will convert the embedded curve into a new asset which can then be edited as normal as well as applied to other parameter tracks if required.

![The dope sheet curve editor](../../assets/Images/Asset_Editors/Dope_Sheet_EmbeddedCurves.png)

The image above shows how the embedded animation curve editor looks, and it's very similar to the [Animation Curve Editor](../Animation_Curves.md). Expand each section below for more information on the different sections.

[Curve NameCurve Name](Using_Animation_Curves.htm#)

This will be the name of the external animation curve asset or the name of the parameter track for an embedded curve.

[Curve LibraryCurve Library](Using_Animation_Curves.htm#)

The ![](../../assets/Images/Icons/Animation_Curve_Library_Button.png) button opens the **Animation Curve Library** window, which allows you to change the Curve Type of the embedded or shared curve, and apply a preset to the selected channel.

![](../../assets/Images/Asset_Editors/Editor_Animation_Curves_Library.png)See the section on [Animation Curve Library](../Animation_Curve_Properties/Animation_Curve_Library.md "Animation Curve Library") for information on Curve Types and Presets. Note that opening the window through the ![](../../assets/Images/Icons/Animation_Curve_Library_Button.png) button will have the **"Overwrite"** Apply Mode selected by default.




[Channel ListChannel List](Using_Animation_Curves.htm#)

The channel list is where you can edit the different channels that comprise your parameter curve. Each channel must have a unique name (using alphanumeric characters and the "\_" underscore symbol only), and you can also set the colour for the channel by double clicking ![LMB Icon](../../assets/Images/Icons/Icon_LMB.png) on the colour swatch to the left, which will open the colour picker to let you choose a new colour. To rename the channel, you can do a slow double click ![LMB Icon](../../assets/Images/Icons/Icon_LMB.png) and rename, and you can also use the right mouse button ![RMB Icon](../../assets/Images/Icons/Icon_RMB.png) to open a menu where you can choose to rename, change the colour or copy the channel. Channels can be expanded by clicking the arrow beside the name to show each of the points on the channel curve, and these points can be edited manually by clicking the current value and typing in the new value. You can also toggle the channel visibility in the dope sheet by clicking on the "eye" icon ![Eye Icon](../../assets/Images/Icons/Icon_ToggleVisibility.png).

[Conversion ControlConversion Control](Using_Animation_Curves.htm#)

Here keyframes can be converted into parameter curves (as explained further up this page) but there is also a button to convert parameter curves into keyframes. However, you should be aware that when doing this there are a couple of caveats. Keyframes cannot be "between" frames, and so some curve values will need to be rounded to the nearest frame, which in turn will change the way the parameter track behaves. Also, if the parameter curve uses catmull-rom or bezier interpolation, **this will be lost** and the interpolation between keyframes will be set to linear interpolation.

[Curve MenuCurve Menu](Using_Animation_Curves.htm#)

This menu contains options available elsewhere in the editor, but all in one place. The options are:

-   **Set Range**: Set the vertical range of the parameter curve (see _Channel Range_, below).
-   **Convert To Curve**: Convert the selected parameter track using keyframes into a parameter curve.
-   **Embed Curve**: Embed the shared curve asset being used by the parameter track into the track.
-   **Assigned Shared Curve (Import)**: Assign an Animation Curve asset to be used as a shared curve for the parameter track.
-   **Convert To Keys**: Convert the selected parameter track using parameter curves into keyframes.
-   **Export to Shared Curve**: Convert the embedded curve into a shared curve asset.

[Channel RangeChannel Range](Using_Animation_Curves.htm#)

The Channel Range button is used for setting the visual vertical range for the Channel Editor. By default this will be set from -1 to 1, but clicking this button will open the following window:

![Animation Curve Editor Channel Range](../../assets/Images/Asset_Editors/Editor_Animation_Curves_Range.png)

Changing these values will change the way the data is represented in the Channel Editor section, permitting you to have higher/lower values along the channel curve than just -1 to 1. Note that this is purely visual and does not clamp the values for the channel.

[Channel EditorChannel Editor](Using_Animation_Curves.htm#)

The Channel Editor shows a visual representation of the different channels used in the parameter curve. By default, all channels will be shown here, but you can only edit the channel currently selected from the Channel List, which will be highlighted in the editor. You can change the position of any of the points along the channel curve by clicking ![LMB Icon](../../assets/Images/Icons/Icon_LMB.png) on them and dragging them around within the editor, but note that the first and last point can only be changed along the vertical axis and their horizontal value will always be 0 and 1 respectively.

You can add points directly to the channel curve by moving the mouse close to the main channel line and then clicking ![LMB Icon](../../assets/Images/Icons/Icon_LMB.png) when the cursor changes to the "**Add Point**" tool, and you can then edit these points by clicking ![LMB Icon](../../assets/Images/Icons/Icon_LMB.png) and dragging or by changing their values in the expanded channel options in the Channel List:

![](../../assets/Images/Asset_Editors/Dope_Sheet_Channel_Editor.gif)

You can edit multiple points at once by clicking ![LMB Icon](../../assets/Images/Icons/Icon_LMB.png) and dragging within the editor to select all the points you want to edit or by using ![CTRL Icon](../../assets/Images/Icons/Icon_Ctrl.png) / ![CMD Icon](../../assets/Images/Icons/Icon_Cmd.png) + ![LMB Icon](../../assets/Images/Icons/Icon_LMB.png) to add points to the selection individually. Releasing the mouse button and then clicking again on any of the points in the selection and dragging will move them all together:

![](../../assets/Images/Asset_Editors/Dope_Sheet_Channel_Editor_Move.gif)You can ![](../../assets/Images/Icons/Icon_RMB.png) right-click anywhere in the Channel Editor to open the [Animation Curve Library](../Animation_Curve_Properties/Animation_Curve_Library.md) window (only when the selected Curve Type is **Bezier**). Applying a preset in this way will affect the whole channel. To modify only a part of the channel, you can ![](../../assets/Images/Icons/Icon_RMB.png) right-click on an individual line to apply a preset to it, or select multiple lines by clicking ![LMB Icon](../../assets/Images/Icons/Icon_LMB.png) and dragging, then ![](../../assets/Images/Icons/Icon_RMB.png) right-click on the selection to apply a preset to the selected lines.

![](../../assets/Images/Asset_Editors/Dope_Sheet_Channel_Editor_Library.gif)Note that opening the **Animation Curve Library** window through the Channel Editor will have the **"Between"** Apply Mode selected by default.

Once you are finished editing the parameter curves you can go back to the regular dope sheet view of the different tracks by clicking on the the **Toggle Curve Mode** ![](../../assets/Images/Icons/Icon_Seq_ToggleCurves.png) button.