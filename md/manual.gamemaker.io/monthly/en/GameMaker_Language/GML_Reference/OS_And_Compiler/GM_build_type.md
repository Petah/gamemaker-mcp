---
title: "GM_build_type"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/OS_And_Compiler/GM_build_type.htm"
converted: "2025-09-14T04:00:04.177Z"
---

# GM\_build\_type

This string constant holds the type of the build: "exe" for a created executable or "run" for a test run started from the IDE.

#### Syntax:

GM\_build\_type

#### Returns:

[String](../../GML_Overview/Data_Types.md)

#### Example:

draw\_text(32, 32, GM\_build\_type);

The above code will draw the build type of the currently running executable.