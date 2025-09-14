---
title: "HTML5"
source: "manual.gamemaker.io/monthly/en/Setting_Up_And_Version_Information/Platform_Preferences/HTML5.htm"
converted: "2025-09-14T04:00:14.086Z"
---

# HTML5 Preferences

The HTML5 preferences have the following options:![HTML5 Preferences](../../assets/Images/Setup_And_Version/Platform_Preferences/HTML5_Prefs.png)

-   **Obfuscate**: Whether the HTML5 runner code should be obfuscated in debug mode or not.
-   **Pretty Print**: Whether the game code should be pretty printed (formatted) or not.
-   **Remove Unused Functions**: Whether unused functions should be removed from the final JavaScript code (removes both built-in GameMaker functions and custom GML functions which are unused). Enabling this reduces runtime size.
-   **Enable Debug Rename**: This option prefixes identifiers in the minified code with obf\_ instead of renaming them to short ones, making it easier to look for things when debugging.
-   **Enable Conditional Compilation**: This option enables conditional compilation of the runtime code, which will strip parts that are unused by your game. It can be used together with **Remove Unused Functions** for best results.
-   **Keep JSDoc**: This enables or disables JSDoc comments in the game code.
-   **Verbose**: Enable or disable verbose logging in the Output Log while building for HTML5.
-   **Default packaging type**: When building a final HTML5 executable package, you can choose between **Package as loose files** - which will simply generate all the required files in a folder - or **Package as Zip** - which will create a compressed ZIP file that will have the game and any additional files within. By default you will be given a choice of which of these two options you wish to choose on compile, but you can set this preference to always use one or the other. Note that when this option is set to _Show Dialogue_, in the actual dialogue window that pops up on compile, choosing "Remember Packaging Option" will set this preference to the option you select.
-   **Default Web Server Port**: This lets you change the default port for the HTML5 web server. Default value is 51264.
-   **Default Web Server Address**: Here you can change the default web server address for the HTML5 web server. Default value is 127.0.0.1.
-   **Default Web Server Allowed IPs**: Here you can add in any allowed IPs for the web server and they will be set as default for all devices added through the Target Manager.
-   **Path to HTML5 Runner**: Here you can change the path to the HTML5 runner to use a custom version of the runner. The default value is ${html5\_runner\_path}, which points to the HTML5 runner downloaded through the IDE.

IMPORTANT When using a particular target device (i.e. browser), the IP and port values set for that particular device are used instead of these preferences. Check [The Device Manager](../The_Device_Manager.htm#h) to see a list of your devices with their details.