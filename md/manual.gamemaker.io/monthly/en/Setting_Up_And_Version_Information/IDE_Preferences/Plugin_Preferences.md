---
title: "Plugin Preferences"
source: "manual.gamemaker.io/monthly/en/Setting_Up_And_Version_Information/IDE_Preferences/Plugin_Preferences.htm"
converted: "2025-09-14T04:00:13.749Z"
---

# Plugin Preferences

The **Plugin Preferences** are used to control any extra plugins that have been added to the GameMaker IDE. By default this has one section dedicated to the **Source Control** plugin for integrating GameMaker projects with [Git](https://git-scm.com/).

[Project ToolProject Tool](Plugin_Preferences.htm#)

![Plugins Git SCM Preferences](../../assets/Images/Setup_And_Version/Preferences/Plugins_Project_Tool_Prefs.png)

This section contains the preferences related to [Project Tool](../../IDE_Tools/Project_Tool.md):

-   **Path to Project Tool**: Here you can specify an alternative path to Project Tool. This field is empty by default, which indicates that the version bundled with this release of the IDE is used. You should normally not need to change this. See [Project Tool Versions](../../IDE_Tools/Project_Tool.htm#project_tool_versions).

[Source Control (Git)Source Control (Git)](Plugin_Preferences.htm#)

![Plugins Git SCM Preferences](../../assets/Images/Setup_And_Version/Preferences/Plugins_Git_Prefs.png)This section deals with the preferences that are required to get the [Git SCM](../../IDE_Tools/Source_Control.md) plugin to work with GameMaker.

-   **Git executable path**: This is the location of the Git executable which GameMaker uses for all Source Control commands. This will be located in the cmd folder of your Git installation by default, as shown in the image above.

Below this you can set up the _Merge Tool_ and the _Diff Tool_ for Source Control with these settings (**optional**):

-   **Merge (Tool location)**: Here you specify the full file path to the Git merge tool.
-   ****Merge (Tool options)****: In this field you can add any extra commands to be run whenever you use the merge Tool.
-   ****Diff (Tool location)****: Here you specify the full file path to the Git diff tool.
-   ******Diff (Tool options)******: In this field you can add any extra commands to be run whenever you use the diff Tool.

Finally there are two more options that affect how Git is set up in new projects:

-   **Add skeleton .git defaults to new projects**: When this setting is enabled, GameMaker will add [.gitignore and .gitattributes Files](../../Additional_Information/Project_Format.htm#gitignore_and_gitattributes_files) to new projects that you create. It is enabled by default.
-   **Add skeleton .git defaults to imported projects**: When this setting is enabled, GameMaker will add [.gitignore and .gitattributes Files](../../Additional_Information/Project_Format.htm#gitignore_and_gitattributes_files) to projects that you import from a .yyz file. It is enabled by default.