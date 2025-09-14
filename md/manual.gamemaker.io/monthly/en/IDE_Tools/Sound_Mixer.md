---
title: "Sound Mixer"
source: "manual.gamemaker.io/monthly/en/IDE_Tools/Sound_Mixer.htm"
converted: "2025-09-14T04:00:12.408Z"
---

# Sound Mixer

![The Sound Mixer](../assets/Images/IDE%20Tools/Audio_Mixer.png)While creating any project it can be useful to check and set volumes of groups of sounds together, so that you can be sure that in-game they all sound correct. This can be tricky when you have to open each individual sound editor within the workspace, and so GameMaker permits you to open a **Sound Mixer** window where you can play multiple sounds all from the same place and tweak their volume levels accordingly. This window can be opened from [The Sound Editor](../The_Asset_Editors/Sounds.md) (which will add that selected sound to the mixer view) or from [The Tools Menu](../IDE_Navigation/Menus/The_Tools_Menu.md).

To add sounds to the mixer, you can use ![Control Icon](../assets/Images/Icons/Icon_Ctrl.png) / ![CMD Icon](../assets/Images/Icons/Icon_Cmd.png) +![LMB Icon](../assets/Images/Icons/Icon_LMB.png) to select sounds in [The Asset Browser](../Introduction/The_Asset_Browser.md) and then open the right-click ![RMB Icon](../assets/Images/Icons/Icon_RMB.png) menu and select **Open In Sound Mixer**. Alternatively, you can click ![LMB Icon](../assets/Images/Icons/Icon_LMB.png) on a sound asset and drag it into the mixer.

The mixer itself is split into the following sections:

-   **Column Controls**: This section contains the controls for the column of sounds. You can choose to play back all sounds in the column, as well as set them to loop or rewind to the start. You can also set the volume that they should be played back at, and changing this value will change it for all sounds in the group in real time.
-   **Audio Group**: If you have assigned sound assets to different [Audio Groups](../Settings/Audio_Groups.md) then you can select the group from this drop-down menu and all the sounds will be added to the current sound mixer column.
-   **Sound Assets**: This part of the column view shows each of the sounds that have been added to the mixer. You can set the overall volume for the column at the top of the mixer, then use the individual sound volume controllers to change it as required, and you can also play back and loop individual sounds. Note that moving volume sliders updates the volume at which sounds are heard in real time. To remove a sound from the column view, simply click the close button ![Mixer Close SOund Icon](../assets/Images/Icons/Mixer_CloseColumn.png) for the sound, and you can also expand/collapse the individual sound playback and volume controls to make the view more compact.
-   **Link Columns**: The Link Columns button ![Mixer Link Columns Icon](../assets/Images/Icons/Mixer_LinkColumns.png) will link adjacent columns meaning that their volume and playback controls will now be linked. So, any sounds that are in either of the linked columns will have their volume affected by changes to either column control.
-   **Extra Column / Add Column**: You can add as many extra columns to the sound mixer as required by clicking the large button to the right of the mixer. Each extra column will be added to he right-most column and can then be linked the previous one, and you can add sounds or audio groups as you would normally. If you need to remove a column from the mixer, then you can find the **Remove Sound Group** button ![Mixer Close SOund Icon](../assets/Images/Icons/Mixer_CloseColumn.png) found beside the Audio Group drop down menu.