---
title: "zip_create"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/File_Handling/Encoding_And_Hashing/zip_create.htm"
converted: "2025-09-14T03:59:56.004Z"
---

# zip\_create

This function creates a new ZIP file and returns its reference. This ZIP file is stored in memory, where you can add files to it using [zip\_add\_file](zip_add_file.md), and save it to disk using [zip\_save](zip_save.md).

Files added to a ZIP file are always compressed at the maximum compression level.

The ZIP file is automatically garbage-collected when it's no longer referenced. As long as it is referenced, it will continue to exist in memory and files can be added to it at any time, even after [zip\_save](zip_save.md) is called on it. However you can't add files into the ZIP while it's in the middle of being saved to disk.

NOTE This functionality is not available for the HTML5 target platform.

#### Syntax:

zip\_create();

#### Returns:

[ZIP File](zip_create.md)

#### Example:

var \_zip = zip\_create();

zip\_add\_file(\_zip, "new.txt", "new.txt");
zip\_add\_file(\_zip, "sounds/snd\_attack\_arc\_01.wav", "snd\_attack\_arc\_01.wav");

zip\_save(\_zip, "upload.zip");

This creates a new ZIP file, adds two files to it (with the second file in a subdirectory called sounds/) and then saves the ZIP to disk as upload.zip.