---
title: "Project Format"
source: "manual.gamemaker.io/monthly/en/Additional_Information/Project_Format.htm"
converted: "2025-09-14T03:59:22.879Z"
---

# Project Format

This page contains details on the project format used by GameMaker.

## Format Basics

### The YYP Project File

At the root is the main project file, with a \*.yyp extension. It describes the resources in the project and other metadata specific to it.

### The .resource\_order File

Next to it is another file with a \*.resource\_order extension. This file stores the order of groups and assets in [The Asset Browser](../Introduction/The_Asset_Browser.md) used when the filter is set to **Custom Order**.

NOTE GameMaker will add this file to .gitignore by default if **Add skeleton .git defaults to new/imported projects** is enabled under **Source Control (Git)** in the [Plugin Preferences](../Setting_Up_And_Version_Information/IDE_Preferences/Plugin_Preferences.md).

### YY Files

These are resource files; they store information on individual assets in a GameMaker project. They describe the data for the resource and any other files belonging to the resource (e.g. scripts, shaders, images and audio files). These data are stored in a JSON-like format.

### .gitignore and .gitattributes Files

These two files affect how a GameMaker project is treated by Git. They are automatically added to new and/or imported projects when **Add skeleton .git defaults to new/imported projects** under **Source Control (Git)** in the [Plugin Preferences](../Setting_Up_And_Version_Information/IDE_Preferences/Plugin_Preferences.md) is enabled. They're also added to new projects that you create from local asset packages. Alternatively, you can disable the settings and add and modify these files yourself instead.

NOTE These files are only used with source control, which you can enable in the [Game Options](../Settings/Game_Options.md).

The .gitignore file is used to make Git ignore certain patterns of files. The default .gitignore file added by GameMaker ignores a few files and file extensions:

-   Files added to directories by Windows and macOS that can be ignored (e.g. thumbnails).
-   The .resource\_order file used by GameMaker itself, used as more of a user-specific way of ordering the asset tree. This file doesn't have to be included in source control unless explicitly wanted.

The .gitattributes file controls how Git handles certain files. The default .gitattributes file added by GameMaker introduces the following changes:

-   GameMaker's .yy files as marked as _linguist-generated_, which prevents GitHub from identifying these as the wrong language.
-   Line endings are forced to be LF (_line feed_) for metadata files to make merging easier across different platforms, as Windows, macOS and Linux all use different conventions to represent a line ending.

## YYZ Files

This type of file stores a compressed project export, created via the **Export Project** > **YYZ** option in [The File Menu](../IDE_Navigation/Menus/The_File_Menu.md). Depending on the version of GameMaker, the compression method used may vary.

## Local Asset Packages

These are created and imported from (part of) a project's contents using **Create Local Package** and **Import Local Package** respectively in [The Tools Menu](../IDE_Navigation/Menus/The_Tools_Menu.md).

The following is an overview of the file formats used by different GameMaker versions:

-   YYMPS - Compressed Marketplace Asset 2.3+; a file containing a marketplace asset stored in a compressed manner.
-   YYMP - Compressed Marketplace Asset < 2.3; older formatted marketplace asset stored in a compressed manner. These will be upgraded on import.
-   GMEZ - Compressed Marketplace Asset 1.x; older again formatted marketplace asset. These will be upgraded on import.
-   GMX - Resource File 1.x; older formatted resource file. project.gmx are project files and will be upgraded on import. Importing GMX resources as standalone is not supported.