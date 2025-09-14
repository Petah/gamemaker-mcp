---
title: "os_get_config"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/OS_And_Compiler/os_get_config.htm"
converted: "2025-09-14T04:00:04.440Z"
---

# os\_get\_config

This function returns the name (as a string) of the currently selected configuration for your game. For more information on configurations please see the section [Configurations](../../../../../../Settings/Configurations.md).

#### Syntax:

os\_get\_config()

#### Returns:

[String](../../../../../../GameMaker_Language/GML_Overview/Data_Types.md)

#### Example:

if (os\_get\_config() = "Free\_Version")
{
    global.Ads = true;
}
else global.Ads = false;

The above code will check to see which configuration is being used and if it is the one called "Free\_Version", ads will be enabled in the game.