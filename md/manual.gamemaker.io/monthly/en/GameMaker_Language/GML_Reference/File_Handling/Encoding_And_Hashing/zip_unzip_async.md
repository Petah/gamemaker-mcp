---
title: "zip_unzip_async"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/File_Handling/Encoding_And_Hashing/zip_unzip_async.htm"
converted: "2025-09-14T03:59:56.054Z"
---

# zip\_unzip\_async

The function is the asynchronous equivalent of [zip\_unzip](zip_unzip.md). It takes a path to a ZIP file, and the target directory where it should be extracted.

If the call is successful, a request ID is returned, and later the Async [Save / Load](../../../../The_Asset_Editors/Object_Properties/Async_Events/Save_Load.md) event is triggered where this ID can be checked. The async\_load map in that event will contain the following keys:

-   "id": The request ID as returned by the original function call
-   "status": 0 if the ZIP extracted successfully, \-1 if it failed

This function will trigger a fatal error if it's called between [buffer\_async\_group\_begin](../../Buffers/buffer_async_group_begin.md) and [buffer\_async\_group\_end](../../Buffers/buffer_async_group_end.md) calls.

Please read the [zip\_unzip](zip_unzip.md) page for file system limitations.

NOTE This functionality is not available for the HTML5 target platform.

#### Syntax:

zip\_unzip\_async(zip\_file, target\_directory);

| Argument | Type | Description |
| --- | --- | --- |
| zip_file | String | The zip file to open |
| target_directory | String | The target directory to extract the files to |

#### Returns:

[Real](../../../GML_Overview/Data_Types.md)

#### Example:

level\_data\_request = zip\_unzip\_async("/downloads/level\_data.zip", working\_directory + "extracted/");

Async Save/Load event

var \_id = async\_load\[? "id"\];

if (\_id == level\_data\_request)
{
    var \_status = async\_load\[? "status"\];

    if (\_status < 0)
    {
        show\_debug\_message("ZIP file extraction failed.");
    }
}

The above code attempts to extract a ZIP file into the working directory. In the Async Save/Load event, it checks the status of that request, and prints a message to the output log if it failed.