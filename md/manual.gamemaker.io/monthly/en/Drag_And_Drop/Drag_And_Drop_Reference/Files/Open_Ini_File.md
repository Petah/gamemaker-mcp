---
title: "Open Ini File"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Files/Open_Ini_File.htm"
converted: "2025-09-14T03:59:25.541Z"
---

# ![Open Ini File Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Files/i_Files_Open_Ini_File.png) Open Ini File

With this action you can open an Ini file for reading and/or writing. If the Ini file does not exist at the location you are checking, GameMaker may create one, but _only_ if you write data to it. If you have only read information from the Ini file, then the default values for the read function will be returned, but the Ini file will not actually be created.

Please note that you can only have _one Ini file open at any one time_ and remember to use [Close Ini File](Close_Ini_File.md) once you're finished reading/writing from the Ini file as the information is not actually stored to disk until then (it is stored in memory until the file is closed).

#### Action Syntax:

![Open Ini File Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Files/a_Files_Open_Ini_File.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| Filename | The name - as a string and with the .ini extension - of the file to open |

#### Example:

![Open Ini File Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Files/e_Files_Open_Ini_File.png)The above action block code will open an ini file for use, then get the value associated with the "name" key under the "player" header. If the name returned matches the default name value (ie: the file, section or key does _not_ exist) then the file has a global variable written to it before being closed (and writing the new data to disk).