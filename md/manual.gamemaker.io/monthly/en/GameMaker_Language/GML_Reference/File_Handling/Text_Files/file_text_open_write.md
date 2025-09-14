---
title: "file_text_open_write"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/File_Handling/Text_Files/file_text_open_write.htm"
converted: "2025-09-14T03:59:56.814Z"
---

# file\_text\_open\_write

This function opens the text file with the indicated filename for _writing only_ (if the file does not exist, it is created), returning the unique _id_ of the file that which should be stored in a variable as it will be used for all further actions to do with that file.

In the case of an error, the function will return -1. However, in some cases where the file could not be loaded (like an invalid filename being passed), the function may still return a file ID, in which case the return value of the [file closing](file_text_close.md) function will be false.

If the file already exists, using this function will cause it to be overwritten when data is saved. If you want to add data to a file while keeping its existing contents intact, use [file\_text\_open\_append()](file_text_open_append.md).

NOTE You can only have a maximum of 32 files open at any one time. You should also **always** close files when finished as this writes the information and frees the memory associated with the file.

**WARNING** This may not work as you expect due to GameMaker being sandboxed! Please see the section on [The File System](../../../../Additional_Information/The_File_System.md) for more information.

#### Syntax:

file\_text\_open\_write(fname);

| Argument | Type | Description |
| --- | --- | --- |
| fname | String | The name of the file to write to. |

#### Returns:

[Text File ID](file_text_open_read.md) or -1

#### Example:

var file;
file = file\_text\_open\_write(working\_directory + "level.txt");
file\_text\_write\_string(file, level\_data);
file\_text\_close(file);

The above code will open the file "level.txt" for writing and then write the string stored in the variable "level\_data" before finally closing the file again.