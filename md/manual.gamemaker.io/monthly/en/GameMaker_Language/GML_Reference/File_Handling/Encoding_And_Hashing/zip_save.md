---
title: "zip_save"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/File_Handling/Encoding_And_Hashing/zip_save.htm"
converted: "2025-09-14T03:59:56.022Z"
---

# zip\_save

This function saves the ZIP file that you created with [zip\_create](zip_create.md) to the given file path.

If the call is successful, a request ID is returned, and later the Async [Save / Load](../../../../The_Asset_Editors/Object_Properties/Async_Events/Save_Load.md) event is triggered where this ID can be checked. In case of an error, a fatal error is thrown.

The async\_load map in the Save / Load event will contain the following keys:

-   "id": The request ID as returned by the original function call
-   "status": 0 if the ZIP extracted successfully, \-1 if it failed

NOTE This functionality is not available for the HTML5 target platform.

#### Syntax:

zip\_save(zip\_object, path);

| Argument | Type | Description |
| --- | --- | --- |
| zip_object | ZIP File | A ZIP file created with zip_create |
| path | String | The file path that the ZIP will be saved as |

#### Returns:

[Real](../../../GML_Overview/Data_Types.md)

#### Example:

var \_zip = zip\_create();

zip\_add\_file(\_zip, "new.txt", "new.txt");
zip\_add\_file(\_zip, "sounds/snd\_attack\_arc\_01.wav", "snd\_attack\_arc\_01.wav");

zip\_save(\_zip, "upload.zip");

This creates a new ZIP file, adds two files to it (with the second file in a subdirectory called sounds/) and then saves the ZIP to disk as upload.zip.