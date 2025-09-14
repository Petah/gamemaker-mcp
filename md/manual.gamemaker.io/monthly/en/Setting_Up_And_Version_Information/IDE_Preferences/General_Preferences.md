---
title: "General Preferences"
source: "manual.gamemaker.io/monthly/en/Setting_Up_And_Version_Information/IDE_Preferences/General_Preferences.htm"
converted: "2025-09-14T04:00:13.628Z"
---

# General Preferences

![General Preferences](../../assets/Images/Setup_And_Version/Preferences/General_Prefs.png)The **General Preferences** are used to define the general behaviour of the GameMaker IDE. The most general ones are listed on the main page while many others are split into multiple sub-categories, explained further down this page.

-   **IDE Font**: This option permits you to change the font used throughout the IDE. Default is **Open Sans**.
-   **IDE Fallback Font**: This option allows you to set a fallback font to use when the IDE font has missing characters. This can be useful if you're on a non-English platform where the font might have localised characters, but may be missing UTF-8 glyphs for them.
-   **IDE Language**: This option permits you to select the language for the IDE from the list of options supplied. Default is **English**.

    This will make use of the localisations bundled with the installed IDE version. You can install the latest localisations without having to update the IDE using the [Package Manager](../../IDE_Tools/Package_Manager.md).
-   **Maximum Framerate of the GameMaker Editor**: This option permits you to set the maximum framerate that the GameMaker IDE will update at, permitting you to set the framerate to match the update speed of your monitor. Default value is 60.
-   **IDE Skin**: Here you can select from the different skins that the IDE can use. By default GameMaker comes with two skins, one light and one dark, and the initial setup uses the **Dark** skin.
-   **Default Build Target**: This is the default build [target](../../Introduction/Compiling.md) to use for projects. The default is **GX.games**.
-   **Automatic Response to The System Font Changed Dialog**: This option permits you to set whether a confirmation message should be shown when a system font has been added, removed or edited. By default this is set to **Show Message**, but can be set to skip the message as if you'd clicked OK.
-   **Automatic Response to Exit Confirmation**: This option permits you to set whether a confirmation message should be shown when you exit GameMaker. By default this is set to **Show Message**, but can be set to skip the message as if you'd clicked OK.
-   **Enable notifications**: Checking this will enable the IDE to show notifications about new runtimes, etc. This is on by default.
-   **Notification timeout (ms)**: This sets the length of time (in milliseconds) that a notification is shown for. Default is 6000.
-   **Sign out on exit**: If this option is checked then the IDE will automatically log out the user session when GameMaker is closed. This is primarily aimed at Education users, as - when checked - this means that whenever the program shuts down the user would be logged out and so free up the session seat for other users to use. This is off by default.
-   **Disable IDE transition animations**: The GameMaker IDE has a number of animated transitions for things like opening windows, etc. However, they are not to everyone's taste and you may experience a performance boost if they are disabled on older or under-powered machines if they are disabled. You can disable them here, and they are on by default.
-   **Allow empty tabs to be closed via the keyboard shortcut**: You can close any open Tabs using the keyboard shortcut ![Icon CTRL](../../assets/Images/Icons/Icon_Ctrl.png) / ![Icon CMD](../../assets/Images/Icons/Icon_Cmd.png) + **W**, but if you disable this option that shortcut will no longer work. This is enabled by default.
-   **Open new assets for edit on dragging files into IDE**: Certain assets (like sprites or sounds) can be dragged onto the main Workspace in the GameMaker IDE and will be detected and added as a new asset in [The Asset Browser](../../Introduction/The_Asset_Browser.md). By default the corresponding asset editor will also be opened for editing when this happens, but un-checking this option will prevent the editors from being opened and you will be required to open them manually.
-   **Open new assets for edit on creation**: If this is checked, every time you create a new resource in [The Asset Browser](../../Introduction/The_Asset_Browser.md), the corresponding asset editor will be opened automatically. This is checked by default and un-checking it will mean that you have to manually open all newly created assets.
-   **Use US Date Format**: This setting changes the format used to display dates in the IDE. When enabled, dates are displayed as e.g. "Thursday, April 27, 2023", when disabled, dates are displayed as e.g. "27 April 2023" instead. By default this preference is unchecked.
-   **Automatically reload changed files**: If this is checked, the IDE will automatically scan and check files to see if any of them have been changed outside of GameMaker and reload them if they have.
-   **Case-Insensitive mode for project files (may affect performance)**: Intended to be used to avoid issues with filename case sensitivity on non-Windows devices (macOS and Linux). Such issues can happen when transferring projects from Windows to non-Windows systems, using Git with [ignore case](https://git-scm.com/docs/git-config#Documentation/git-config.txt-coreignoreCase) enabled (which you should try disabling first) and/or renaming files only to change the case. This is disabled by default as it's a performance overhead and should not be required outside of the aforementioned cases.
-   **Enable Verbose Logging**: This option enables verbose logging of network calls.
-   **Show Project Tool Output**: When this option is checked, the [Project Tool Output](../../IDE_Tools/Project_Tool.htm#project_tool_output) window will be shown when you convert projects with [Project Tool](../../IDE_Tools/Project_Tool.md).
-   **Enable VSync**: This option enables or disables vertical synchronisation within the IDE. VSync is enabled by default, though you can disable it using this setting if you're experiencing screen flickering with the IDE open. Note that any change to this setting requires a restart of the IDE.
-   **Enable DPI Override**: This option lets you override the default DPI setting with your own. You must first enable the option and then set either the **Raw DPi Override** value (the default value is 96) or set the **Percentage of the native DPi** (default value 100%), and once changed you will be prompted to restart the IDE, which may require you to save any work being done on the currently open project. Note that the DPi has a minimum percentage of 50% and a maximum of 500%, and if you you mouse over the information icon you can see the recommended maximum setting for the display being used:

    ![General DPi Override Recommendation](../../assets/Images/Setup_And_Version/Preferences/General_DPi_Override_Recomendation.png)Note that if you go above the recommended DPi setting for the monitor, you will be shown a notification that permits you to reset the DPI.

The options above are the main options available from the **General** preferences, but there are a number of extra options available to you in the sub-categories listed below:

-   [Background](General/Background.md)
-   [Compiling](General/Compiling.md)
-   [Confirm Dialogs](General/Confirm_Dialogs.md)
-   [Debugging](General/Debugging.md)
-   [File Watcher](General/File_Watcher.md)
-   [Go To](General/Go_To.md)
-   [GX.games Environments](General/GXgames_Environments.md)
-   [Help](General/Help.md)
-   [Input](General/Input.md)
-   [Output Windows](General/Output_Windows.md)
-   [Paths](General/Paths.md)
-   [Power Saving](General/Power_Saving.md)
-   [Recent Windows](General/Recent_Windows.md)
-   [Resources](General/Resources.md)
-   [Workspaces](General/Workspace.md)