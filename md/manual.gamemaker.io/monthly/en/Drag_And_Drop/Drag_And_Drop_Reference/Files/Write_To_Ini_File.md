---
title: "Write To Ini File"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Files/Write_To_Ini_File.htm"
converted: "2025-09-14T03:59:25.612Z"
---

# ![Write To Ini File Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Files/i_Files_Write_To_Ini_File.png) Write To Ini File

With this action you can write a numeric value or a string to an Ini file. You must previously have opened the Ini file for reading/writing using the action [Open Ini File](Open_Ini_File.md), and then with this action you give the type of data to write (either a real number or a string enclosed in ""), as well as the section header, the key within that section and the value for the key. To help visualise the structure of an Ini file, see this image:

![Example Ini File Contents](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Files/Ini_Example.png)As you can see, Ini files are split into sections - where each section has its own header name - and then each section is subsequently split into various key/value pairs (much like a [Map Data Structure](../Data_Structures/Create_Map.md)). Note that you can create Ini files yourself using any text processing software (like Notepad on Windows) and then include them as an [Included File](../../../Settings/Included_Files.md) to read from and write to in your game.

**IMPORTANT!** Trying to read data from an Ini file that has not been opened previously using the [Open Ini File](Open_Ini_File.md) action will cause a serious error and crash your game.

**IMPORTANT!** This only writes the data to memory and to finally write the data to the file on disk, you **must call [Close Ini File](Close_Ini_File.md)**, otherwise the data will not be saved.

#### Action Syntax:

![Write To Ini Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Files/a_Files_Write_To_Ini_File.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| Type | The type of data to write, either a string (enclosed in quotes ""), or a real number |
| Section | The section of the Ini file to write to (as a string) |
| Key | The key within the section to write to (as a string) |
| Value | The value to write, either a string or a real number based on the "type" argument (above) |

#### Example:

![Write To Ini Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Files/e_Files_Write_To_Ini_File.png)The above action block code will open an ini then write data to three different keys under the same section header (one string and two real numbers) before closing the ini file again (thus writing the data to disk).