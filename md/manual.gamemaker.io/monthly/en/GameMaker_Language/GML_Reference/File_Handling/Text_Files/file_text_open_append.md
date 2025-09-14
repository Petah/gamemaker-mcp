---
title: "file_text_open_append"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/File_Handling/Text_Files/file_text_open_append.htm"
converted: "2025-09-14T03:59:56.767Z"
---

# file\_text\_open\_append

This function opens the text file with the indicated filename for _writing_ (if the file does not exist, it is created), returning the unique _id_ of the file that which should be stored in a variable as it will be used for all further actions to do with that file. The position within the file for writing to is set to the last line of text that the file contains, so any existing data is not overwritten.

In the case of an error, the function will return -1. However, in some cases where the file could not be loaded (like an invalid filename being passed), the function may still return a file ID, in which case the return value of the [file closing](file_text_close.md) function will be false.

**NOTE** You can only have a maximum of 32 files open at any one time. You should also **always** close files when finished as this writes the information and frees the memory associated with the file.

**WARNING** This may not work as you expect due to GameMaker being sandboxed! Please see the section on [The File System](../../../../Additional_Information/The_File_System.md) for more information.

#### Syntax:

file\_text\_open\_append(fname);

| Argument | Type | Description |
| --- | --- | --- |
| fname | String | The name of the file to append to. |

#### Returns:

[Text File ID](file_text_open_read.md) or -1

#### Example:

file = file\_text\_open\_append(working\_directory + "save.txt");

This would open "save.txt" from the same directory as the game and store the file id in the variable "file".