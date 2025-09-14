---
title: "Setting Up The Git Plugin"
source: "manual.gamemaker.io/monthly/en/IDE_Tools/Source_Control/Setting_Up_Git_Plugin.htm"
converted: "2025-09-14T04:00:12.503Z"
---

# Setting Up The Git Plugin

Before we can use the Git plugin, we need to set up the Git executable to use by going into the [Plugins - Source Control (Git)](../../Setting_Up_And_Version_Information/IDE_Preferences/Plugin_Preferences.md) section of the [Preferences](../../Setting_Up_And_Version_Information/IDE_Preferences.md):

![Plugins Git SCM Preferences](../../assets/Images/Setup_And_Version/Preferences/Plugins_Git_Prefs.png)

The Git executable path should be auto-filled if it's found by GameMaker, however if the field is empty, you can click on the ![](../../assets/Images/Icons/Icon_Browse.png) button and manually select the git.exe file included (on Windows) in the cmd folder of your Git installation, which is usually inside C:\\Program Files\\Git\\.

For the rest of the Git options, see the [Plugin Preferences](../../Setting_Up_And_Version_Information/IDE_Preferences/Plugin_Preferences.md) page.

Before you can use Source Control for your project, you need to go into the [Game Options](../../Settings/Game_Options.md) and enable Source Control:

![Enable Source Control](../../assets/Images/IDE%20Tools/SCM_EnableSourceControl.png)

NOTE If any source control actions fail on macOS, run xcode-select --install in the Terminal.