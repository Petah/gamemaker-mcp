---
title: "Sequences Preferences"
source: "manual.gamemaker.io/monthly/en/Setting_Up_And_Version_Information/IDE_Preferences/Sequences_Preferences.htm"
converted: "2025-09-14T04:00:13.852Z"
---

# Sequences Preferences

![The Sequences Preferences](../../assets/Images/Setup_And_Version/Preferences/Sequences_Prefs.png)The **Sequences Preferences** are used to define certain properties for how [The Sequence Editor](../../The_Asset_Editors/Sequences.md) and its elements function. The main options are:

-   **Show canvas frame on newly created sequences**: When enabled, the canvas frame smart guide will be shown in the canvas of the Sequence Editor for all new sequences. This option can be enabled/disabled as required from the canvas properties in the editor itself too. Default value is enabled.
-   **Select asset keys and keyframes together**: When this setting is enabled, asset keys are selected together with all keyframes that belong to them in the Sequence Editor. This is enabled by default.
-   **Canvas frame width on newly created sequences**: Here you can set the default frame width for all new sequences. Default value is 1366px.
-   **Ca****nvas frame height on newly created sequences**: Here you can set the default frame height for all new sequences. Default value is 768px.
-   **Pause when clicking on the canvas**: When this option is checked, clicking anywhere in the Sequence Editor canvas will pause the sequence playback. This is enabled by default.
-   **Overlap selection delay in milliseconds**: This controls how long you need to wait before the Item Toolbox will pop up for overlapping items on the Sequence Editor canvas. Default value is 1000ms.
-   **Translation path point insertion margin**: In the Sequence Editor canvas, when you have added an asset and then created a position parameter track, there will be dotted lines drawn to demonstrate the path that the asset will take when moving. If you place your mouse close to this line, then you can add a new parameter track point to it, and this option sets the distance from the translation line that the mouse needs to be before the point marker will be shown. Default value is 6px.
-   **Automatically create default parameter tracks**: When enabled, this option will automatically add parameter tracks for position, scale, rotation and origin to any new tracks created in the Track Panel of the sequence. Default is disabled.
-   **Automatically stretch newly created assets**: This option will stretch all newly created asset keys to match the length of the sequence. Default is disabled.
-   **Height of Anim Curve Track in Dopesheet**: This option can be used to set how many track lines parameter tracks that use curves will take up in the dopw sheet when in the keyframe view.  Default is 2, but you can select either 1 or 3 as well.
-   **Default text for new Text Track**: The text string used when you create a new Text Track in a Sequence.
-   **Inspector selection colour**: The colour used for highlighting the track selected in the Inspector [Multi-Select](../../IDE_Tools/The_Inspector.htm#h) list.

[Confirm DialogsConfirm Dialogs](Sequences_Preferences.htm#)

![Sequences confirm dialog preferences](../../assets/Images/Setup_And_Version/Preferences/Sequences_Confirm_Prefs.png)The **Confirm Dialogs** preferences are used to change the messages that are shown in the sequence editor when you perform certain actions. The messages you can change are:

-   **Automatic choice to embed edited curve**: If you try to embed an animation curve that you have edited, you will be shown a message by default to confirm the action. However setting this option to "Yes" will not show the message and embed every time. Setting it to "No" will prevent embedding every time.
-   **Automatic choice to convert curve to keys**: If you try to convert an animation curve to keyframes, you will be shown a message by default asking if you want to continue. However setting this option to "Ok" will not show the message and just not let you convert the curve.

[Smart GuidesSmart Guides](Sequences_Preferences.htm#)

![](../../assets/Images/Setup_And_Version/Preferences/Sequences_SmartGuides_Prefs.png)Here you can select the behaviour of the smart guides when working in the Sequences Editor. The available options are:

-   **Enable Smart Guides**: Here you can enable or disable the smart guides in the Sequences Editor canvas. This is enabled by default.
-   **Enable Rulers**: Here you can enable or disable the smart guides in the Sequences Editor canvas. This is enabled by default.
-   **Snap Rulers To Edges**: This option will enable rulers to "snap" to the edges of assets in the sequences canvas (and vice versa). Default is enabled.
-   **Snap Distance**: This is the distance (in pixels) that an item needs to be to a ruler (or a ruler to an item) for it to "snap" to the position. Default value is 6px.