---
title: "Read Ini File"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Files/Read_Ini_File.htm"
converted: "2025-09-14T03:59:25.561Z"
---

# ![Read Ini File Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Files/i_Files_Read_Ini_File.png) Read Ini File

With this action you can read a piece of data from an Ini file. You must previously have opened the Ini file for reading/writing using the action [Open Ini File](Open_Ini_File.md), and then with this action you give the type of data to read (either a real number or a string enclosed in ""), as well as the section header and the key within that section to get the data from. You can also supply a default value which can be either a real number of a string, and the type should coincide with the "Type" set in the action. This default action will be returned by the action should any of the following occur:

-   The Ini file you have opened does not exist
-   The section header you reference does not exist
-   The key you are trying to get data from does not exist

Under any of the above circumstances, you will get the default value returned rather than a value from the Ini file. Whatever value is returned will be stored in the target variable that you specify, which can also be created at that moment if flagged as a temporary local variable.

**IMPORTANT!** trying to read data from an Ini file that has not been opened previously using the [Open Ini File](Open_Ini_File.md) action will cause a serious error and crash your game.

#### Action Syntax:

![Read Ini File Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Files/a_Files_Read_Ini_File.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| Type | The type of data to read, either a string (enclosed in quotes ""), or a real number |
| Section | The section of the Ini file to read from (as a string) |
| Key | The key within the section to read from (as a string) |
| Default | The default value to return should either the file, section or key not exist |
| Target | The target variable for holding the return value from the action |

#### Example:

![Read Ini File Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Files/e_Files_Read_Ini_File.png)The above action block code will open an Ini file for reading then use data read from it to set 3 different global variables before closing the file again.