---
title: "ini_write_string"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/File_Handling/Ini_Files/ini_write_string.htm"
converted: "2025-09-14T03:59:56.692Z"
---

# ini\_write\_string

You can use this function to write a string (text) to an ini data file. Ini Files are split into **sections** and then each section is subsequently split into **key** - **value** pairs. So a typical ini file would look something like this:

![Ini file contents example](../../../../assets/Images/Scripting_Reference/GML/Reference/Files/IniExample.png)It is worth noting that using quotes and escape characters when writing ini strings may cause issues when later reading back the data as it may be prematurely truncated. For example, writing this will be an issue:

ini\_write\_string("test2", "section", "hello \\"Fritz\\"");

#### Syntax:

ini\_write\_string(section, key, value);

| Argument | Type | Description |
| --- | --- | --- |
| section | String | The section of the .ini to write to. |
| key | String | The key within the relevant section of the .ini to write to. |
| value | String | The string to write to the relevant destination. |

#### Returns:

N/A

#### Example:

ini\_open("savedata.ini");
ini\_write\_string("Save", "Player", global.Name);
ini\_close();

The above code opens an ini file for reading and writing, then writes the string stored in the global variable "Name" to the section "Save" with the key "Player" before closing the file again.