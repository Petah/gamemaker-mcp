---
title: "zip_add_file"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/File_Handling/Encoding_And_Hashing/zip_add_file.htm"
converted: "2025-09-14T03:59:55.992Z"
---

# zip\_add\_file

This function is used to add a file into a ZIP file created with [zip\_create](zip_create.md).

If the call is successful, the function will return 0, otherwise it will throw a fatal error.

The src file is only loaded when [zip\_save](zip_save.md) is called later, so an invalid file will not throw an error during this call.

NOTE This functionality is not available for the HTML5 target platform.

#### Syntax:

zip\_add\_file(zip\_object, dest, src);

| Argument | Type | Description |
| --- | --- | --- |
| zip_object | ZIP File | A ZIP file created with zip_create |
| dest | String | The destination file name to be created in the ZIP. Can include directories. |
| src | String | The source file to be placed into the ZIP |

#### Returns:

[Real](../../../GML_Overview/Data_Types.md)

#### Example:

var \_zip = zip\_create();

zip\_add\_file(\_zip, "new.txt", "new.txt");
zip\_add\_file(\_zip, "sounds/snd\_attack\_arc\_01.wav", "snd\_attack\_arc\_01.wav");

zip\_save(\_zip, "upload.zip");

This creates a new ZIP file, adds two files to it (with the second file in a subdirectory called sounds/) and then saves the ZIP to disk as upload.zip.