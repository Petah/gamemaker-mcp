---
title: "file_bin_rewrite"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/File_Handling/Binary_Files/file_bin_rewrite.htm"
converted: "2025-09-14T03:59:55.683Z"
---

# file\_bin\_rewrite

This function takes the filename handle as returned by the function [file\_bin\_open()](file_bin_open.md) and then rewrites the file, clearing it of all previous data to start writing from the beginning of the file.

**NOTE**: These functions **do not** work when the target module is HTML5.

#### Syntax:

file\_bin\_rewrite(binfile);

| Argument | Type | Description |
| --- | --- | --- |
| binfile | Binary File ID | The ID of the file to rewrite. |

#### Returns:

N/A

#### Example:

file = file\_bin\_open("myfile.bin", 2);
file\_bin\_rewrite(file);

This would open a file from the same directory as the game, and assign its index to the variable "file". It would then re-write the file (clearing it of data).