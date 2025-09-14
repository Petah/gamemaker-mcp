---
title: "Included Files"
source: "manual.gamemaker.io/monthly/en/Settings/Included_Files.htm"
converted: "2025-09-14T04:00:14.616Z"
---

# Included Files

GameMaker is not just limited to the assets that you add in [The Asset Browser](../Introduction/The_Asset_Browser.md). You can also add files to the project as **Included Files** so that they can then be accessed while the game is running. These are simply files that are _included_ with your game package, so you can do with them what you wish.

What kinds of files you add will depend on what you want to do, but things like JSON files for data and configuration, sprites and background images, or spreadsheets are commonly used as Included Files.

TIP You can also add project files from other software as included files to your GameMaker project and set them to not export to any platforms (so they won't be included with builds of your game). The project files can be opened directly from within the Included Files window and are included when you export your project (see [The File Menu](../IDE_Navigation/Menus/The_File_Menu.md)).

## Adding Included Files

The simplest way to add an Included File is to drag it from your Explorer/Finder into the IDE. You will be asked to confirm whether the dragged file should be added to **Included Files**. After pressing **Yes**, the **Included Files** window will open, containing the file you just added.

![](../assets/Images/Settings/Included_Files_Popup.png)

## Included Files Window

Open [The Asset Browser](../Introduction/The_Asset_Browser.md)'s **Extras** menu ![Extras Menu Icon](../assets/Images/Icons/Icon_AssetMenu.png) (Fig. 1), to manually open the **Included Files** window (Fig. 2):

![Open The Included Files Editor](../assets/Images/Settings/Included_Files_Editor_Open.png)

Fig. 1

![The Included Files Editor](../assets/Images/Settings/Included_Files.png)

Fig. 2

This window only shows you the Included Files that are present in your project. To re-arrange or rename your files, you will need to edit the actual directory where these files are stored.

Clicking on **Open In Explorer/Finder** will open the datafiles folder in your project directory, which contains all the included files. You can add and remove files in this directory as you wish, and the interface in Included Files will automatically update to reflect the structure in your datafiles folder. Click the refresh button ![](../assets/Images/Settings/Included_Files_Refresh_Button.png) to instantly refresh the directory's contents.

![Included Files Example](../assets/Images/Settings/Included_Files_Example.png)

## Included File Properties

Once you have added files to the editor, you can double-click ![LMB Icon](../assets/Images/Icons/Icon_LMB.png) on them to open up the **Included File Properties** in [The Inspector](../IDE_Tools/The_Inspector.md):

![Included Files Properties](../assets/Images/Settings/Included_Files_Properties.png)This window shows the name of the file, its size on disk, and also the platforms that it should be exported to when you compile/test your game. You have buttons to select **All** or **None**, or you can go down the list and check/uncheck the targets that you want the file to be exported to.

NOTE The **Default option for opening included files** under [External Editors](../Setting_Up_And_Version_Information/IDE_Preferences/General/Paths.htm#external_editors) determines what action to use when a file is double-clicked ![LMB Icon](../assets/Images/Icons/Icon_LMB.png).

## Right-Click Menu

Right-clicking ![LMB Icon](../assets/Images/Icons/Icon_RMB.png) brings up the context menu:

![](../assets/Images/Settings/Included_Files_RMBMenu.png)

The following menu items are available anywhere you click:

-   **Expand All** - This expands all folders, showing all files.
-   **Collapse All** - This collapses all folders, hiding all files and only showing folders.
-   **Select All** - This selects all items and also makes them the current selection in [The Inspector](../IDE_Tools/The_Inspector.md), which can be useful if you e.g. want to change the platforms to export to for several files at once.

The following options are only shown when you right-click ![LMB Icon](../assets/Images/Icons/Icon_RMB.png) a file:

-   **Open in Code Editor 2** - Only displayed when the file is editable in the Code Editor 2, clicking this opens the file for editing. See [Code Editor 2 (Beta)](../The_Asset_Editors/The_Text_Editor.md) for a list of compatible file types. (This option is only shown when the new Code Editor 2 is enabled in the [Code Editor 2 Preferences](../Setting_Up_And_Version_Information/IDE_Preferences/Text_Editor_2_Preferences.md)).
-   **Open Properties** - This opens the properties of the file in [The Inspector](../IDE_Tools/The_Inspector.md).
-   **Open in External Editor** - This opens the file in an external editor based on its file extension, using the file associations set in the OS.

For further information on how Included Files are stored with your game and how they are accessed, please see [The File System](../Additional_Information/The_File_System.md).

IMPORTANT When including sound files, you should ensure that the files avoid names that clash with streaming sound assets. For example, a sound asset called "**main\_music**" will cause an Included File called "**main\_music.ogg**" to become undefined when the project runs. This is because streamed files are also stored outside of the main project bundle, so care must be taken in these situations.

You can also include DLL (on Windows) or DyLib (on macOS) files as Included Files and then create your own custom functions to deal with them using [external\_define](../GameMaker_Language/GML_Reference/OS_And_Compiler/external_define.md). These can then be used calling the [external\_call](../GameMaker_Language/GML_Reference/OS_And_Compiler/external_call.md) function.

NOTE Using Included Files to create extra functionality in this way is incompatible with the [Extension](../The_Asset_Editors/Extensions.md) system, as you cannot use use the external\_\* functions with files added in an extension. Extensions assets already have a method of adding constants and functions.