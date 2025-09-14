---
title: "File Handling"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/File_Handling/File_Handling.htm"
converted: "2025-09-14T03:59:56.186Z"
---

# File Handling

At some point while creating your game it will be necessary to store information externally and be able to retrieve this information. For example, you may wish to store login details, or hi-scores, or maybe the progression of the player through your levels. Whatever the reason, you will need to know how to use the different file functions that are available to you when working with GameMaker.

It is very important to realise that GameMaker is **Sandboxed** by default, meaning that there are a number of limits and minor complications when using the file system functions that are available, and it is worth noting too that the file system will work slightly differently depending on the platform you are targeting. For more information this, please see the following section:

-   [The File System](../../../Additional_Information/The_File_System.md)

You can turn off sandboxing on the desktop targets (Windows, macOS and Ubuntu (Linux)) from the Game Options for the chosen platform, meaning that you can then save and load from anywhere, within the limits of the OS permissions.

If you have been granted permission by Steam to use their dedicated API with your game, you will find that there is also a new set of file functions available to you. These are explained in the [Steam API](../Steam/Steam.md) section of this manual.

Finally, you should also note that there are some distinct differences between certain target platforms which would be taken into account when using the file functions. These are:

-   On iOS, if you are loading an included file from a folder, i.e. with a path something like "Backgrounds/background1.png", you do not _need_ to include the folder as part of the path and simply supplying the file name ("background1.png") is sufficient. However you are free to include the path, for example, if you have a file with the same name but in different directories. On all other platforms you must supply the folder(s) as part of the path to the file.
-   On macOS and Ubuntu, filenames and paths are case sensitive on these platforms, and so to prevent any potential issues, GameMaker will automatically make all names/paths use lower case by default.
-   On HTML5, saving and loading to and from **local storage** will work as explained within the different function pages, however if you are loading a file from a server, you **must only use the function [buffer\_load\_async()](../Buffers/buffer_load_async.md)** as loading synchronously has been deprecated on most browsers and will eventually be obsoleted. Also note that you cannot create or destroy directories in the browser local storage.

Information on the different file functions can be found in the following pages:

-   [File System](File_System/File_System.md)
-   [Ini Files](Ini_Files/Ini_Files.md)
-   [Text Files](Text_Files/Text_Files.md)
-   [Binary Files](Binary_Files/Binary_Files.md)
-   [File Directories](File_Directories/File_Directories.md)

GameMaker also includes a number of functions for encoding and hashing files and data, which you can find here:

-   [Encoding And Hashing](Encoding_And_Hashing/Encoding_And_Hashing.md)

Also note that there are some basic file functions for saving games available from the following pages (be aware that these functions are designed for beginners to get a basic save system up and running as quickly as possible, but for more complex projects, you should create your own save system using the functions listed in the sections above):

-   [game\_load](../General_Game_Control/game_load.md)
-   [game\_load\_buffer](../General_Game_Control/game_load_buffer.md)
-   [game\_save](../../../../../../GameMaker_Language/GML_Reference/General_Game_Control/game_save.md)
-   [game\_save\_buffer](../General_Game_Control/game_save_buffer.md)

Finally you can find more advanced [buffer](../Buffers/Buffers.md) functions that can be used for loading and saving data on the following pages:

-   [buffer\_save](../../../../../../GameMaker_Language/GML_Reference/Buffers/buffer_save.md)
-   [buffer\_save\_ext](../Buffers/buffer_save_ext.md)
-   [buffer\_save\_async](../Buffers/buffer_save_async.md)
-   [buffer\_load](../Buffers/buffer_load.md)
-   [buffer\_load\_ext](../Buffers/buffer_load_ext.md)
-   [buffer\_load\_async](../Buffers/buffer_load_async.md)
-   [buffer\_load\_partial](../Buffers/buffer_load_partial.md)
-   [buffer\_async\_group\_begin](../Buffers/buffer_async_group_begin.md)
-   [buffer\_async\_group\_option](../Buffers/buffer_async_group_option.md)
-   [buffer\_async\_group\_end](../Buffers/buffer_async_group_end.md)