---
title: "Binary Files"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/File_Handling/Binary_Files/Binary_Files.htm"
converted: "2025-09-14T03:59:55.606Z"
---

# Binary Files

In rare situations you might need to read data from binary files. These functions can be used for that purpose, although in general, we'd recommend that you use the dedicated [buffer functions](../../Buffers/Buffers.md) to create, save and load binary data rather than these functions.

NOTE These functions **do not** work when the target module is HTML5.

The following low-level routines exist for this:

-   [file\_bin\_open](file_bin_open.md)
-   [file\_bin\_rewrite](file_bin_rewrite.md)
-   [file\_bin\_close](file_bin_close.md)
-   [file\_bin\_size](file_bin_size.md)
-   [file\_bin\_position](file_bin_position.md)
-   [file\_bin\_seek](file_bin_seek.md)
-   [file\_bin\_write\_byte](file_bin_write_byte.md)
-   [file\_bin\_read\_byte](file_bin_read_byte.md)