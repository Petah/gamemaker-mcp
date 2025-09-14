---
title: "file_text_open_from_string"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/File_Handling/Text_Files/file_text_open_from_string.htm"
converted: "2025-09-14T03:59:56.781Z"
---

# file\_text\_open\_from\_string

This function will create a text file from a string and open it for reading, returning the file "handle" that should be used in all further file function calls to read from this file. Note that this file is temporary and _read only_, and as such it will be removed from memory the moment it is closed.

In the case of an error, the function will return -1. However, in some cases where the file could not be loaded (like an invalid filename being passed), the function may still return a file ID, in which case the return value of the [file closing](file_text_close.md) function will be false.

**NOTE** You can only have a maximum of 32 files open at any one time. You should also **always** close files when finished as this writes the information and frees the memory associated with the file.

**WARNING** This may not work as you expect due to GameMaker being sandboxed! Please see the section on [The File System](../../../../Additional_Information/The_File_System.md) for more information.

#### Syntax:

file\_text\_open\_from\_string(string);

| Argument | Type | Description |
| --- | --- | --- |
| string | String | The string to create the file from. |

#### Returns:

[Text File ID](file_text_open_read.md) or -1

#### Example:

file = file\_text\_open\_from\_string(reset\_str);

The above code takes the string stored in the variable "reset\_str" and uses it to create a read-only text file. The "handle" for this file is then stored in the variable "file" for all further file functions to use.