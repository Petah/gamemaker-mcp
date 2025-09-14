---
title: "Project Tool"
source: "manual.gamemaker.io/monthly/en/IDE_Tools/Project_Tool.htm"
converted: "2025-09-14T04:00:12.394Z"
---

# Project Tool

The Project Tool is a built-in tool to convert projects between different versions of GameMaker.

It is used by the IDE internally to convert projects from older project formats to the current format and the other way round and can be accessed through [The Tools Menu](../IDE_Navigation/Menus/The_Tools_Menu.md) > **Project Tool** option.

NOTE See the [Project Format](../Additional_Information/Project_Format.md) page for details on the current project format.

## Tool Window

![Project Tool](../assets/Images/IDE%20Tools/Project_Tool.png)

The tool window contains the following fields:

-   **Source** - This field contains the path to the source project or package file to convert. Paste a valid file path here or click the ![](../assets/Images/IDE%20Tools/Project_Tool_Select_File.png) button to bring up a file selector.
-   **Destination** - This field contains the path to the destination project to create. Paste a valid path here or click the ![](../assets/Images/IDE%20Tools/Project_Tool_Select_File.png) button to bring up a file selector. This field can be empty when the source project is a .yyp file, in which case Project Tool does an in-place conversion (i.e. it converts the project in the source directory). It must be filled out, however, when the source project is a package file. Project Tool shows the following message if you attempt to convert a package with an empty destination path: ![No Destination Project Selected](../assets/Images/IDE%20Tools/Project_Tool_No_Destination_Selected.png)
-   **Project Format** - This drop-down list contains the available project formats that you can convert to. The following formats are available:
    -   **LTS22** - This is the project format used by the 2022.0 LTS release.
    -   **NOV23** - This is the project format used by the 2023.11 release.
    -   **DEFAULT** - This is the current default, versioned project format.
-   **Force VERS0 Conversion if required** - When this checkbox is enabled, Project Tool forces a conversion to the intermediary base version 0 format in a last attempt to fix any issues with your project. The VERS0 format is a format to facilitate conversion between the NOV23 format and the versioned DEFAULT format.

    WARNING You should be very careful with enabling this option, as it will make a best guess to missing fields and strip out any unknown data.
-   **Clean Conversion Folders** - When this checkbox is ticked, Project Tool cleans up the conversion folders after conversion. This is enabled by default.

## Project Tool Output

All Project Tool output is shown in the Project Tool Window that you can open manually through the **Project Tool Output** option of [The Windows Menu](../IDE_Navigation/Menus/The_Windows_Menu.md). It can also automatically be shown when Project Tool runs by enabling **Show Project Tool Output** in the [General Preferences](../Setting_Up_And_Version_Information/IDE_Preferences/General_Preferences.md).

![Project Tool Output](../assets/Images/IDE%20Tools/Project_Tool_Output.png)

## Project Tool Versions

Every IDE release comes bundled with a version of Project Tool. While it should normally not be needed, the version used can be changed to a different one by providing a different path under [Path to Project Tool](../Setting_Up_And_Version_Information/IDE_Preferences/Plugin_Preferences.htm#path_to_project_tool). The IDE will use the following version of Project Tool, in order of preference:

1.  The version of Project Tool in the location set in **Preferences** -> **General Settings** -> **Paths** -> **Path to Project Tool**
2.  Any version of Project Tool installed via the [Package Manager](Package_Manager.md) (in the location set in **Preferences** -> **Package Manager** -> **Packages Install Directory**)
3.  The Project Tool bundled with this IDE version