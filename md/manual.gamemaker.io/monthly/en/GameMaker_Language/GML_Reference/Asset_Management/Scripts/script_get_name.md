---
title: "script_get_name"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Scripts/script_get_name.htm"
converted: "2025-09-14T03:59:39.528Z"
---

# script\_get\_name

This function will return the name _as a string_ of the specified script asset. This name is the one that has been specified for the script in the Asset Browser of the main GameMaker window. This function also accepts [script functions](../../../GML_Overview/Script_Functions.md) and [method variables](../../../GML_Overview/Method_Variables.md).

For more information about scripts, see [The Script Editor](../../../../The_Asset_Editors/Scripts.md).

#### Syntax:

script\_get\_name(scr);

| Argument | Type | Description |
| --- | --- | --- |
| scr | Script Asset | The index of the script that you want to get the name of. |

#### Returns:

[String](../../../GML_Overview/Data_Types.md)

#### Example:

scr\_name = script\_get\_name(Help\_File);

The above example code will store the name of the indicated script index in the variable "scr\_name".