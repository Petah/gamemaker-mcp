---
title: "path_end"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Paths/path_end.htm"
converted: "2025-09-14T03:59:35.027Z"
---

# path\_end

This function ends the current path that the instance is following, as set when the function [path\_start](path_start.md) was called.

WARNING This function should be called from the scope of an instance. An error will be thrown if it's not.

#### Syntax:

path\_end();

#### Returns:

N/A

#### Example:

if (place\_meeting(x, y, obj\_Blocker))
{
    path\_end();
}

The above code will end the current path if the instance detects any collision with any instance of the given object.