---
title: "file_bin_read_byte"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/File_Handling/Binary_Files/file_bin_read_byte.htm"
converted: "2025-09-14T03:59:55.670Z"
---

# file\_bin\_read\_byte

This function will return a byte of data from current position within the file with the given file ID. You supply the file ID value, as returned by the function [file\_bin\_open()](file_bin_open.md).

**NOTE**: These functions **do not** work when the target module is HTML5.

#### Syntax:

file\_bin\_read\_byte(binfile);

| Argument | Type | Description |
| --- | --- | --- |
| binfile | Binary File ID | The ID of the file to get the data from. |

#### Returns:

[Real](../../../GML_Overview/Data_Types.md)

#### Example:

file = file\_bin\_open("myfile.bin", 2);
data = file\_bin\_read\_byte(file);
file\_bin\_close(file);

This would open a file from the same directory as the game, and get a byte of data from it before closing it again.