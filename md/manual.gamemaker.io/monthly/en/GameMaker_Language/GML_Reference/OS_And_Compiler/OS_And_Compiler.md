---
title: "OS And Compiler"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/OS_And_Compiler/OS_And_Compiler.htm"
converted: "2025-09-14T04:00:04.242Z"
---

# OS And Compiler

When creating cross-platform games, it is often of vital importance that you get the details of the operating system that the device running your game is using. Things like the language, the version or the network state can all be used to adapt your game to the system running it and make the end-user experience the best possible, so GameMaker has a number of special functions which can be used to get the necessary information.

## OS and Browser

The following functions and variables exist for you to use to get certain details about the operating system or browser that is running your game:

-   [os\_browser](os_browser.md)
-   [os\_device](os_device.md)
-   [os\_type](os_type.md)
-   [os\_version](os_version.md)
-   [os\_is\_paused](os_is_paused.md)
-   [os\_is\_network\_connected](os_is_network_connected.md)
-   [os\_get\_config](../../../../../../GameMaker_Language/GML_Reference/OS_And_Compiler/os_get_config.md)
-   [os\_get\_language](os_get_language.md)
-   [os\_get\_region](os_get_region.md)
-   [os\_get\_info](os_get_info.md)
-   [os\_powersave\_enable](../../../../../../GameMaker_Language/GML_Reference/OS_And_Compiler/os_powersave_enable.md)
-   [os\_lock\_orientation](os_lock_orientation.md)
-   [os\_set\_orientation\_lock](os_set_orientation_lock.md)
-   [os\_check\_permission](os_check_permission.md)
-   [os\_request\_permission](os_request_permission.md)

## Pre-compiled Functions and Constants

Certain functions and constants are _pre-compiled_ when you run your game (i.e.: they are used to define how the final game will be compiled), and some are also for use when the game has been compiled to get specific details about the runtime environment. Here you can find the full list of them:

-   [GM\_build\_date](../../../../../../GameMaker_Language/GML_Reference/OS_And_Compiler/GM_build_date.md)
-   [GM\_build\_type](GM_build_type.md)
-   [GM\_version](GM_version.md)
-   [GM\_runtime\_version](../../../../../../GameMaker_Language/GML_Reference/OS_And_Compiler/GM_runtime_version.md)
-   [GM\_project\_filename](GM_project_filename.md)
-   [GM\_is\_sandboxed](GM_is_sandboxed.md)
-   [gml\_release\_mode](gml_release_mode.md)
-   [gml\_pragma](../../../../../../GameMaker_Language/GML_Reference/OS_And_Compiler/gml_pragma.md)
-   [parameter\_count](parameter_count.md)
-   [parameter\_string](parameter_string.md)
-   [environment\_get\_variable](../../../../../../GameMaker_Language/GML_Reference/OS_And_Compiler/environment_get_variable.md)

## Scheduler

On Windows, the resolution of the Windows thread scheduler is set to 1ms by default when your game runs. The following functions are available for retrieving and changing the resolution of the Windows thread scheduler at runtime:

-   [scheduler\_resolution\_get](scheduler_resolution_get.md)
-   [scheduler\_resolution\_set](scheduler_resolution_set.md)

## Clipboard

Some targets also give you access to the clipboard to get and set information. For this GameMaker has the following functions:

-   [clipboard\_has\_text](../Strings/clipboard_has_text.md)
-   [clipboard\_get\_text](../../../../../../GameMaker_Language/GML_Reference/Strings/clipboard_get_text.md)
-   [clipboard\_set\_text](../Strings/clipboard_set_text.md)

## Extensions

Finally, when working with [Extensions](../../../The_Asset_Editors/Extensions.md) you may need to be able to define and call external functions at runtime, and so you'd use the following:

NOTE These are legacy functions and you should define any extension functions within the Extension Editor itself.

NOTE These functions are for the **Windows** and **macOS** target platforms only.

-   [external\_define](external_define.md)
-   [external\_call](external_call.md)
-   [external\_free](external_free.md)