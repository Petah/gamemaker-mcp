---
title: "file_bin_write_byte"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/File_Handling/Binary_Files/file_bin_write_byte.htm"
converted: "2025-09-14T03:59:55.727Z"
---

# file\_bin\_write\_byte

This function will write a byte of data to the file identified by the file ID at the current write position. You supply the file ID value, as returned by the function [file\_bin\_open()](file_bin_open.md) and the byte of data to write.

**NOTE**: These functions **do not** work when the target module is HTML5.

#### Syntax:

file\_bin\_write\_byte(binfile, byte);

| Argument | Type | Description |
| --- | --- | --- |
| binfile | Binary File ID | The ID of the file to write to. |
| byte | Real | The data to write. |

#### Returns:

[Real](../../../GML_Overview/Data_Types.md)

#### Example:

file\_bin\_write\_byte(file, data);

This would write a byte to the selected file.