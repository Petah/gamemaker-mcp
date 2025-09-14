---
title: "File System"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/File_Handling/File_System/File_System.htm"
converted: "2025-09-14T03:59:56.202Z"
---

# File System

GameMaker has a number of functions that enable you to manipulate files of all types in different ways. This page lists the various functions available for you to use.

## Function Reference

### General

-   [file\_exists](file_exists.md)
-   [file\_attributes](file_attributes.md)

### File Manipulation

-   [file\_delete](file_delete.md)
-   [file\_rename](file_rename.md)
-   [file\_copy](file_copy.md)

### File Find

-   [file\_find\_first](file_find_first.md)
-   [file\_find\_next](file_find_next.md)
-   [file\_find\_close](file_find_close.md)

### Pathname Manipulation

NOTE These functions do not work on the actual files! They only deal with the strings related to the different path elements and should be used in conjunction with the other file functions.

-   [filename\_name](filename_name.md)
-   [filename\_path](filename_path.md)
-   [filename\_dir](filename_dir.md)
-   [filename\_drive](filename_drive.md)
-   [filename\_ext](filename_ext.md)
-   [filename\_change\_ext](filename_change_ext.md)

### File Dialogs

These are functions for getting filenames that can be used for loading and saving files with file-type filters. They will open an explorer window, and therefore cause the game to lose focus. This means that any input the game is depending on may not be correctly registered, and as such we recommend that (if using these functions in a keyboard event) you use the key _up_ event and not the pressed or down events.

NOTE These functions are **Windows** and **macOS** only.

WARNING These functions may not work as you expect due to GameMaker being sandboxed! Please see the section on [The File System](../../../../Additional_Information/The_File_System.md) for more information.

-   [get\_open\_filename](get_open_filename.md)
-   [get\_open\_filename\_ext](get_open_filename_ext.md)
-   [get\_save\_filename](get_save_filename.md)
-   [get\_save\_filename\_ext](get_save_filename_ext.md)