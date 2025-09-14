---
title: "os_type"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/OS_And_Compiler/os_type.htm"
converted: "2025-09-14T04:00:04.718Z"
---

# os\_type

This **read-only** variable holds one of various constant GameMaker has to tell you which operating system the game has been created for. Note that this is _not_ necessarily the same as the OS of the device running it, since - for example - your game could be running on an Amazon Fire OS, but will have been built for the Android platform (in which case os\_type will be os\_android).

The following constants can be returned:

| OS Type Constant |
| --- |
| Constant | Description |
| os_windows | Windows OS |
| os_gxgames | GX.games |
| os_linux | Linux |
| os_macosx | macOS X |
| os_ios | iOS (iPhone, iPad, iPod Touch) |
| os_tvos | Apple tvOS |
| os_android | Android |
| os_ps4 | Sony PlayStation 4 |
| os_ps5 | Sony PlayStation 5 |
| os_gdk / os_xboxseriesxs | Microsoft GDK (Xbox One and Xbox Series X/S) |
| os_switch | Nintendo Switch |
| os_unknown | Unknown OS |

#### Syntax:

os\_type;

#### Returns:

[OS Type Constant](os_type.md)

#### Example:

switch (os\_type)
{
case os\_windows: global.Config = 0; break;
case os\_android: global.Config = 1; break;
case os\_linux: global.Config = 2; break;
case os\_macosx: global.Config = 3; break;
case os\_ios: global.Config = 4; break;
case os\_winphone: global.Config = 5; break;
}

The above code checks the OS running the game and sets a global variable accordingly.