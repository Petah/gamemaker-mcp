---
title: "Confirm Dialogs"
source: "manual.gamemaker.io/monthly/en/Setting_Up_And_Version_Information/IDE_Preferences/General/Confirm_Dialogs.htm"
converted: "2025-09-14T04:00:13.436Z"
---

# Confirm Dialog Preferences

![Confirm Dialog Prefs](../../../assets/Images/Setup_And_Version/Preferences/General_Confirm_Prefs.png)

The Confirm Dialogue preferences deal with some of the general confirmation pop-ups that will appear when performing certain actions in the GameMaker IDE. The options are:

-   **Automatic response to closing a workspace via keyboard shortcut**: The keyboard shortcut mentioned above can be used to close any open tab, but sometimes you may accidentally close an empty tab that you require. To prevent this you can set this option to "Show message" (the default option) to ask if you really want to close that empty tab. The other settings are "No", to simply do nothing if the shortcut is used, or "Okay" to close the tab without any message.
-   **Automatic response to restarting a running build**: When you restart a build and another previous one is still running, you will be asked whether you want to stop the current build first. Un checking this message will suppress that message and force GameMaker to assume you had clicked "Okay" as a response. This option is set to "Show Message" by default.
-   **Automatic response to warning when attempting to debug YYC**: The YYC target compiles to native code and as such cannot be debugged using the built-in debugger. When you try to use the debugger on the YYC target, you will get a warning informing you of this, and the fact that the project will be compiled using the VM instead. This option is set to "Show Message" by default, but setting it to "OK" will suppress this warning.
-   **Automatic response to resetting the project layout**: When you select to reset the project layout (from the [Layouts Menu](../../../IDE_Navigation/Menus/The_Layouts_Menu.md)) you will, by default, be shown a warning message about how this will close any open resource windows. However you can suppress this message and automatically reset the layout by selecting "Okay", or have it do nothing by selecting "No". The default value is to have "Show Message".