---
title: "The Timeline Editor"
source: "manual.gamemaker.io/monthly/en/The_Asset_Editors/Timelines.htm"
converted: "2025-09-14T04:00:17.066Z"
---

# The Timeline Editor

![The Timeline Editor](../assets/Images/Asset_Editors/Editor_Timelines.png)

IMPORTANT Timelines have been replaced by [Sequences](Sequences.md) and currently only exist for legacy purposes. [Moments can be programmed](Sequence_Properties/Broadcast_Messages.htm#moments) in a Sequence for functions to be executed at given frames in the Sequence.

In most games you will want certain things to happen at precise moments in time. Now, you can try to achieve this by using the alarm events but when things get too complicated this won't work any more, especially as you are limited to only twelve alarms. That's why we have the **timeline** asset. In a timeline you specify which actions must happen at certain moments in game time, and you can use all the actions that are also available for an object in its different events or code to define this. Once you create a time line you can then assign it to an object, and the instance of that object will then execute the actions at the indicated moments of time when placed or created within a room.

For example, assume you want to make a guard and that this guard should move 20 time steps to the left, then 10 upwards, then 20 to the right, then 10 downwards and then finally stop. To achieve this you can make a timeline where you start with setting a motion to the left. You would then create moment 20 (a "moment" is just another way of saying "game step" or "game frame") and set a motion upward, then at moment 30 a motion to the right, at moment 50 a motion downwards and finally at moment 60 you would stop the motion. Once that is done, you can assign this timeline to the guard object and the guard instance will do exactly what you planned when placed in a room. You could even set an alarm in the time line so that it is repeated after a certain length of time and in this way your guard can patrol an area. You can also use a time line to control your game more globally, for example by creating an invisible controller object, then a time line that at certain moments creates enemies, and then assigning it to the controller object and placing an instance into the room. This is an easy way to get timed spawns of the enemies in a space shoorter game or something like that.

On adding a new moment, you may be asked to choose between GML Visual and GML Code. See [GameMaker Language](../GameMaker_Language.md) for more information.

To create a time line, right click ![RMB Icon](../assets/Images/Icons/Icon_RMB.png) on [Asset Browser](../Introduction/The_Asset_Browser.md) and select "Create Timeline". This will open the window pictured at the top of this page with the following sections:

[NameName](Timelines.htm#)

Here you give your timeline resource a **name**. This must only contain alpha-numeric characters or the "\_" under-bar and cannot start with a number, as it will be used to reference your timeline through code. This name will also be the unique timeline ID which can be used in GML Visual actions or code functions to identify the timeline.



[MomentMoment](Timelines.htm#)

You can set the **moment** value here. The moment value is calculated as the number of game steps after the timeline has started. So if you have a timeline with moments at positions 0 and 60, then moment 0 will be triggered when the timeline is _started_ and moment 60 will happen 60 steps _later_. If your room speed is set to 60 too, then moment 60 will happen one second after the timeline is started. You can do a double click ![LMB Icon](../assets/Images/Icons/Icon_LMB.png) on the moment value or you can use the right button ![RMB Icon](../assets/Images/Icons/Icon_RMB.png) menu and select " _change_" (see the section on the button menu below) to change it. To add a new moment, simply click the **Add** button at the bottom of the editor. Adding new moments will open the [code editor](Scripts.md) (or action editor) where you can add the functions or GML Visual that you want to call in that moment.



[DescriptionDescription](Timelines.htm#)

To help you understand what your timeline is doing it is permitted that you give moments a description to identify them. This is simply a string and will not be used in the game code or anywhere else, as it's purely for organising and understanding what your timeline does. To add a description to your moment, you need to use the /// @description format on the first line of the code block, for example:

/// @description Hello World

Which would look like this:

![Timeline Editor Name/Description](../assets/Images/Asset_Editors/Editor_Timelines_Name.png)

The timeline editor permits you to use ![Space Icon](../assets/Images/Icons/Icon_Shift.png) + ![LMB Icon](../assets/Images/Icons/Icon_LMB.png) to select all moments between the first click ![LMB Icon](../assets/Images/Icons/Icon_LMB.png) and the second click ![LMB Icon](../assets/Images/Icons/Icon_LMB.png), or you can use ![Control Icon](../assets/Images/Icons/Icon_Ctrl.png) / ![CMD Icon](../assets/Images/Icons/Icon_Cmd.png) + ![LMB Icon](../assets/Images/Icons/Icon_LMB.png) to click on single moments to select them independently. Timeline moments can be edited using the right mouse button ![RMB Icon](../assets/Images/Icons/Icon_RMB.png) menu on one of the selected elements:

![Timeline RMB Menu](../assets/Images/Asset_Editors/Editor_Timelines_RMBMenu.png)

-   **Add**: This option permits you to add a new moment to the timeline. It will be added directly after the last moment, so if the last moment in your timeline is 120, the next one you add will be 121. You can change the moment position by double clicking ![LMB Icon](../assets/Images/Icons/Icon_LMB.png) on the moment value in the editor or by right-clicking ![RMB Icon](../assets/Images/Icons/Icon_RMB.png) and choosing "_Change_".
-   **Edit**: This opens the current timeline moment for editing.
-   **Change Moment**: Change the value for the selected timeline moment. This is the same as slow double clicking ![LMB Icon](../assets/Images/Icons/Icon_LMB.png) on the timeline value in the editor window.
-   **Duplicate**: This will duplicate all the selected timeline moments and add them consecutively to the end of the current timeline.
-   **Merge**: If you select two or more moments from a timeline you can choose to merge them. This will create a single timeline moment at the position of the first moment selected with all the code and actions together concurrently.
-   **Remove**: This will remove the selected moment (or moments) from the timeline.
-   **Cut** / **Copy** / **Paste**: These options permit you to cut, copy or paste one or more timeline moments. You can use the standard keyboard shortcuts here too: ![Control Icon](../assets/Images/Icons/Icon_Ctrl.png) / ![CMD Icon](../assets/Images/Icons/Icon_Cmd.png) + "X", ![Control Icon](../assets/Images/Icons/Icon_Ctrl.png) / ![CMD Icon](../assets/Images/Icons/Icon_Cmd.png) + "C", and ![Control Icon](../assets/Images/Icons/Icon_Ctrl.png) / ![CMD Icon](../assets/Images/Icons/Icon_Cmd.png) + "V".
-   **Select All**: With this option you can select all the moments in a timeline. Selected moments can then be removed, merged, duplicated, cut, or copied.
-   **Convert to GML Visual / Code**: Timeline moments will be created using the method chosen when you created the project, either using code or using GML Visual actions. With this option you can convert from one to the other, regardless of the project type.

## [Code Editor 2 (Beta)](The_Text_Editor.md)

The new Code Editor 2 can be enabled from the [preferences](../Setting_Up_And_Version_Information/IDE_Preferences/Text_Editor_2_Preferences.md) and is used to edit Timelines when enabled. Moments are managed from the [Navigation Bar](The_Text_Editor.htm#h3) under the Document menu.