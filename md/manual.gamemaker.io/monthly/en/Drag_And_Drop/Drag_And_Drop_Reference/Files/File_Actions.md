---
title: "File Actions"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Files/File_Actions.htm"
converted: "2025-09-14T03:59:25.489Z"
---

# Files Action Library

![](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Files/Lib_Files.png)

The **File Actions** deal with two different file types - Buffer files and Ini files - and also have certain generic file actions to rename or copy existing files.

**Buffer files** are created by saving out the data from a buffer that you have previously created and this data can then be loaded into a buffer again at any time in the future. You can find out more information about buffers here: [Buffer Actions](../Buffers/Buffer_Actions.md).

**Ini files** are small, lightweight files which are compatible with most platforms. They are ideal for storing small pieces of information, like interface preferences, local high scores, level data etc... and are very easy to use. Ini files don't have to have been created previously to use these actions, and you can read from a non-existent Ini file and you'll simply get a default return value (which you specify), however we recommend that you create at least a "base" ini file for opening and modifying before using the actions. This base ini file can be created by simply calling the [Open Ini File](Open_Ini_File.md) action followed by the [Close Ini File](Close_Ini_File.md), since closing the file will write it to the disk, or you can include one in the [Included Files](../../../Settings/Included_Files.md) of the Asset Browser. If you are using a file included in the Asset Browser as your base Ini, you should also read the section of the manual about [how the File System works](../../../Additional_Information/The_File_System.md).

The following actions exist for working with files:

|  | Load Buffer |
| --- | --- |
|  | Save Buffer |
|  | Rename File |
|  | Copy File |
|  | Delete File |
|  | Open Ini File |
|  | Close Ini File |
|  | Write To Ini File |
|  | Read Ini File |
|  | If File Exists |