---
title: "The File System"
source: "manual.gamemaker.io/monthly/en/Additional_Information/The_File_System.htm"
converted: "2025-09-14T03:59:22.900Z"
---

# The File System

When using the [file system functions](../GameMaker_Language/GML_Reference/File_Handling/File_Handling.md) or [included files](../Settings/Included_Files.md) with GameMaker, it's important to know how the file system works and what things are going on behind the scenes. This section is designed to explain and clarify exactly _how_ things are stored, _where_ they are stored and what possible limits or workarounds there may be to this system.

The first thing to note about the file functions is that they are limited - in general and by default - to the **sandbox**. What this means is that GameMaker **cannot save or load files from anywhere that is not part of the game bundle or the local storage for the device** without _explicit_ input from the user, and even then this input is limited to only Windows, macOS and Ubuntu (Linux) target platforms.

IMPORTANT It is possible to turn off sandboxing on the Desktop targets (Windows, macOS, and Ubuntu) by checking the **Disable file system sandbox** option in the [Game Options](../Settings/Game_Options.md) for the target platform. You do this at your own risk, and while this will open up file saving and loading and permit you to access files anywhere on the given system, it may still be limited by the OS permissions.

## File Areas

To understand the sandbox first of all you need to understand that there are two distinct areas for files:

-   **The File Bundle** - This is where all the files that are packaged with the executable are stored, including the files that you have added to the **Included Files** asset list from the GameMaker IDE (which are the external files that you want packaged with the game). This area can be accessed through the [working\_directory](../GameMaker_Language/GML_Reference/File_Handling/File_Directories/working_directory.md) variable, however, files will be read from this location automatically when reading, without explicitly needing a path - this is explained more in the next section.
-   **The Save Area** - This is an area of device storage that can be safely written to by the game and the game is guaranteed that this is a writable area. This can be accessed through the [game\_save\_id](../../../../GameMaker_Language/GML_Reference/General_Game_Control/game_save_id.md) variable, however files will be read from this location too automatically when reading, and any saves are done here by default.

The following diagram may help you to visualise this better:

![File System Save Areas](../assets/Images/Scripting_Reference/Additional_Information/Files_SaveAreas.png)

## Accessing File Areas

When your game is sandboxed, only the two target areas - **the file bundle** and **the save area** - are available on each target platform, but on each one they will work slightly differently. However GameMaker has abstracted out the main essence of what can and can't be done, making it easier to re-target games to multiple environments.

To start with, let's look at how files are looked up in GameMaker, say if you do a read:

buf = buffer\_load("my\_file.dat");

or a write:

buffer\_save(buf, "my\_file.dat");

This will do one of two things depending on whether you are reading or writing:

-   **Reading Operations** - This will first check the [save area](../../../../GameMaker_Language/GML_Reference/General_Game_Control/game_save_id.md) to see if the file being accessed is there, and if it is, it uses that. However if the file does not exist in the save area, it then checks the [file bundle area](../GameMaker_Language/GML_Reference/File_Handling/File_Directories/working_directory.md) and uses that (if the file being looked for is an [Included File](../Settings/Included_Files.md) with your game).
-   **Writing Operations** - This can only happen in the save area, unless the sandbox is disabled and a path outside the save area is explicitly specified.

Using these two simple rules we can now see how the following functions work (these are examples to help you to visualise the process for the different functions available):

-   [directory\_create](../GameMaker_Language/GML_Reference/File_Handling/File_Directories/directory_create.md) (and the other directory functions) will only work in the **save** area.
-   The [file system functions](../GameMaker_Language/GML_Reference/File_Handling/File_System/File_System.md) will return information on files from _both_ the **bundle** and the **save** area, but will only _write_ to the **save** area.
-   The functions for writing text, binary or INI files will create a new file in the save area if one does not already exist, copying over any information from the original files included with the game bundle should they exist. Note that the original files will still remain in the read-only part of the save directory, but they won't be referenced as long as a version exists in the read/write section of the save area.

## Outside The Sandbox

On the **Windows**, **macOS** and **Ubuntu** (Linux) platforms there are two ways to save and load files from outside of the sandbox and that is either using the functions [get\_open\_filename](../GameMaker_Language/GML_Reference/File_Handling/File_System/get_open_filename.md) and [get\_save\_filename](../GameMaker_Language/GML_Reference/File_Handling/File_System/get_save_filename.md) (both of these functions will require that the user select an area for loading and saving, and the returned string can then be used in the rest of the file functions to bypass the sandbox - see the function descriptions for more details). The other way is to disable the sandbox altogether from the [Game Options](../Settings/Game_Options.md) for the target platform (only available for Desktop targets, as discussed further up this page).

On **HTML5** it is also possible to load files from outside the sandbox from a server, however this should only be done using the function [buffer\_load\_async](../GameMaker_Language/GML_Reference/Buffers/buffer_load_async.md) as loading synchronously has been deprecated on most browsers and will eventually be obsoleted. This means that files being loaded in this way should be saved as binary files - for example, you can save an \*.ini as a string (see [ini\_close](../GameMaker_Language/GML_Reference/File_Handling/Ini_Files/ini_close.md) for details) and then write that into a buffer which can then be saved and loaded using the async functions. Note that if you are loading images using [sprite\_add](../GameMaker_Language/GML_Reference/Asset_Management/Sprites/Sprite_Manipulation/sprite_add.md) then these are already dealt with asynchronously.

## Save Area Locations

Each target platform has its own save area where files and directories can be written to and read from. Below is a list of those areas for each target when sandboxed:

-   **Windows**: Windows has all files in the %localappdata%\\<Game Name> directory (on Windows this is the /Users/<User Name>/AppData/Local/<Game Name> directory).
-   **HTML5**, **GX.games**: Everything is done through the local storage.
-   **macOS**: Storage will depend on whether the application is sandboxed or not (following Apple's rules, with the path usually being ~/Library/Application Support/<Game Name>).
-   **Ubuntu (Linux)**: Files are stored in the Home/.config/gamename where "Home" is the users home directory - /home/<username>
-   **iOS** / **tvOS**: Storage is the standard location (as viewed through iTunes).
-   **Android**: Files are in the standard location (which is invisible unless the device is rooted) /data/<package name>.

It is worth noting that the HTML5 target module has a limit on local storage (which can be between 1MB and 5MB depending on the browser) meaning that you will not be permitted to save large sprites, screenshots, etc.