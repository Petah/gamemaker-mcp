---
title: "shaders_are_supported"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Shaders/shaders_are_supported.htm"
converted: "2025-09-14T03:59:40.255Z"
---

# shaders\_are\_supported

This function will return whether the current target platform supports shaders, returning true if it does, and false if it does not (which would be the case for HTML5 [without WebGL](../../../../Settings/Game_Options/HTML5.htm#graphics) and old Android devices).

It is important to note that on **Android**, if the project does not have any shader assets defined, then the function will _always return false_, regardless of whether the device supports shaders or not.

#### Syntax:

shaders\_are\_supported();

#### Returns:

[Boolean](../../../GML_Overview/Data_Types.md)

#### Example:

global.GFX = false;
if (shaders\_are\_supported())
{
    if (shader\_is\_compiled(sh\_glass) && shader\_is\_compiled(sh\_warp))
    {
        global.GFX = true;
    }
}

The above code will set a global variable to false, and then if the platform supports shaders and both the shaders being checked have compiled correctly, it will be set to true.