---
title: "file_bin_position"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/File_Handling/Binary_Files/file_bin_position.htm"
converted: "2025-09-14T03:59:55.652Z"
---

# file\_bin\_position

This function will returns the current position in bytes, where 0 is the first position, of the file with the given file id. You supply the file ID value, as returned by the function [file\_bin\_open()](file_bin_open.md).

**NOTE**: These functions **do not** work when the target module is HTML5.

#### Syntax:

file\_bin\_position(binfile);

| Argument | Type | Description |
| --- | --- | --- |
| binfile | Binary File ID | The ID of the file to get the position in. |

#### Returns:

[Real](../../../GML_Overview/Data_Types.md)

#### Example:

pos = file\_bin\_position(file);

This would store the current position in the variable "pos".