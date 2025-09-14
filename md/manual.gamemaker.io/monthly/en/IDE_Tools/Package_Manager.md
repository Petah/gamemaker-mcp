---
title: "Package Manager"
source: "manual.gamemaker.io/monthly/en/IDE_Tools/Package_Manager.htm"
converted: "2025-09-14T04:00:12.358Z"
---

# Package Manager

![](../assets/Images/IDE%20Tools/PackageManager_Main.png)

The Package Manager lets you install packages that GameMaker can use for the IDE and during your game's compilation. Currently you can use this to install latest versions of Localisation plugins and the [Project Tool](Project_Tool.md).

The list on the left will show you all packages from the selected source, and clicking on a package will show its information on the right, where you can choose a version for the package and install it.

In the top-left corner you can search for a package, and in the top-right corner you can change the source for the packages from a drop-down menu.

### Package Sources

A package source is a URL to a remote registry where packages are stored. Selecting a source will change what packages you see listed in the Package Manager, depending not only on the URL of the registry but also on the scopes of that source, which acts as a filter, so only those packages matching the scopes are shown.

You can click on ![](../assets/Images/Icons/Icon_AddArgument.png) next to the source drop-down to edit the list, which will show the following menu:

![](../assets/Images/IDE%20Tools/PackageManager_Sources.png)

This shows all the currently available package sources and you can click on a source to edit its details or remove it. You can click on the ![](../assets/Images/Icons/Icon_AddArgument.png) button to add a new source.

For each source you can define its name in the list, its URL, its scopes, a username/password and the install subdirectory (under the [Package Manager path](../Setting_Up_And_Version_Information/IDE_Preferences/Package_Manager_Preferences.md)). You can also force all packages to be visible if the registry contains any hidden packages.