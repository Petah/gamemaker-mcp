---
title: "environment_get_variable"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/OS_And_Compiler/environment_get_variable.htm"
converted: "2025-09-14T04:00:04.255Z"
---

# environment\_get\_variable

This function returns the value (a string) of the environment variable with the given name (also a string). When the specified environment variable is not found, the function returns an empty string "".

You can get the available environment variables on macOS and Ubuntu (Linux) by typing "env" into the terminal app, and for information on Windows environment variables, if you are using the command prompt then type "set", and using PowerShell it's "ls env:". Note that on both macOS and Ubuntu (Linux) the "HOME" environment variable will return the "~/" path which maps to "/Users/<username>" on macOS and "/home/<username>" on Ubuntu (Linux).

NOTE This function is for Windows, macOS and Ubuntu (Linux) only.

#### Syntax:

environment\_get\_variable(name);

| Argument | Type | Description |
| --- | --- | --- |
| name | String | The name (a string) of the environment variable to check. |

#### Returns:

[String](../../../../../../GameMaker_Language/GML_Overview/Data_Types.md)

#### Example:

e\_str = environment\_get\_variable("APPDATA");

The above code will return the full path for the environment variable "%appdata%", which is normally "C:\\Users\\{username}\\AppData\\Roaming".