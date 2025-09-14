---
title: "INI Files"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/File_Handling/Ini_Files/Ini_Files.htm"
converted: "2025-09-14T03:59:56.519Z"
---

# INI Files

INI files are small, lightweight files which are compatible with most platforms. They are ideal for storing _small_ pieces of information, like interface preferences, local high scores, level data, etc., and as such are a great and easy way for you to start saving information from your games. If you are looking for more advanced ways to save information to files, you may wish to look at some of the other file functions like [Text Files](../Text_Files/Text_Files.md), [Binary Files](../Binary_Files/Binary_Files.md) and [Buffers](../../Buffers/Buffers.md).

IMPORTANT All GameMaker projects have a file called "options.ini", so you **cannot** name any file with that name (you will get a UID failure when you try to compile your game project).

## Function Reference

### Opening & Closing

-   [ini\_open](ini_open.md)
-   [ini\_open\_from\_string](ini_open_from_string.md)
-   [ini\_close](ini_close.md)

### Reading & Writing

-   [ini\_write\_real](ini_write_real.md)
-   [ini\_write\_string](ini_write_string.md)
-   [ini\_read\_real](ini_read_real.md)
-   [ini\_read\_string](ini_read_string.md)
-   [ini\_key\_exists](ini_key_exists.md)
-   [ini\_section\_exists](ini_section_exists.md)
-   [ini\_key\_delete](ini_key_delete.md)
-   [ini\_section\_delete](ini_section_delete.md)