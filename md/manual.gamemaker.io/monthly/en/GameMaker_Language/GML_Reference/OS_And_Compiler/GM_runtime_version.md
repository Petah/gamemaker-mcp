---
title: "GM_runtime_version"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/OS_And_Compiler/GM_runtime_version.htm"
converted: "2025-09-14T04:00:04.211Z"
---

# GM\_runtime\_version

This constant hold the runtime version number as defined in the [Runtime Feeds Preferences](../../../../../../Setting_Up_And_Version_Information/IDE_Preferences/Runtime_Feed_Preferences.md) as the runtime being used to build the project.

#### Syntax:

GM\_runtime\_version

#### Holds:

[String](../../../../../../GameMaker_Language/GML_Overview/Data_Types.md)

#### Example:

draw\_text(32, 32, date\_time\_string(GM\_build\_date));
draw\_text(32, 64, "v" + GM\_version);
draw\_text(32, 96, "Runtime " + GM\_runtime\_version);

The above code takes the GM date, version and runtime constants and draws them to the screen.