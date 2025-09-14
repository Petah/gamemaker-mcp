---
title: "The Sequence Editor"
source: "manual.gamemaker.io/monthly/en/The_Asset_Editors/Sequences.htm"
converted: "2025-09-14T04:00:16.798Z"
---

# The Sequence Editor

![The Sequence Editor](../assets/Images/Asset_Editors/Editor_Sequences.png)

A **Sequence** is essentially a collection of assets that perform a dynamic animation over time. They can contain sprites, instances, sounds and other things, and each of these can be set to move or change colour, or start/stop animating over time within the sequence itself. The assets you add are assigned to specific **tracks** within the sequence and these tracks can then have different attributes applied to them - called **keyframes** - which can be static or change over time. All editing of a sequence takes place in the **Sequence Editor** which is essentially comprised of three areas:

-   **Canvas** \- where you place the assets that make up the sequence.
-   **Track Panel** \- where you add/remove **asset tracks** and **parameter tracks** to/from your sequences.
-   **Dope Sheet** - where you add/remove/edit the **keyframes** of the tracks and control how they behave over time.

Note too that you can have sequences within sequences to create complex animations and effects, and sequences can also be accessed and changed through code to give you as much control as possible over how they will be displayed and used in your game. For more information on the coded aspect of sequences, please see the section on the [Sequence Functions](../GameMaker_Language/GML_Reference/Asset_Management/Sequences/Sequences.md) page.

Before continuing to explain the details of the editor, we'll take a moment to explain how a sequence is created as well as some keywords that are used in the descriptions so you'll have a more thorough understanding of how the Sequence Editor works. The general workflow for creating a sequence is as follows:

-   First you'd create your sequence from [The Asset Browser](../Introduction/The_Asset_Browser.md), which will open it the Sequence Editor.
-   Next you'd drag an asset (sprite, object, sound or sequence) into the editor canvas.
-   This will create an asset track in the **Track Panel**, and add an asset key to the Dope Sheet. The asset track is simply the name of the track that contains the asset, while the asset key is a bar that is drawn to symbolise the number of frames that the asset will be animated over in the sequence.
-   At this point, you'll usually want to position the asset in the canvas at its initial position for the start of the sequence, and add in any initial transforms, like scale or rotation.
-   When you are happy with the initial settings, you will want to record the **parameter keys** (or keyframes) - which is simply the name given to the values for scale, rotation and position that a specific asset key has at any point in the dope sheet timeline.
-   Next you'd change the position of the playhead (the current play position in the dope sheet timeline) and then move or change the asset transforms and record another parameter key.
-   All parameter keys are stored in additional parameter tracks which are a subset of tracks under the main asset track in the Track Panel, and you can edit the parameter key data for each parameter in the track editor.
-   Now you would repeat the above process for the length of the sequence, moving, rotating and scaling the asset as required, and then adding more assets as you need them.

Below you can find an overview of each of the features of the Sequence Editor, and at the bottom of this page are links to pages that explain the three main features mentioned above in more depth:

[Rulers / GuidesRulers / Guides](Sequences.htm#)

The rulers along the edge of the canvas show you the position of the things that are placed within it, and are marked from (0, 0) which is the center of the canvas and the default origin for the sequence. You can click and drag on the rulers to pull a horizontal or vertical **guide** into the sequence, and this guide can then be used to accurately position the different assets that are being used, as moving an asset close to one will "snap" it to the guide. While positioning assets within the sequence, **smart guides** will also be temporarily shown indicating the distance between assets, as well as the distance from the sequence boundary or center point.

![Guides and Smart Guides in the Sequences Editor](../assets/Images/Asset_Editors/Editor_Sequences_Guides.png)Note that the boundary of the sequence and the center point marker lines for the sequence are also considered guides and will behave the same way as guides added from the rulers, with the exception that they cannot be edited.

The distance that assets "snap" to guides, as well as other properties, can be set in the [Sequences Preferences](../Setting_Up_And_Version_Information/IDE_Preferences/Sequences_Preferences.md).

[Canvas ViewCanvas View](Sequences.htm#)

The canvas view is where you can see a preview of the sequence canvas, and is where you can edit and position the different assets that make up your sequence. You can add an asset to the sequence by simply dragging it from the asset browser and then dropping it into the canvas, and this will create a new track in the Track Panel, and also add an asset key for the asset at the current timeline playhead position. The following assets can be dropped onto the canvas in this way:

-   [Sprites](Sprites.md)
-   [Objects](Objects.md)
-   [Sounds](Sounds.md)
-   [Sequences](Sequences.md)
-   [Particle Systems](Particle_Systems.md)

You can also use the ![](../assets/Images/Icons/Icon_TextButton.png) **Text** tool in the Toolbox to create a text track. Read [Text in Sequences](Sequence_Properties/Text_in_Sequences.md) for more information.

Each asset added to the canvas can be manipulated in multiple ways - rotated, transformed, or translated - based on how you interact with it, as each asset will have a **bounding box** and **transform gizmos** as well as **bounding box controls**. All this is explained in more detail on the page about the [Sequence Editor Canvas](Sequence_Properties/The_Sequence_Canvas.md).

NOTE Sound assets, when added to a sequence, are essentially [sound emitters](../GameMaker_Language/GML_Reference/Asset_Management/Audio/Audio_Emitters/Audio_Emitters.md) that play only the given sound asset.

To navigate around the canvas view, you can use the same basic controls as for general Workspaces, ie: Use the middle mouse button ![MMB Icon](../assets/Images/Icons/Icon_MMB.png) and drag to pan the canvas (or alternatively use the ![Space Icon](../assets/Images/Icons/Icon_Space.png) + ![LMB Icon](../assets/Images/Icons/Icon_LMB.png) combination), and you can scroll horizontally with the mouse wheel ![MMB Icon](../assets/Images/Icons/Icon_MMB.png) or zoom in and out using the ![Control Icon](../assets/Images/Icons/Icon_Ctrl.png) / ![CMD Icon](../assets/Images/Icons/Icon_Cmd.png) key and the mouse wheel ![MMB Icon](../assets/Images/Icons/Icon_MMB.png). You can also cut, copy and paste assets using the ![Control Icon](../assets/Images/Icons/Icon_Ctrl.png) / ![CMD Icon](../assets/Images/Icons/Icon_Cmd.png) + "X", ![Control Icon](../assets/Images/Icons/Icon_Ctrl.png) / ![CMD Icon](../assets/Images/Icons/Icon_Cmd.png) + "C" and ![Control Icon](../assets/Images/Icons/Icon_Ctrl.png) / ![CMD Icon](../assets/Images/Icons/Icon_Cmd.png) + "V" key combinations.

[Keyframe ControlsKeyframe Controls](Sequences.htm#)

The keyframe control buttons are one of the ways that you can add, remove or edit specific keys in the dope sheet. The buttons are as follows:

-   ![Split Keys Icon](../assets/Images/Icons/Icon_Seq_Split.png) - This is the "Split selected keys" button. When you have selected one or more parameter keys in the dope sheet, you can then click this button and they will be split into two separate keys at the timeline playhead position (note that the keys must have been stretched to occupy multiple frames first):
    ![Split Asset and Parameter Keys](../assets/Images/Asset_Editors/Editor_Sequences_Split.gif)
-   ![Delete Keys Icon](../assets/Images/Icons/Icon_Seq_Delete.png) - This is the "Delete selected keys" button. When you have selected one or more parameter keys in the dope sheet, you can then click this button and they will be deleted:
    ![Delete Parameter Keys](../assets/Images/Asset_Editors/Editor_Sequences_Delete.gif)
-   ![Add Keys Icon](../assets/Images/Icons/Icon_Seq_Add.png) - This is the "Record a new key" button. When you have selected an asset key in the dope sheet and press this button, new parameter keys will be added to the asset track as parameter tracks, and the parameter keys will be added as points in the dope sheet timeline at the playhead position:
    ![Add Parameter Keys At Playhead Position](../assets/Images/Asset_Editors/Editor_Sequences_Record.gif)
-   ![Record Keys Icon](../assets/Images/Icons/Icon_Seq_Record.png) - This is the "Automatically Record Changes" button. When this is enabled, any changes made to the asset within the canvas will be automatically recorded and the appropriate parameter tracks and parameter keys added at the playhead position in the dope sheet. For example, if you move the playhead from frame 0 to frame 10 and then in the canvas move the asset 100 pixels to the right, a parameter track will be added for position, and the parameter keys will be added at frame 0 (the initial position) and at frame 10 (the playhead position) and when you press "Play" on the sequence, the asset will move 100px to the right over ten frames.
    ![Automatically Record Parameter Keys](../assets/Images/Asset_Editors/Editor_Sequences_Auto.gif)

[Sequence EventsSequence Events](Sequences.htm#)

In a similar way to regular objects, sequences can have events that can run some code assigned to them. The code is assigned in the form of a [scripted function](../GameMaker_Language/GML_Overview/Script_Functions.md) which can take no arguments and will be called when the event is triggered.

Events are added by clicking the **Add Event** button ![Add Event Icon](../assets/Images/Icons/Icon_AddEvent.png) which will open the following window:

![Sequence Editor Add Event Window](../assets/Images/Asset_Editors/Editor_Sequences_Events.png)

The events listed here are as follows:

-   **Create** \- This event happens when an instance of the sequence is first created, and is the very first thing that happens within a sequence placed in the room through the room editor when a room is entered.
-   **Destroy** \- This event is executed when an instance of the sequence is destroyed, and will be run before the Clean Up event (see below).
-   **Clean Up** - This event will be called after any event that removes an instance of the sequence from the room. So, it will be triggered if the sequence is destroyed, if the room ends, or if the game ends, and is designed to perform any task that you need performed once when the sequence instance is removed from the game for any reason. If you have destroyed the sequence instance using, for example, [layer\_sequence\_destroy](../GameMaker_Language/GML_Reference/Asset_Management/Rooms/Sequence_Layers/layer_sequence_destroy.md), then this event will be called after the Destroy Event (see above).
-   **Begin Step** / **Step** / **End Step** - The Step Event is an event that is checked every single step (frame) of the game while the sequence instance exists, and is split into three parts: begin, step and end. For most things the standard step event will be fine to use, but sometimes you want a bit more control over what code runs and at what time, so for that you are provided with the Begin and End step events, and these events will always be triggered in the same order every step (frame) of the game.

    IMPORTANT If the sequence is paused then these events will _not_ be triggered, and when play resumes they will be triggered the _next frame after the sequence starts playing again_. Also note that the order of events is not influenced by the playhead direction, and even if the sequence is playing backwards, the events will still be run as Begin, Step and End.
-   **Async Event**: This is the equivalent of the object [Asynchronous System Event](Object_Properties/Async_Events.md).

    IMPORTANT If the sequence is paused then this event will _not_ be triggered.

Each event can be assigned a single function which will be called when the event is triggered. You can assign the function using the input box for the event, and clicking the arrow button  will open the script editor for the function to be edited. You can also click the Create New button at the bottom to create a new script resource with "boilerplate" functions already defined and ready to be filled in. Note that you can change the function names to anything you require and do not have to use the predefined names, and you can also remove any function definitions that you don't need. It is important note that functions used for sequence events cannot take any arguments.

Sequence events can also be added and edited using code. For more information please see [here](../GameMaker_Language/GML_Reference/Asset_Management/Sequences/Sequence_Events_Moments_Broadcast.md).

[Track PanelTrack Panel](Sequences.htm#)

The **Track Panel** is where each of the assets in your sequence is listed as a track, with each track having sub-tracks for any parameters that are being changed for the asset. You can click ![LMB Icon](../assets/Images/Icons/Icon_LMB.png) and drag on any asset track to change its position above or below the other tracks (any assigned parameter tracks will move along with it), and you can use ![Control Icon](../assets/Images/Icons/Icon_Ctrl.png) / ![CMD Icon](../assets/Images/Icons/Icon_Cmd.png) + ![LMB Icon](../assets/Images/Icons/Icon_LMB.png) to select multiple tracks.

You can create a track by dragging an asset from [The Asset Browser](../Introduction/The_Asset_Browser.md) (either a sprite, an object, a sound, a sequence or a particle system) into the sequence canvas, or you can click the ![Add Track Icon](../assets/Images/Icons/Icon_AddAsset.png) icon at the bottom to add a new track and select the asset to use from the Asset Explorer window that opens. The new track will be created and the asset added at the current playhead position within the dope sheet timeline:

![Add A New Asset Track](../assets/Images/Asset_Editors/Editor_Sequences_AddTrack.gif)The track editor has many other features that are discussed in full detail on the following page:

-   [The Track Panel](Sequence_Properties/The_Track_Panel.md)

[Canvas ToolboxCanvas Toolbox](Sequences.htm#)

The Sequence Editor toolbox contains the different visualisation and setup options for the sequence being edited.

![](../assets/Images/Asset_Editors/Editor_Sequences_Toolbox.png)

-   **Add a Text Track** ![](../assets/Images/Icons/Icon_TextButton.png): This allows you to add a text track into the Sequence Canvas. After selecting this option, you can ![](../assets/Images/Icons/Icon_LMB.png) click (and optionally, drag) anywhere in the Canvas to create a new Text Track.

    For detailed information on text tracks, read: [Text in Sequences](Sequence_Properties/Text_in_Sequences.md).
-   **Toggle Canvas Grid** ![Toggle Canvas Grid Icon](../assets/Images/Icons/Icon_CanvasGrid.png): This will toggle on/off the canvas grid. This is a grid that GameMaker draws over the preview canvas to divide it into sections, and by default is set to 32x32px in size. If you click the Grid Menu icon ![Icon Grid Menu](../assets/Images/Icons/Icon_CanvasOptions.png) you will see the grid options:
    ![](../assets/Images/Asset_Editors/Editor_Sequences_GridControls.png)These options permit you to set the grid colour and alpha, as well as the cell values for the grid along the X and Y axis. You also have an option to enable or disable grid snapping here (disabled by default). You can use the keyboard shortcuts "G" and ![Shift Icon](../assets/Images/Icons/Icon_Shift.png) + "G" to toggle the grid visibility and grid snapping respectively.
-   **Canvas Zoom Controls** ![Canvas Zoom Controls Icons](../assets/Images/Icons/Icon_CanvasZoom.png): These buttons control the current canvas zoom level. You can zoom in or out and clicking the ![Zoom Reset Icon](../assets/Images/Icons/Icon_ZoomReset.png) button will reset the canvas to be 1:1 with the contents being edited. You can also click the Window Fit button ![Canvas Fit Icon](../assets/Images/Icons/Icon_CanvasFit.png) to make the entire canvas fit within the current editor workspace (this will zoom in/out as appropriate to make it fit). Note that you can also zoom in and out using the ![Control Icon](../assets/Images/Icons/Icon_Ctrl.png) / ![CMD Icon](../assets/Images/Icons/Icon_Cmd.png) and the Mouse Wheel ![MMB Icon](../assets/Images/Icons/Icon_MMB.png), and pressing ![Control Icon](../assets/Images/Icons/Icon_Ctrl.png) / ![CMD Icon](../assets/Images/Icons/Icon_Cmd.png) + ![Enter Icon](../assets/Images/Icons/Icon_Enter.png) will set the canvas to be 1:1 with the display.
-   **Toggle Gizmos** ![Toggle Gizmos Icon](../assets/Images/Icons/Icon_ToggleGizmos.png): Clicking this will enable or disable the different gizmos visible in the canvas. When enabled you will see all the gizmos associated with the different assets and the canvas itself, and when disabled these will not be shown, giving a clearer view of how the sequence looks. Note that this is enabled by default, and there is a menu available from the options button ![Icon Grid Menu](../assets/Images/Icons/Icon_CanvasOptions.png) where you can filter what is visible without having to disable all the different widgets together. A complete list of these filter options and an explanation of what they do can be found [here](Sequence_Properties/The_Sequence_Canvas.md).
-   T**oggle Transform Gizmo Mode** ![Transform Gizmo Icon](../assets/Images/Icons/Icon_TransformWidget.png): Each asset added to a sequence has a transform gizmo at its origin:
    ![The transform widget for an asset](../assets/Images/Asset_Editors/Editor_Sequences_TransformWidget.gif)This gizmo can control how the asset is scaled or rotated, as well as control its position and the position of the origin of the asset, however it only shows one of these options at a time. Clicking this button will switch between the different widget types or you can click on the options menu ![Icon Grid Menu](../assets/Images/Icons/Icon_CanvasOptions.png) to directly select the type of control action you want the transform gizmo to perform.
-   **Toggle Canvas Frame** ![Toggle Canvas Frame Icon](../assets/Images/Icons/Icon_ToggleCanvas.png): This button can be used to toggle the canvas frame on or off (it is on by default). The canvas frame is simply a guide that is used to judge where elements are placed in sequence canvas and any elements outside of the frame will not be rendered. This button also has the following options menu ![Icon Grid Menu](../assets/Images/Icons/Icon_CanvasOptions.png):
    ![Sequence Editor Canvas Options](../assets/Images/Asset_Editors/Editor_Sequences_CanvasControls.png)Here you can set the canvas frame toggle as well as the size of the canvas. You also have the possibility of setting a **reference image**, which is an image that you select from your computer (it is not imported into the project) to be used as a background reference for the sequence. This image is only visible in the Sequence Editor itself and will not be rendered when the sequence is used in a project. If you add a reference image you can also set the opacity that it's drawn at and offset its position within the canvas frame.

[Sequence ToolsSequence Tools](Sequences.htm#)

This bar has the various sequence playback controls:

![Sequence Editor Playback Controls](../assets/Images/Asset_Editors/Editor_Sequences_PlaybackControls.png)

-   **Playback Speed**: this is the playback speed of the sequence in frames (steps) per second.
-   **Playhead Position**: this is the current playhead position, and can be shown in time (h:m:s) or frames (f).
-   **Time Display Options**: here you can set whether to display the sequence times in hours, minutes and seconds (h:m:s) or frames (f).
-   **Broadcast Message**: Clicking this permits you to add a **broadcast message** at the current playhead position (this is explained in more detail [here](Sequence_Properties/Broadcast_Messages.md)).
-   **Add Moment**: Clicking this permits you to add a sequence **moment** at the current playhead position (this is explained in more detail below).
-   **Open Curve Editor**: This button toggles the currently selected track between the **curve view** and the **keyframe view**. This option is only really applicable to _parameter_ tracks and when enabled you will then have further options available to you depending on whether the parameter track uses keyframes or an [animation curve](Animation_Curves.md). For more information, please see the section on the [Using Animation Curves](Sequence_Properties/Using_Animation_Curves.md).
-   **Playback Controls**: with these buttons you can start and stop the sequence preview, as well as move the playhead to the start or the end. There is also a button to set whether the sequence should loop or not, and whether the sequence should "ping-pong" or repeat when looping. Note that this setting _will_ affect how the sequence is played when the project is compiled and run.
-   **Sequence Length**: this displays the total possible length of the sequence in frames (f) or in time (m:h:s). Note that the sequence may not run to this length if you have set the clip region to be smaller.

As mentioned above, you can add **Moments** to a sequence. A sequence **moment** is a position on the timeline where the sequence can call a **function**. This is a [scripted function](../GameMaker_Language/GML_Overview/Script_Functions.md) that must have no parameters and when the moment (frame) on the timeline is reached, this function will be called. To set a moment, you simply move the playhead to the required position and then click the **Add Moment** button, and in the dialog that opens you give the name of the function to call.

![Add A Moment To The Sequence](../assets/Images/Asset_Editors/Editor_Sequences_AddMoment.gif)When adding a moment function, you can click the ![Go To Function Icon](../assets/Images/Icons/Icon_GoTo_Function.png) button to go to the script with the specified function, or you can click the ![New Moment Function Icon](../assets/Images/Icons/Icon_NewMomentFunction.png) button to create a new script resource with an empty function ready for editing. You can also remove the moment and the function call it contains by clicking the ![Remove Moment Icon](../assets/Images/Icons/Icon_RemoveMoment.png) button.

Sequence moments can also be added and edited using code. For more information please see [here](../GameMaker_Language/GML_Reference/Asset_Management/Sequences/Sequence_Events_Moments_Broadcast.md).

[DopesheetDopesheet](Sequences.htm#)

The **Dope Sheet** is where all the asset key and parameter keys for each track are shown. You can click ![LMB Icon](../assets/Images/Icons/Icon_LMB.png) and drag keys left or right to position them within the dope sheet timeline, and you can also click ![LMB Icon](../assets/Images/Icons/Icon_LMB.png) on the right edge of an asset key to change its length. Note that for sprites and objects, setting the length to be longer than the animation will cause the animation to loop over the extra frames. The dope sheet also has controls for setting the start and end of the clip region for the sequence, and you can click ![LMB Icon](../assets/Images/Icons/Icon_LMB.png) anywhere to set the playhead to that position. For more information on how to use the dope sheet, please see the following page:

-   [Using The Dope Sheet](Sequence_Properties/Using_The_Dope_Sheet.md)

[Change OrientationChange Orientation](Sequences.htm#)

The change orientation button ![Change Orientation Icon](../assets/Images/Icons/Icon_ChangeOrientation.png) can be used to change the way the Sequence Editor displays the different sections. By default you will have the Canvas View at the top and the Track Editor and Dopesheet at the bottom, but this can be changed by clicking the button to cycle through the different layouts, or by clicking the Options button ![Icon Grid Menu](../assets/Images/Icons/Icon_CanvasOptions.png) to open a menu and select the layout that you want. The following layouts are available:

|  | Split Window | With this option the Sequence Editor will be split into two separate windows, where the main IDE window will show the Canvas view in the full desktop and the new window will show the Dope Sheet and Track Editor. Clicking the button again will change the layout again and remove the extra window. |
| --- | --- | --- |
|  | Snap Top | This option snaps the Track Editor and Dopesheet to the top of the IDE. |
|  | Snap Right | This option snaps the Track Editor and Dopesheet to the right of the IDE. |
|  | Snap Bottom | This option snaps the Track Editor and Dopesheet to the bottom of the IDE (this is the default view). |
|  | Snap Left | This option snaps the Track Editor and Dopesheet to the left of the IDE. |

You can also reset the Sequence Editor layout at any time by clicking the Reset option ![Reset Editor Layout Button](../assets/Images/Icons/Icon_Seq_Reset.png). This will restore the editor to its default state and re-open any sections that had been closed.

Due to the initial complexity of the Sequence Editor, we have only given a brief overview of the features available here, but we have additional pages listed below that go into more depth about its features and how they can be used:

-   [The Sequence Canvas](Sequence_Properties/The_Sequence_Canvas.md)
-   [The Track Panel](Sequence_Properties/The_Track_Panel.md)
-   [Text in Sequences](Sequence_Properties/Text_in_Sequences.md)
-   [Sound in Sequences](Sequence_Properties/Sound_in_Sequences.md)
-   [Clipping Masks](Sequence_Properties/Clipping_Masks.md)
-   [Using The Dope Sheet](Sequence_Properties/Using_The_Dope_Sheet.md)
-   [Using Animation Curves](Sequence_Properties/Using_Animation_Curves.md)
-   [Broadcast Messages & Moments](Sequence_Properties/Broadcast_Messages.md)